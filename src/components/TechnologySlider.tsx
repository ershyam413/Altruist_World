/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CompanyData {
  name: string;
  about: string;
  link: string;
  logoUrl: string;
  routeName: string;
  country: string;
}

export default function TechnologySlider({
  slides,
}: {
  slides: CompanyData[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const handleRouteClick = (index: number) => {
    if (swiper) {
      swiper.slideTo(index);
    }
    setActiveIndex(index);
  };
  console.log("slides", slides);
  return (
    <section className="technology-section">
      <div className="slider-container">
        <div className="route-navigation">
          {slides.map((slide, index) => (
            <button
              key={index}
              className={`route-button ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => handleRouteClick(index)}
            >
              {slide.routeName}
            </button>
          ))}
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className}"></span>`;
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          initialSlide={activeIndex}
          className="technology-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slide-content">
                <div className="text-content">
                  <span className="country-tag">{slide.country}</span>
                  <h2 className="company-name">{slide.name}</h2>
                  <p className="description">{slide.about}</p>
                  <a
                    href={slide.link}
                    className="visit-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit {slide.name.split("\r\n")[0]}
                    <svg
                      className="arrow-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
                <div className="logo-container1">
                  <img
                    src={slide.logoUrl}
                    alt={`${slide.name} Logo`}
                    className="company-logo"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
