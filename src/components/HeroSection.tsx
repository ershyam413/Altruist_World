/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { getData } from "@/service/sheetService";
import { HOME_ID } from "@/config/constant";
import Counter from "./counter";

export default async function HeroSection() {
  const quoteData = await getData(HOME_ID);

  return (
    <section className="heroSection">
      {quoteData?.herosection?.map((item: any, index: number) => (
        <div key={index} className="videoContainer">
          <video className="heroVideo" autoPlay loop muted playsInline>
            <source src="/assets/videos/global-network-connection.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="textOverlay">
            {/* <p className="heroText">{item.text}</p> */}
          </div>
        </div>
      ))}
      <Counter quoteData={quoteData?.counter_data} />
    </section>
  );
}
