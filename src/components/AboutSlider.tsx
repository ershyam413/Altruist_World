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
    <section id="who-we-are" className="about-section py- px-0 pb-0">
      <div className="about-slider-containe slider-container pb-0">
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
            <SwiperSlide className='px-' key={index}>
            <h1 className="main-title text-start m-0 mb-3">{slide.main_headig}</h1>
              <div className="about-slid slidr_parnt_box px-0">
                <div className="about-content">
                  <h2 className="about-heading scrolling_heading m-0">{slide.heading}</h2>
                  <p className="about-paragrap description m-0">{slide.paragrapgh}</p>
                </div>
                <div className="about-image-container">
                  <div className="slider_hover_image">
                  <img
                    src={slide.imageUrl}
                    alt={`${slide.heading} Illustration`}
                    className="about-image sliding_image rounded-0"
                  /></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
