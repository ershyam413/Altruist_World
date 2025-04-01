import React from "react";
import ClientLogos from "./ClientLogos";
import { HOME_ID } from "@/config/constant";
import { getData } from "@/service/sheetService";

export default async function WorkSection() {
  const quoteData = await getData(HOME_ID);
  const data = quoteData?.our_work?.[0] || {};
  const quoteData1 = await getData(HOME_ID);
  const clientData1 = quoteData1?.partner || [];

  return (
    <section id="our-work" className="work-section">
      <div className="work-containe unique_container container what_reach_work">
        <h2 className="title">{data.title}</h2>
        <div className="work-content p-0">
          <h3 className="work-heading">{data.heading}</h3>
          <p className="work-descriptio description pb- m-0">{data.description}</p>
        </div>
      </div>
      <ClientLogos clients={clientData1} />
    </section>
  );
}
