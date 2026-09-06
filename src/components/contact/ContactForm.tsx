"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { sendContactEnquiry } from "@/app/actions/contact";
import { services } from "@/data/services";
import { company } from "@/data/company";
import { contactSchema } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

const fieldClass =
  "mt-1.5 w-full rounded-md border border-border bg-surface px-3 py-2.5 text-base text-foreground";

export function ContactForm() {
  const startedAtRef = useRef<number | null>(null);
  const [pending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

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
      email: String(raw.email ?? ""),
      location: String(raw.location ?? ""),
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
      <div
        className="rounded-lg border border-border bg-surface p-6"
        role="status"
      >
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
        <Field
          id="email"
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          error={fieldErrors.email}
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
          defaultValue=""
          aria-invalid={Boolean(fieldErrors.service)}
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
          <option value="other">Other AC/HVAC Enquiry</option>
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
        <label htmlFor="message" className="text-sm font-medium">
          Message / requirement
          <span aria-hidden="true"> *</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={fieldClass}
          aria-invalid={Boolean(fieldErrors.message)}
        />
        {fieldErrors.message ? (
          <p className="mt-1 text-sm text-warning">{fieldErrors.message}</p>
        ) : null}
      </div>

      <fieldset className="mt-4">
        <legend className="text-sm font-medium">Preferred contact method</legend>
        <div className="mt-2 flex flex-wrap gap-4 text-sm">
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="preferredContact" value="phone" defaultChecked />
            Phone
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="preferredContact" value="email" />
            Email
          </label>
        </div>
      </fieldset>

      {error ? (
        <p className="mt-4 text-sm text-warning" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className={cn(
          "mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-accent-foreground sm:w-auto",
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
