import { useRef, useState } from 'react';
import { toast } from '@/shared/ui';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycby3mxHqj4yA8Q15HGEVohQ_F3TS4gQo8AmUcjfqQ7lg4x8u1xwRDjKH33KxzS_FdiFD/exec';

interface UseContactProps {
  successMessage: string;
  failureMessage: string;
  loadingMessage: string;
}

export function useContact({ successMessage, failureMessage, loadingMessage }: UseContactProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!formRef.current || isLoading) return;

    const currentForm = formRef.current;

    const sendData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(SCRIPT_URL, {
          method: 'POST',
          body: new FormData(currentForm),
        });

        if (!response.ok) {
          throw new Error(failureMessage);
        }

        currentForm.reset();
        return successMessage;
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
    formRef,
    isLoading,
    handleSubmit,
  };
}
