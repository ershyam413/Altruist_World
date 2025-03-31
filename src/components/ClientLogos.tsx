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
  // Calculate number of slides needed (8 items per slide)
  const itemsPerSlide = 8;
  const numberOfSlides = Math.ceil(clients.length / itemsPerSlide);

  return (
    <section className="partners-section">
      <div className="partners-containe unique_container slider-containe pb-0">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators mb-0">
            {[...Array(numberOfSlides)].map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner partner_carousel text-center pb-5">
            {[...Array(numberOfSlides)].map((_, slideIndex) => (
              <div key={slideIndex} className={`carousel-item ${slideIndex === 0 ? 'active' : ''}`}>
              <div className="row">
                  {clients
                    .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                    .map((client, index) => (
                      <div key={index} className="col-3">
                        <img src={client.partnerLogo} className="d-block w-100" alt={client.name} />
                        <h3 className="partner-name my-md-3 my-2">{client.name}</h3>
                        <div className='d-flex flex-wrap gap-md-3 gap-2 align-items-center justify-content-center social_icns'>
                          <img className="social-link img-fluid d-block" src={client.socialIcon} alt="social" />
                  </div>
                </div>
                    ))}
                  </div>
                </div>
            ))}
                  </div>
          


        </div>
      </div>
    </section>
  );
}
