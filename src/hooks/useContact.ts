import { useState, useRef } from 'react';
import type { SyntheticEvent } from 'react';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycby3mxHqj4yA8Q15HGEVohQ_F3TS4gQo8AmUcjfqQ7lg4x8u1xwRDjKH33KxzS_FdiFD/exec';

interface NotificationState {
  message: string;
  show: boolean;
  isSuccess: boolean;
}

export function useContact(messages: { success: string; failure: string }) {
  const formRef = useRef<HTMLFormElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [notif, setNotif] = useState<NotificationState>({
    message: '',
    show: false,
    isSuccess: true,
  });

  const showNotification = (message: string, isSuccess = true) => {
    setNotif({ message, show: true, isSuccess });

    setTimeout(() => {
      setNotif((prev) => ({ ...prev, show: false }));
    }, 4000);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsLoading(true);

    try {
      const formData = new FormData(formRef.current);

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        showNotification(messages.success, true);
        formRef.current.reset();
      } else {
        showNotification(messages.failure, false);
      }
    } catch (error) {
      showNotification(`Error: ${error instanceof Error ? error.message : String(error)}`, false);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formRef,
    isLoading,
    notif,
    handleSubmit,
  };
}
