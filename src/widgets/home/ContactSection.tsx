import { useContact } from '@/features/contacts';
import { useI18n } from '@/shared/lib';

export const ContactSection = () => {
  const { ui } = useI18n();
  const { formRef, isLoading, notif, handleSubmit } = useContact({
    successMessage: ui.contact.successStatus,
    failureMessage: ui.contact.failureStatus,
  });

  return (
    <section id="contact" className="min-h-screen bg-black py-32 text-white md:py-40 lg:py-56">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="mx-auto mb-12 max-w-md text-center sm:mb-14 md:mb-16">
          <p className="mb-3 font-mono text-[10px] tracking-wider text-zinc-500 uppercase sm:text-xs">
            {ui.contact.label}
          </p>

          <h2 className="mb-3 text-xl font-medium tracking-tight sm:text-2xl md:text-3xl">
            {ui.contact.header}
          </h2>

          <p className="text-sm text-zinc-400 sm:text-base">{ui.contact.description}</p>
        </div>

        {/* FORM */}
        <div className="mx-auto max-w-sm sm:max-w-md">
          <form ref={formRef} onSubmit={handleSubmit} className="mb-10 space-y-5 sm:space-y-6">
            <input
              type="text"
              name="name"
              placeholder={ui.contact.namePlaceholder}
              required
              disabled={isLoading}
              className="focus:border-primary w-full border-b border-zinc-600 bg-transparent py-3 text-white placeholder:text-zinc-500 focus:outline-none disabled:opacity-50"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              disabled={isLoading}
              className="focus:border-primary w-full border-b border-zinc-600 bg-transparent py-3 text-white placeholder:text-zinc-500 focus:outline-none disabled:opacity-50"
            />

            <textarea
              name="message"
              placeholder={ui.contact.messagePlaceholder}
              rows={4}
              required
              disabled={isLoading}
              className="focus:border-primary w-full resize-none border-b border-zinc-600 bg-transparent py-3 text-white placeholder:text-zinc-500 focus:outline-none disabled:opacity-50"
            />

            <button
              type="submit"
              disabled={isLoading}
              className={`flex w-full items-center justify-center gap-2 rounded-md bg-white py-3 text-sm font-medium text-black transition-all ${
                isLoading
                  ? 'cursor-not-allowed opacity-70'
                  : 'hover:bg-white/90 active:scale-[0.99]'
              }`}
            >
              {isLoading && (
                <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="opacity-25"
                  />
                  <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" className="opacity-75" />
                </svg>
              )}

              <span>{isLoading ? ui.contact.loadingStatus : ui.contact.sendStatus}</span>
            </button>
          </form>

          {/* SOCIAL */}
          <div className="flex items-center justify-center gap-4 text-white/80 sm:gap-6">
            <a href="https://github.com/dhaboav" className="text-2xl hover:text-zinc-400">
              <i className="bxl bx-github" />
            </a>

            <a href="https://www.linkedin.com/in/dhaboav" className="text-2xl hover:text-blue-500">
              <i className="bxl bx-linkedin" />
            </a>

            <a href="https://www.instagram.com/dhaboav" className="text-2xl hover:text-pink-500">
              <i className="bxl bx-instagram" />
            </a>
          </div>
        </div>
      </div>

      {/* TOAST */}
      <div
        className={`fixed right-6 bottom-6 z-50 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm shadow-lg transition-all ${
          notif.show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
        } ${notif.isSuccess ? 'text-green-400' : 'text-red-400'}`}
      >
        {notif.message}
      </div>
    </section>
  );
};
