import { useContact } from '@/features/contacts';
import { useI18n } from '@/shared/lib';
import { SectionHeading } from './SectionHeading';
import { Button, Input, Label, Textarea, Card, CardContent, Spinner } from '@/shared/ui';
import { Send } from 'lucide-react';
import { snsData } from '@/data';

export function ContactSection() {
  const { ui, data } = useI18n();
  const { sectionTitle, subtitle, formLabels, placeholders, submitButton } = ui.contact;
  const t = data.contact;
  const { formRef, isLoading, notif, handleSubmit } = useContact({
    successMessage: 's',
    failureMessage: 'f',
  });

  return (
    <section id="contact" className="section-container">
      <div className="content-container layout">
        <SectionHeading index="04" title={sectionTitle} note={subtitle} />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:px-0">
          <div className="flex flex-col gap-6">
            <p className="text-muted-foreground text-base leading-relaxed lg:text-lg">
              {t.description}
            </p>
            <div className="text-foreground/80 flex gap-6">
              {snsData.map(({ logo: Logo, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary text-2xl transition-colors"
                >
                  <Logo />
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
                      {formLabels.name}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={placeholders.name}
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
                      placeholder={placeholders.email}
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
                    {formLabels.message}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    disabled={isLoading}
                    required
                    rows={5}
                    placeholder={placeholders.message}
                    className="border-border focus:border-primary placeholder:text-muted-foreground bg-background min-h-30 resize-none focus-visible:ring-0"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className={`flex w-full items-center justify-center gap-2 p-6 text-sm font-medium transition-all ${isLoading && 'cursor-not-allowed opacity-70'}`}
                >
                  {isLoading ? (
                    <>
                      <Spinner />
                      <span>s</span>
                    </>
                  ) : (
                    <>
                      <Send />
                      <span>{submitButton}</span>
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
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
