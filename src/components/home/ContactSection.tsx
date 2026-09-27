import { Form, Field as FormischField, reset } from '@formisch/react';
import { SendIcon } from 'lucide-react';

import { snsData } from '@/data';
import { useContact } from '@/hooks/contact/useContact';
import { useI18n } from '@/i18n/useI18n';
import { Button } from '@/ui/button';
import { Card, CardContent } from '@/ui/card';
import { Field, FieldError, FieldLabel } from '@/ui/field';
import { Input } from '@/ui/input';
import { Spinner } from '@/ui/spinner';
import { Textarea } from '@/ui/textarea';

import { SectionHeading } from './SectionHeading';

export function ContactSection() {
  const { ui, data } = useI18n();
  const { sectionTitle, subtitle, formLabels, placeholders, submitButton } = ui.contact;
  const t = data.contact;
  const { form, isLoading, handleSubmit } = useContact();

  const textFields = [
    { name: 'name', label: formLabels.name, placeholder: placeholders.name, type: 'text' },
    { name: 'email', label: 'email', placeholder: placeholders.email, type: 'email' },
  ] as const;

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
                  {textFields.map(({ name, label, placeholder, type }) => (
                    <FormischField key={name} of={form} path={[name]}>
                      {(field) => (
                        <Field data-invalid={field.errors !== null}>
                          <FieldLabel
                            htmlFor={name}
                            className="text-muted-foreground font-mono text-xs tracking-[0.15em] uppercase"
                          >
                            {label}
                          </FieldLabel>
                          <Input
                            {...field.props}
                            id={name}
                            type={type}
                            placeholder={placeholder}
                            value={field.input ?? ''}
                            aria-invalid={field.errors !== null}
                            required
                            autoComplete="off"
                            disabled={isLoading}
                            className="border-border focus:border-primary placeholder:text-muted-foreground bg-background py-6 focus-visible:ring-0"
                          />
                          <div className="min-h-[22px]">
                            {field.errors && (
                              <FieldError errors={field.errors.map((message) => ({ message }))} />
                            )}
                          </div>
                        </Field>
                      )}
                    </FormischField>
                  ))}
                </div>

                <FormischField of={form} path={['message']}>
                  {(field) => (
                    <Field data-invalid={field.errors !== null}>
                      <FieldLabel
                        htmlFor="message"
                        className="text-muted-foreground font-mono text-xs tracking-[0.15em] uppercase"
                      >
                        {formLabels.message}
                      </FieldLabel>
                      <Textarea
                        {...field.props}
                        id="message"
                        value={field.input ?? ''}
                        placeholder={placeholders.message}
                        aria-invalid={field.errors !== null}
                        required
                        autoComplete="off"
                        rows={5}
                        disabled={isLoading}
                        className="border-border focus:border-primary placeholder:text-muted-foreground bg-background min-h-30 resize-none focus-visible:ring-0"
                      />
                      <div className="min-h-[22px]">
                        {field.errors && (
                          <FieldError errors={field.errors.map((message) => ({ message }))} />
                        )}
                      </div>
                    </Field>
                  )}
                </FormischField>

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
