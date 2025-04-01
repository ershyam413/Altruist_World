import React from "react";
import ContactUsForm from "./ContactUsForm";
import { getData } from "@/service/sheetService";
import { HOME_ID } from "@/config/constant";

export default async function ContactSection() {
  const quoteData = await getData(HOME_ID);
  const reachOut = quoteData?.reach_out?.[0] || {};

  return (
    <section id="contact-us" className="contact-section">
      <section className="reach_out">
      <div className="reach-out-containe unique_container container what_reach_work">
        <h2 className="title">{reachOut.title}</h2>
        <p className="reach-out-descriptio description p-0">{reachOut.description}</p>
      </div></section>
      <section className="form_sec">
      <ContactUsForm /></section>
    </section>
  );
}
