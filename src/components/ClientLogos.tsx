/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
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
      <div className="partners-containe unique_container container slider-containe pb-lg- pb-">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators mb-0">
            {[...Array(numberOfSlides)].map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active m-0" : "m-0"}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner partner_carousel text-center pb-">
            {[...Array(numberOfSlides)].map((_, slideIndex) => (
              <div key={slideIndex} className={`carousel-item ${slideIndex === 0 ? 'active' : ''}`}>
              <div className="row">
                  {clients
                    .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                    .map((client, index) => (
                      <div key={index} className="col-3">
                        <img src={client.partnerLogo} className="d-block w-100" alt={client.name} />
                        <h3 className="partner-name my-md-2 my-2">{client.name}</h3>
                        <div className='d-flex flex-wrap gap-md- gap- align-items-center justify-content-center social_icns'>
                          <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Facebook.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Linkedin.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/X.png"/>
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
