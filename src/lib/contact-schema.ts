import { z } from "zod";
import { leadServiceOptions } from "@/data/content";
import { preferredBrandOptions } from "@/data/brands";

const serviceValues = leadServiceOptions.map((option) => option.value);

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "Name is too long."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(24, "Phone number is too long.")
    .regex(/^[0-9+\-\s()]+$/, "Phone number contains invalid characters."),
  service: z
    .string()
    .trim()
    .min(1, "Please select a service."),
  location: z.string().trim().max(120, "Location is too long."),
  preferredBrand: z.string().trim().max(80, "Preferred brand is too long."),
  message: z
    .string()
    .trim()
    .min(10, "Please add a short message so we can help.")
    .max(2000, "Message is too long."),
  website: z.string().max(0, "Unable to send this enquiry."),
  startedAt: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function isKnownService(slug: string) {
  return serviceValues.includes(slug as (typeof serviceValues)[number]);
}

export function isKnownPreferredBrand(value: string) {
  if (!value) return true;
  return (preferredBrandOptions as readonly string[]).includes(value);
}
