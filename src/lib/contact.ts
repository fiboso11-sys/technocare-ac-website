import { company } from "@/data/company";
import { leadServiceOptions } from "@/data/content";
import {
  contactSchema,
  isKnownPreferredBrand,
  isKnownService,
  type ContactInput,
} from "@/lib/contact-schema";

export type ContactResult =
  | { ok: true; notice?: string }
  | { ok: false; error: string; fieldErrors?: Record<string, string> };

const MIN_ELAPSED_MS = 2500;

function readEnv(name: string) {
  return process.env[name]?.trim() ?? "";
}

function formDataToObject(formData: FormData): Record<string, string> {
  const data: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string") data[key] = value;
  }
  return data;
}

function serviceTitle(slug: string) {
  return (
    leadServiceOptions.find((option) => option.value === slug)?.label ?? slug
  );
}

async function deliverEmail(payload: ContactInput) {
  const toEmail = readEnv("CONTACT_TO_EMAIL");
  const resendKey = readEnv("RESEND_API_KEY");

  if (!toEmail || !resendKey) {
    return { delivered: false as const, configured: false as const };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "TECHNO CARE Website <onboarding@resend.dev>",
      to: [toEmail],
      subject: `Website enquiry: ${serviceTitle(payload.service)}`,
      text: [
        `Name: ${payload.name}`,
        `Phone: ${payload.phone}`,
        `Service: ${serviceTitle(payload.service)}`,
        `Location / Area: ${payload.location || "Not provided"}`,
        `Preferred brand: ${payload.preferredBrand || "Not provided"}`,
        "",
        payload.message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    return { delivered: false as const, configured: true as const };
  }

  return { delivered: true as const, configured: true as const };
}

export async function submitContactEnquiry(
  formData: FormData,
): Promise<ContactResult> {
  const raw = formDataToObject(formData);

  if (raw.website) {
    return { ok: true };
  }

  const startedAt = Number(raw.startedAt || 0);
  if (startedAt && Date.now() - startedAt < MIN_ELAPSED_MS) {
    return { ok: true };
  }

  const parsed = contactSchema.safeParse({
    ...raw,
    location: raw.location ?? "",
    preferredBrand: raw.preferredBrand ?? "",
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const field = String(issue.path[0] ?? "form");
      if (!fieldErrors[field]) fieldErrors[field] = issue.message;
    }
    return {
      ok: false,
      error: "Please check the highlighted fields and try again.",
      fieldErrors,
    };
  }

  if (!isKnownService(parsed.data.service)) {
    return {
      ok: false,
      error: "Please select a valid service.",
      fieldErrors: { service: "Please select a valid service." },
    };
  }

  if (!isKnownPreferredBrand(parsed.data.preferredBrand)) {
    return {
      ok: false,
      error: "Please choose a valid preferred brand.",
      fieldErrors: { preferredBrand: "Please choose a valid preferred brand." },
    };
  }

  try {
    const result = await deliverEmail(parsed.data);
    if (!result.configured) {
      return {
        ok: false,
        error: `Online enquiry delivery is not connected yet. Please call TECHNO CARE on ${company.phoneDisplay} to request service.`,
      };
    }
    if (!result.delivered) {
      return {
        ok: false,
        error: `Your enquiry could not be sent just now. Please call ${company.phoneDisplay}.`,
      };
    }
    return { ok: true };
  } catch {
    return {
      ok: false,
      error: `Your enquiry could not be sent just now. Please call ${company.phoneDisplay}.`,
    };
  }
}
