import { Form, reset } from '@formisch/react';
import { SendIcon } from 'lucide-react';

import { snsData } from '@/data';
import { useContact } from '@/hooks/contact/useContact';
import { useI18n } from '@/i18n/useI18n';
import { Button } from '@/ui/button';
import { Card, CardContent } from '@/ui/card';
import { InputField, TextareaField } from '@/ui/shared-form-fields';
import { Spinner } from '@/ui/spinner';

import { SectionHeading } from './SectionHeading';

export function ContactSection() {
  const { ui, data } = useI18n();
  const { sectionTitle, subtitle, formLabels, placeholders, submitButton } = ui.contact;
  const t = data.contact;
  const { form, isLoading, handleSubmit } = useContact();

  return (
    <section id="contact" className="section-container">
      <div className="content-container layout">
        <SectionHeading index="04" title={sectionTitle} note={subtitle} />
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.6fr_auto] lg:px-0">
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
            <CardContent className="px-4 py-6 lg:p-6">
              <Form of={form} id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 lg:grid-cols-2 items-start">
                  <InputField
                    of={form}
                    path="name"
                    label={formLabels.name}
                    placeholder={placeholders.name}
                  />
                  <InputField
                    of={form}
                    path="email"
                    label="email"
                    placeholder={placeholders.email}
                    type="email"
                  />
                </div>

                <TextareaField
                  of={form}
                  path="message"
                  label={formLabels.message}
                  placeholder={placeholders.message}
                  className="border-border focus:border-primary placeholder:text-muted-foreground bg-background min-h-30 resize-none focus-visible:ring-0"
                />

                <div className="flex items-center gap-3">
                  <Button
                    type="button"
                    disabled={isLoading}
                    variant="outline"
                    onClick={() => reset(form)}
                    className="h-12 px-6 font-medium"
                  >
                    Reset
                  </Button>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className={`h-12 flex-1 font-medium transition-all ${
                      isLoading ? 'cursor-not-allowed opacity-70' : ''
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <Spinner />
                        <span>{t.notification.pending}</span>
                      </>
                    ) : (
                      <>
                        <SendIcon className="mr-2 h-4 w-4" />
                        <span>{submitButton}</span>
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
