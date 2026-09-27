import { type SubmitHandler, reset, useForm } from '@formisch/react';
import { useState } from 'react';
import * as v from 'valibot';

import { toast } from '@/ui/toast';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycby3mxHqj4yA8Q15HGEVohQ_F3TS4gQo8AmUcjfqQ7lg4x8u1xwRDjKH33KxzS_FdiFD/exec';

interface UseContactProps {
  successMessage: string;
  failureMessage: string;
  loadingMessage: string;
}

const FormSchema = v.object({
  name: v.pipe(
    v.string(),
    v.nonEmpty('Please enter your name.'),
    v.minLength(4, 'Name must be at least 4 characters.'),
    v.maxLength(32, 'Name must be at most 32 characters.'),
  ),
  email: v.pipe(
    v.string(),
    v.nonEmpty('Please enter your email.'),
    v.email('The email address is badly formatted.'),
  ),
  message: v.pipe(
    v.string(),
    v.nonEmpty('Please enter your message.'),
    v.minLength(6, 'Message must be at least 6 characters.'),
    v.maxLength(256, 'Name must be at most 256 characters.'),
  ),
});

export function useContact({ successMessage, failureMessage, loadingMessage }: UseContactProps) {
  const form = useForm({
    schema: FormSchema,
    initialInput: {
      name: '',
      email: '',
      message: '',
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit: SubmitHandler<typeof FormSchema> = async (values) => {
    if (isLoading) return;
    setIsLoading(true);

    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('message', values.message);

    const sendData = async () => {
      try {
        const response = await fetch(SCRIPT_URL, {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error(failureMessage);
        }
        reset(form);
      } finally {
        setIsLoading(false);
      }
    };

    toast.promise(sendData(), {
      loading: loadingMessage,
      success: successMessage,
      error: failureMessage,
    });
  };

  return {
    form,
    isLoading,
    handleSubmit,
  };
}
