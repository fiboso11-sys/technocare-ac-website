import { company, hasWhatsApp } from "@/data/company";

export function whatsappUrl(message?: string) {
  if (!hasWhatsApp()) return "";
  const digits = company.whatsapp.replace(/[^\d]/g, "");
  if (!digits) return "";
  const text =
    message ?? "Hello TECHNO CARE, I would like to enquire about AC/HVAC service.";
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}
