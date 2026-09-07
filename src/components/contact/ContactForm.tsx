"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { sendContactEnquiry } from "@/app/actions/contact";
import { preferredBrandOptions } from "@/data/brands";
import { leadServiceOptions } from "@/data/content";
import { company } from "@/data/company";
import { contactSchema } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

const fieldClass =
  "mt-1.5 w-full rounded-md border border-border bg-surface px-3 py-2.5 text-base text-foreground";

type ContactFormProps = {
  defaultService?: string;
};

export function ContactForm({ defaultService = "" }: ContactFormProps) {
  const searchParams = useSearchParams();
  const startedAtRef = useRef<number | null>(null);
  const [pending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const serviceFromQuery = searchParams.get("service") ?? "";
  const initialService =
    leadServiceOptions.some((option) => option.value === (defaultService || serviceFromQuery))
      ? defaultService || serviceFromQuery
      : "";

  useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("startedAt", String(startedAtRef.current ?? Date.now()));
    const raw = Object.fromEntries(formData.entries());
    const parsed = contactSchema.safeParse({
      ...raw,
      location: String(raw.location ?? ""),
      preferredBrand: String(raw.preferredBrand ?? ""),
      website: String(raw.website ?? ""),
    });

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const field = String(issue.path[0] ?? "form");
        if (!next[field]) next[field] = issue.message;
      }
      setFieldErrors(next);
      setError("Please check the highlighted fields and try again.");
      setSuccess(false);
      return;
    }

    setFieldErrors({});
    setError("");
    startTransition(async () => {
      const result = await sendContactEnquiry(formData);
      if (result.ok) {
        setSuccess(true);
        form.reset();
        return;
      }
      setSuccess(false);
      setError(result.error);
      setFieldErrors(result.fieldErrors ?? {});
    });
  }

  if (success) {
    return (
      <div className="rounded-lg border border-border bg-surface p-6" role="status">
        <h2 className="text-lg font-semibold">Request received</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Thank you. For a faster response, you can also call {company.phoneDisplay}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-lg border border-border bg-surface p-5 sm:p-6">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />
      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
        {company.positioning}. Tell us whether you need AC sales, installation, service, AMC or
        refurbishing.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id="name"
          name="name"
          label="Full name"
          required
          autoComplete="name"
          error={fieldErrors.name}
        />
        <Field
          id="phone"
          name="phone"
          label="Phone number"
          type="tel"
          required
          autoComplete="tel"
          error={fieldErrors.phone}
        />
      </div>

      <div className="mt-4">
        <label htmlFor="service" className="text-sm font-medium">
          Service required
          <span aria-hidden="true"> *</span>
        </label>
        <select
          id="service"
          name="service"
          required
          className={fieldClass}
          defaultValue={initialService}
          aria-invalid={Boolean(fieldErrors.service)}
        >
          <option value="" disabled>
            Select a service
          </option>
          {leadServiceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {fieldErrors.service ? (
          <p className="mt-1 text-sm text-warning">{fieldErrors.service}</p>
        ) : null}
      </div>

      <div className="mt-4">
        <Field
          id="location"
          name="location"
          label="Location / area"
          autoComplete="address-level2"
          error={fieldErrors.location}
        />
      </div>

      <div className="mt-4">
        <label htmlFor="preferredBrand" className="text-sm font-medium">
          Preferred brand <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <select
          id="preferredBrand"
          name="preferredBrand"
          className={fieldClass}
          defaultValue=""
          aria-invalid={Boolean(fieldErrors.preferredBrand)}
        >
          <option value="">No preference</option>
          {preferredBrandOptions.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        {fieldErrors.preferredBrand ? (
          <p className="mt-1 text-sm text-warning">{fieldErrors.preferredBrand}</p>
        ) : null}
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="text-sm font-medium">
          Message / requirement
          <span aria-hidden="true"> *</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={fieldClass}
          aria-invalid={Boolean(fieldErrors.message)}
        />
        {fieldErrors.message ? (
          <p className="mt-1 text-sm text-warning">{fieldErrors.message}</p>
        ) : null}
      </div>

      {error ? (
        <p className="mt-4 text-sm text-warning" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className={cn(
          "mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground sm:w-auto",
          pending && "opacity-70",
        )}
      >
        {pending ? "Sending…" : "Request Service"}
      </button>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required,
  autoComplete,
  error,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={fieldClass}
        aria-invalid={Boolean(error)}
      />
      {error ? <p className="mt-1 text-sm text-warning">{error}</p> : null}
    </div>
  );
}
