import { useBackToTop } from '@/hooks/useBackToTop';

export default function BackToTop() {
  const { isVisible, scrollToTop } = useBackToTop();

  return (
    <a
      href="#home"
      id="to-top"
      onClick={scrollToTop}
      className={`fixed right-4 bottom-4 z-[9999] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-orange-700 text-xl text-white shadow-lg transition-all duration-300 hover:animate-pulse ${
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <i className="bx bx-chevron-up"></i>
    </a>
  );
}
