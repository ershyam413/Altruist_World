/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ClientData1 {
  partnerLogo: string;
  name: string;
  socialIcon: string;
}

export default function ClientLogos({ clients }: { clients: ClientData1[] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    rows: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  return (
    <section className="partners-section">
      <div className="partners-container">
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} className="partner-slide">
              <div className="partner-card">
                <div className="logo-container">
                  <img
                    src={client.partnerLogo}
                    alt={client.name}
                    className="partner-logo"
                  />
                </div>
                <h3 className="partner-name">{client.name}</h3>
                <div className="social-icons">
                  <a href="#" className="social-link">
                    <img src={client.socialIcon} alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
