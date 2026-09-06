import { z } from "zod";
import { services } from "@/data/services";

const serviceSlugs = [...services.map((service) => service.slug), "other"];

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
  email: z
    .string()
    .trim()
    .max(120, "Email is too long.")
    .refine(
      (value) => value === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      "Please enter a valid email address.",
    ),
  service: z
    .string()
    .trim()
    .min(1, "Please select a service."),
  location: z.string().trim().max(120, "Location is too long."),
  message: z
    .string()
    .trim()
    .min(10, "Please add a short message so we can help.")
    .max(2000, "Message is too long."),
  preferredContact: z.enum(["phone", "email"]).default("phone"),
  website: z.string().max(0, "Unable to send this enquiry."),
  startedAt: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function isKnownService(slug: string) {
  return serviceSlugs.includes(slug);
}
