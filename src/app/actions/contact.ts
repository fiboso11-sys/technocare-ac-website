"use server";

import { submitContactEnquiry, type ContactResult } from "@/lib/contact";

export async function sendContactEnquiry(
  formData: FormData,
): Promise<ContactResult> {
  return submitContactEnquiry(formData);
}
