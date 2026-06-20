import { useState, useRef, useEffect } from 'react';
import type { FormEvent } from 'react';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycby3mxHqj4yA8Q15HGEVohQ_F3TS4gQo8AmUcjfqQ7lg4x8u1xwRDjKH33KxzS_FdiFD/exec';

interface NotificationState {
  message: string;
  show: boolean;
  isSuccess: boolean;
}

interface UseContactProps {
  successMessage: string;
  failureMessage: string;
}

export function useContact({ successMessage, failureMessage }: UseContactProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [notif, setNotif] = useState<NotificationState>({
    message: '',
    show: false,
    isSuccess: true,
  });

  const showNotification = (message: string, isSuccess = true) => {
    // 🚀 Hapus timer sebelumnya jika pengguna submit ulang dengan cepat (Anti-race condition)
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setNotif({ message, show: true, isSuccess });

    timeoutRef.current = setTimeout(() => {
      setNotif((prev) => ({ ...prev, show: false }));
    }, 4000);
  };

  // Bersihkan timer otomatis saat komponen di-unmount dari layar browser
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current || isLoading) return; // 🚀 Mencegah double-submit jika sedang loading

    setIsLoading(true);

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: new FormData(formRef.current),
      });

      if (response.ok) {
        showNotification(successMessage, true);
        formRef.current.reset();
      } else {
        showNotification(failureMessage, false);
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : String(error);
      showNotification(`Error: ${errorMsg}`, false);
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
