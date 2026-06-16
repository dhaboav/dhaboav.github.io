import { useContact } from '@/hooks/useContact';

export default function Contact() {
  const { textLang, formRef, isLoading, notif, handleSubmit } = useContact();

  return (
    <section id="contact" className="min-h-screen bg-black py-32 text-white md:py-40 lg:py-56">
      <div className="container mx-auto px-4">
        {/* SECTION HEADER */}
        <div className="mx-auto mb-12 max-w-md text-center sm:mb-14 md:mb-16">
          <p className="mb-3 font-mono text-[10px] tracking-wider text-zinc-500 uppercase sm:text-xs">
            {textLang.label}
          </p>
          <h2 className="mb-3 text-xl font-medium tracking-tight sm:text-2xl md:text-3xl">
            {textLang.title}
          </h2>
          <p className="text-sm text-zinc-400 sm:text-base">{textLang.subtitle}</p>
        </div>

        {/* FORM KONTAK */}
        <div className="mx-auto max-w-sm sm:max-w-md">
          <form ref={formRef} onSubmit={handleSubmit} className="mb-10 space-y-5 sm:space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder={textLang.namePlaceholder}
                required
                disabled={isLoading}
                className="focus:border-primary w-full border-0 border-b border-zinc-600 bg-transparent px-0 py-3 text-white transition-colors placeholder:text-zinc-500 focus:outline-none disabled:opacity-50"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder={textLang.emailPlaceholder}
                required
                disabled={isLoading}
                className="focus:border-primary w-full border-0 border-b border-zinc-600 bg-transparent px-0 py-3 text-white transition-colors placeholder:text-zinc-500 focus:outline-none disabled:opacity-50"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder={textLang.messagePlaceholder}
                rows={4}
                required
                disabled={isLoading}
                className="focus:border-primary w-full resize-none border-0 border-b border-zinc-600 bg-transparent px-0 py-3 text-white transition-colors placeholder:text-zinc-500 focus:outline-none disabled:opacity-50"
              />
            </div>

            {/* TOMBOL KIRIM */}
            <button
              type="submit"
              disabled={isLoading}
              className={`flex w-full cursor-pointer items-center justify-center gap-2 bg-white py-3 text-sm font-medium text-black transition-all ${
                isLoading
                  ? 'cursor-not-allowed opacity-70'
                  : 'hover:bg-white/90 active:scale-[0.99]'
              }`}
            >
              {/* Spinner Loading SVG Modern */}
              {isLoading && (
                <svg className="h-4 w-4 animate-spin text-black" fill="none" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              )}
              <span>{isLoading ? textLang.loading : textLang.send}</span>
            </button>
          </form>

          {/* SOCIAL MEDIA LINKS */}
          <div className="flex items-center justify-center gap-4 text-white/80 sm:gap-6">
            <a
              href="https://github.com/dhaboav"
              target="_blank"
              rel="noreferrer"
              className="text-2xl transition-colors hover:text-zinc-400"
            >
              <i className="bxl bx-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/dhaboav"
              target="_blank"
              rel="noreferrer"
              className="text-2xl transition-colors hover:text-blue-500"
            >
              <i className="bxl bx-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/dhaboav"
              target="_blank"
              rel="noreferrer"
              className="text-2xl transition-colors hover:text-pink-500"
            >
              <i className="bxl bx-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* POP-UP TOAST NOTIFIKASI */}
      <div
        className={`fixed right-6 bottom-6 z-50 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm shadow-lg transition-all duration-300 ${
          notif.show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
        } ${notif.isSuccess ? 'text-green-400' : 'text-red-400'}`}
      >
        {notif.message}
      </div>
    </section>
  );
}
