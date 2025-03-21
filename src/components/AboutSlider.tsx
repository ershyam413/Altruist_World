/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface AboutSlide {
  main_headig: string;
  heading: string;
  paragrapgh: string;
  imageUrl: string;
}

export default function AboutSlider({ slides }: { slides: AboutSlide[] }) {
  return (
    <section id="who-we-are" className="about-section">
      <div className="container">
        <div className="row">
          <div className="col">
      <div className="about-slider-container">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {slides?.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="about-slide d-flex justify-content-between">
                <div className="about-content">
                  <h1 className="main-title m-0">{slide.main_headig}</h1>
                  <h2 className="about-heading m-0">{slide.heading}</h2>
                  <p className="about-paragraph m-0">{slide.paragrapgh}</p>
                </div>
                <div className="about-image-container">
                  <img
                    src={slide.imageUrl}
                    alt={`${slide.heading} Illustration`}
                    className="about-image"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
          </div>
        </div>
      </div>
    </section>
  );
}
