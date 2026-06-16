import { useState, useRef } from 'react';
import type { SyntheticEvent } from 'react';
import { text } from '@/utils/langUtils';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxMpAHVtSNb-KGhAuOIn5qZ5cyVvCbZ4PS0lL3mPyRUre53DNWfWBmlHi9ZfyUGPQKl/exec';

interface NotificationState {
  message: string;
  show: boolean;
  isSuccess: boolean;
}

export function useContact() {
  const textLang = text('contact');
  const formRef = useRef<HTMLFormElement>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [notif, setNotif] = useState<NotificationState>({
    message: '',
    show: false,
    isSuccess: true,
  });

  const showNotification = (message: string, isSuccess: boolean = true) => {
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
        showNotification(textLang.success, true);
        formRef.current.reset();
      } else {
        showNotification(textLang.failure, false);
      }
    } catch (error) {
      showNotification(`Error: ${error instanceof Error ? error.message : error}`, false);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    textLang,
    formRef,
    isLoading,
    notif,
    handleSubmit,
  };
}
