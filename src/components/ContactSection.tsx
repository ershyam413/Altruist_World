import React from "react";
import ContactUsForm from "./ContactUsForm";
import { getData } from "@/service/sheetService";
import { HOME_ID } from "@/config/constant";

export default async function ContactSection() {
  const quoteData = await getData(HOME_ID);
  const reachOut = quoteData?.reach_out?.[0] || {};

  return (
    <section id="contact-us" className="contact-section">
      <div className="reach-out-container">
        <h2 className="reach-out-title">{reachOut.title}</h2>
        <p className="reach-out-description">{reachOut.description}</p>
      </div>
      <ContactUsForm />
    </section>
  );
}
