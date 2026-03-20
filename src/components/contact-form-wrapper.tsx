"use client";

import { useState, useEffect } from "react";
import { ContactForm } from "./contact-form";

export default function ContactFormWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <ContactForm />;
}
