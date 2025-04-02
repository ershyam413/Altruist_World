/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
// import iconImage from '../../public/assets/images/icon.png';
// import iconImage from './../../public/assets/images/icon.png';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CompanyData {
  name: string;
  about: string;
  link: string;
  logoUrl: string;
  routeName: string;
  tabsName: string;
  country: string;
}

export default function TechnologySlider({
  slides,
}: {
  slides: CompanyData[];
}) {
  // Get unique tabsNames and filter out empty ones
  const uniqueTabs = useMemo(() => {
    const tabs = [...new Set(slides.map(slide => slide.tabsName))];
    return tabs.filter(tab => tab.trim() !== "");
  }, [slides]);

  const [activeTab, setActiveTab] = useState(uniqueTabs[0]);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  // Filter slides based on active tab
  const filteredSlides = useMemo(() => {
    return slides.filter(slide => slide.tabsName === activeTab && slide.name !== "");
  }, [slides, activeTab]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (swiper) {
      swiper.slideTo(0); // Reset to first slide when changing tabs
    }
  };

  return (
    <section className="technology-section">
      <div className="container unique_container route-navigation border-botto o_auto d-block text-nowrap text-center">
        {uniqueTabs.map((tab, index) => (
          <button
            key={index}
            className={`route-button py-0 ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <div className="slider-container unique_container container what_reach_wor d-block py- pb-lg- pb-">
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
          className="technology-swiper"
        >
          {filteredSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slide-conten slidr_parnt_box">
                <div className="text-content">
                  <span className="country-tag">{slide.country}</span>
                  <h2 className="company-name scrolling_heading">{slide.name}</h2>
                  <p className="description">{slide.about}</p>
                  {slide.link && (
                    <a
                      href={slide.link}
                      className="visit-link flex-wrap"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit {slide.name.split("\r\n")[0]}
                      <i className="fas fa-angle-right text-white fs-6 mt-2 mb-auto"></i>
                    </a>
                  )}
                </div>
                <div className="logo-container1">
                  <div className="slider_hover_image">
                    <img
                      src={slide.logoUrl}
                      alt={`${slide.name} Logo`}
                      className="company-logo sliding_image"
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
