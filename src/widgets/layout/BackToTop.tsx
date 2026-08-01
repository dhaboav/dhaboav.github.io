import { ChevronUp } from 'lucide-react';
import { useBackToTop } from './hooks/useBackToTop';

export function BackToTop() {
  const { isVisible, scrollToTop } = useBackToTop();

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`bg-primary fixed right-4 bottom-7 z-9999 flex h-10 w-10 items-center justify-center rounded-full text-xl text-white shadow-lg transition-all duration-300 hover:animate-pulse ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ChevronUp />
    </button>
  );
}
