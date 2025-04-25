/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from 'swiper';
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
  const [activeIndex, setActiveIndex] = useState(0);
  const staticMainHeading = slides[activeIndex]?.main_headig || '';
  const getColoredHeading = (mainHeading: string, slideIndex: number) => {
    const words = mainHeading.split(' ');
    const altruistIndex = words.findIndex(word => word.toLowerCase() === 'altruist');
  
    if (altruistIndex === -1) {
      return <span>{mainHeading}</span>;
    }
  
    const altruist = words[altruistIndex];
    const charIndex = slideIndex % altruist.length;
  
    const beforeChar = altruist.slice(0, charIndex);
    const charToColor = altruist[charIndex];
    const afterChar = altruist.slice(charIndex + 1);
  
    const beforeWords = words.slice(0, altruistIndex).join(' ');
    const afterWords = words.slice(altruistIndex + 1).join(' ');
  
    const spans = [];

    let firstPart = (beforeWords ? beforeWords + ' ' : '') + beforeChar;
    if (firstPart) spans.push(<span key="before">{firstPart}</span>);

    spans.push(
      <span key="highlight" style={{ color: '#0066FF' }}>
        {charToColor}
      </span>
    );

    let lastPart = afterChar + (afterWords ? ' ' + afterWords : '');
    if (lastPart) spans.push(<span key="after">{lastPart}</span>);
  
    return spans;
  };
  
  
  
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section id="who-we-are" className="about-section py- px-0 pb-0">
      <div className="about-slider-containe slider-container unique_container container pb-">
        {/* Static main heading */}
        {/* <h1 
          className="main-title text-start m-0 mb-3"
          dangerouslySetInnerHTML={{ 
            __html: getColoredHeading(staticMainHeading, slides[activeIndex]?.heading || '', activeIndex)
          }}
        /> */}
        <h1 className="main-title text-start m-0 mb-3">
  {getColoredHeading(staticMainHeading, activeIndex)}
</h1>


        <Swiper 
          className='pb-0'
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
          onSlideChange={handleSlideChange}
        >
          {slides?.map((slide, index) => (
            <SwiperSlide className='px-' key={index}>
              <div className="about-slid slidr_parnt_box px-0">
                <div className="about-conten text-content">
                  <h2 className="about-heading scrolling_heading m-0">
                    {slide.heading}
                  </h2>
                  <p className="about-paragrap description m-0">{slide.paragrapgh}</p>
                </div>
                <div className="about-image-containe logo-container1">
                  <div className="slider_hover_image">
                    <img
                      src={slide.imageUrl}
                      alt={`${slide.heading} Illustration`}
                      className="about-image sliding_image rounded-0"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
