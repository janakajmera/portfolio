import { describe, expect, test } from "vitest";

describe("EmailJS configuration", () => {
  test("EmailJS environment variables are configured", () => {
    expect(import.meta.env.VITE_EMAILJS_SERVICE_ID).toBeTruthy();
    expect(import.meta.env.VITE_EMAILJS_TEMPLATE_ID).toBeTruthy();
    expect(import.meta.env.VITE_EMAILJS_PUBLIC_KEY).toBeTruthy();
  });
});