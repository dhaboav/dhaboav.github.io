/**
 * @file shared-form-fields.tsx
 * @description A collection of shared form field components built specifically
 * for integration with the **Formisch** state management library and Shadcn UI components.
 *
 * Important Note:
 * These components rely entirely on `FormischField` from `@formisch/react`
 * and are not compatible with other form libraries (such as React Hook Form or Formik)
 * without modifying their internal render props implementation.
 */
import { Field as FormischField } from '@formisch/react';

import { Field, FieldError, FieldLabel } from '@/ui/field';
import { Input } from '@/ui/input';
import { Textarea } from '@/ui/textarea';

interface Props {
  of: any;
  path: string;
  label: string;
  placeholder?: string;
  className?: string;
}

interface InputProps extends Props {
  type?: string;
}

function InputField({ of, path, label, placeholder, type = 'text' }: InputProps) {
  return (
    <FormischField of={of} path={[path]}>
      {(field) => (
        <Field data-invalid={field.errors !== null}>
          <FieldLabel
            htmlFor={label}
            className="text-muted-foreground font-mono text-xs tracking-[0.15em] uppercase"
          >
            {label.toUpperCase()}
          </FieldLabel>
          <Input
            {...field.props}
            id={label}
            type={type}
            value={(field.input ?? '') as any}
            aria-invalid={field.errors !== null}
            placeholder={placeholder}
            autoComplete="off"
            className="border-border focus:border-primary placeholder:text-muted-foreground bg-background py-6 focus-visible:ring-0"
          />
          {field.errors && <FieldError errors={field.errors.map((message) => ({ message }))} />}
        </Field>
      )}
    </FormischField>
  );
}

function TextareaField({ of, path, label, placeholder, className }: Props) {
  return (
    <FormischField of={of} path={[path]}>
      {(field) => (
        <Field data-invalid={field.errors !== null}>
          <FieldLabel
            htmlFor={label}
            className="text-muted-foreground font-mono text-xs tracking-[0.15em] uppercase"
          >
            {label.toUpperCase()}
          </FieldLabel>
          <Textarea
            {...field.props}
            id={label}
            value={(field.input ?? '') as any}
            aria-invalid={field.errors !== null}
            placeholder={placeholder}
            autoComplete="off"
            className={className}
          />
          {field.errors && <FieldError errors={field.errors.map((message) => ({ message }))} />}
        </Field>
      )}
    </FormischField>
  );
}

export { InputField, TextareaField };
