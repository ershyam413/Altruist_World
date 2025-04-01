import React from "react";
import { getData } from "@/service/sheetService";
import { HOME_ID } from "@/config/constant";

export default async function ServicesSection() {
  const quoteData = await getData(HOME_ID);
  const data = quoteData?.what_we_do?.[0] || {};

  return (
    <section id="what-we-do" className="services-section">
      <div className="services-containe what_reach_work unique_container container align-items-center">
        <h2 className="services-titl title">{data.title}</h2>
        <div className="services-conten description p-0">
          {data.description
            .split("\r\n\r\n")
            .map((paragraph: string, index: number) => (
              <p key={index} className="services-paragraph description">
                {paragraph}
              </p>
            ))}
        </div>
      </div>
    </section>
  );
}
