import { useContact } from '@/features/contacts';
import { useI18n } from '@/shared/lib';
import { SectionHeading } from './SectionHEading';
import { Button, Input, Label, Textarea, Card, CardContent } from '@/shared/ui';
import { Send } from 'lucide-react';
import { Spinner } from '@/shared/ui/spinner';

const MEDSOS = [
  { logo: 'bxl bx-github', href: 'https://github.com/dhaboav' },
  { logo: 'bxl bx-linkedin', href: 'https://www.linkedin.com/in/dhaboav' },
  { logo: 'bxl bx-instagram', href: 'https://www.instagram.com/dhaboav' },
];

export function ContactSection() {
  const { ui } = useI18n();
  const { formRef, isLoading, notif, handleSubmit } = useContact({
    successMessage: ui.contact.successStatus,
    failureMessage: ui.contact.failureStatus,
  });

  return (
    <section
      id="contact"
      className="bg-background mx-auto min-h-screen max-w-6xl px-4 py-32 text-white"
    >
      <SectionHeading index="04" title={ui.contact.label} note="open a channel" />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:px-0">
        <div className="flex flex-col gap-6">
          <p className="text-muted-foreground text-base leading-relaxed lg:text-lg">
            {ui.contact.description}
          </p>
          <div className="flex gap-6 text-white/80">
            {MEDSOS.map(({ logo, href }) => (
              <a
                key={logo}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary text-2xl transition-colors"
              >
                <i className={logo} />
              </a>
            ))}
          </div>
        </div>

        <Card>
          <CardContent className="px-4 lg:p-6">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-muted-foreground font-mono text-xs tracking-[0.15em] uppercase"
                  >
                    {ui.contact.namePlaceholder}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={ui.contact.namePlaceholder}
                    required
                    disabled={isLoading}
                    className="border-border focus:border-primary placeholder:text-muted-foreground py-6 focus-visible:ring-0"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-muted-foreground font-mono text-xs tracking-[0.15em] uppercase"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@domain.com"
                    required
                    disabled={isLoading}
                    className="border-border focus:border-primary placeholder:text-muted-foreground py-6 focus-visible:ring-0"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-muted-foreground font-mono text-xs tracking-[0.15em] uppercase"
                >
                  {ui.contact.messagePlaceholder}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  disabled={isLoading}
                  required
                  rows={5}
                  placeholder={ui.contact.messagePlaceholder}
                  className="border-border focus:border-primary placeholder:text-muted-foreground bg-background min-h-30 resize-none focus-visible:ring-0"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className={`flex w-full items-center justify-center gap-2 p-6 text-sm font-medium text-black transition-all ${isLoading && 'cursor-not-allowed opacity-70'}`}
              >
                {isLoading ? (
                  <>
                    <Spinner />
                    <span>{ui.contact.loadingStatus}</span>
                  </>
                ) : (
                  <>
                    <Send />
                    <span>{ui.contact.sendStatus}</span>
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div
        className={`fixed right-6 bottom-6 z-50 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm shadow-lg transition-all ${
          notif.show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
        } ${notif.isSuccess ? 'text-green-400' : 'text-red-400'}`}
      >
        {notif.message}
      </div>
    </section>
  );
}
