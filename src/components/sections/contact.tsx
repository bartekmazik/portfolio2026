import React from "react";
import Section from "../ui/section";
import ContactForm from "../contact-form-wrapper";

const Contact = () => {
  return (
    <Section id="contact" headerText="Contact">
      <p className="pb-8 pt-4 max-w-2xl">
        Feel free to contact anytime. I should answer in 24-48h.
      </p>
      <ContactForm />
    </Section>
  );
};

export default Contact;
