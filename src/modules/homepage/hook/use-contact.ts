import { type SubmitHandler, reset, useForm } from '@formisch/react';
import { useState } from 'react';
import * as v from 'valibot';

import { useI18n } from '@/shared/i18n/useI18n';
import { toast } from '@/ui/toast';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycby3mxHqj4yA8Q15HGEVohQ_F3TS4gQo8AmUcjfqQ7lg4x8u1xwRDjKH33KxzS_FdiFD/exec';

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

export function useContact() {
  const { data } = useI18n();
  const t = data.contact;

  const form = useForm({
    schema: FormSchema,
    initialInput: { name: '', email: '', message: '' },
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit: SubmitHandler<typeof FormSchema> = async (values) => {
    if (isLoading) return;
    setIsLoading(true);

    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => formData.append(key, value));

    const submitPromise = fetch(SCRIPT_URL, { method: 'POST', body: formData })
      .then((response) => {
        if (!response.ok) throw new Error(t.notification.failure);
        reset(form);
      })
      .finally(() => setIsLoading(false));

    toast.promise(submitPromise, {
      loading: t.notification.pending,
      success: t.notification.success,
      error: t.notification.failure,
    });
  };

  return { form, isLoading, handleSubmit };
}
