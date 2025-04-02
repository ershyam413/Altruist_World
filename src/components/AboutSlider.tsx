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
  const getColoredHeading = (mainHeading: string, slideHeading: string, slideIndex: number) => {
    const words = mainHeading.split(' ');
    const altruistIndex = words.findIndex(word => word.toLowerCase() === 'altruist');
  
    if (altruistIndex !== -1) {
      let altruist = words[altruistIndex];
      
      // Choose the character to color based on the slideIndex
      const characterToColor = slideIndex % altruist.length; // This will cycle through the characters of 'altruist'
  
      // Split the word into parts
      const beforeChar = altruist.slice(0, characterToColor);
      const charToColor = altruist.charAt(characterToColor);
      const afterChar = altruist.slice(characterToColor + 1);
  
      // Create the colored word with the selected character
      const coloredAltruist = `
        <span>${beforeChar}</span><span style="color: #0066FF;">${charToColor}</span><span>${afterChar}</span>
      `;
      
      // Update the words array with the colored "altruist" word
      words[altruistIndex] = coloredAltruist;
    }
  
    // Create the final result where the whole "altruist" word is wrapped in a <span> and selected character is colored
    return words.map((word, i) => {
      if (i === altruistIndex) {
        // If it's the "altruist" word, we already handled the color, so return it directly
        return word;
      } else {
        // Wrap other words in <span>
        return `<span>${word}</span>`;
      }
    }).join(' ');
  };
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section id="who-we-are" className="about-section py- px-0 pb-0">
      <div className="about-slider-containe slider-container unique_container container pb-">
        {/* Static main heading */}
        <h1 
          className="main-title text-start m-0 mb-3"
          dangerouslySetInnerHTML={{ 
            __html: getColoredHeading(staticMainHeading, slides[activeIndex]?.heading || '', activeIndex)
          }}
        />

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
