"use client";
import React, { useState, useMemo, useRef, useEffect } from "react";
import left_icn from "../../public/assets/images/left_icn.png";
import right_icn from "../../public/assets/images/right_icn.png";
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
  tabsName: string;
  country: string;
}

export default function TechnologySlider({ slides }: { slides: CompanyData[] }) {
  const uniqueTabs = useMemo(() => {
    const tabs = [...new Set(slides.map(slide => slide.tabsName))];
    return tabs.filter(tab => tab.trim() !== "");
  }, [slides]);

  const [activeTab, setActiveTab] = useState(uniqueTabs[0]);
  const [tabIndex, setTabIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [showArrows, setShowArrows] = useState(false);
  const tabListRef = useRef<HTMLDivElement | null>(null);

  const filteredSlides = useMemo(() => {
    return slides.filter(slide => slide.tabsName === activeTab && slide.name !== "");
  }, [slides, activeTab]);

  const handleTabClick = (tab: string, index: number) => {
    setActiveTab(tab);
    setTabIndex(index);
    if (swiper) swiper.slideTo(0);
  };

  // const handleScrollTab = (dir: "left" | "right") => {
  //   const el = tabListRef.current;
  //   if (!el) return;

  //   const scrollAmount = 150;
  //   el.scrollBy({
  //     left: dir === "right" ? scrollAmount : -scrollAmount,
  //     behavior: "smooth",
  //   });

  //   if (dir === "right" && tabIndex < uniqueTabs.length - 1) {
  //     handleTabClick(uniqueTabs[tabIndex + 1], tabIndex + 1);
  //   } else if (dir === "left" && tabIndex > 0) {
  //     handleTabClick(uniqueTabs[tabIndex - 1], tabIndex - 1);
  //   }
  // };

  const handleScrollTab = (dir: "left" | "right") => {
    const el = tabListRef.current;
    if (!el) return;
  
    let scrollAmount;
    if (window.innerWidth <= 767) {
      scrollAmount = el.clientWidth; // Scroll full width (100%) for 1 tab
    } else if (window.innerWidth <= 992) {
      scrollAmount = el.clientWidth / 2; // Scroll 50% width for 2 tabs
    } else {
      scrollAmount = 150; // Default scroll (adjust as needed)
    }
  
    el.scrollBy({
      left: dir === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  
    // Update active tab logic
    if (dir === "right" && tabIndex < uniqueTabs.length - 1) {
      handleTabClick(uniqueTabs[tabIndex + 1], tabIndex + 1);
    } else if (dir === "left" && tabIndex > 0) {
      handleTabClick(uniqueTabs[tabIndex - 1], tabIndex - 1);
    }
  };
  

  useEffect(() => {
    const checkOverflow = () => {
      const el = tabListRef.current;
      if (el) {
        setShowArrows(el.scrollWidth > el.clientWidth);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  return (
    <section className="technology-section">
      <div className="container position-relative o_hidden unique_container route-navigation d-fle d-block align-items-center justify-content-center gap-2 my-">
        <div className="px-4 position-relative">
        {showArrows && (
          <button className="tab-arrow left_tab" onClick={() => handleScrollTab("left")} disabled={tabIndex === 0}>
            {/* ◀ */}
            <img className="social-link img-fluid d-block" src={left_icn.src} />
          </button>
        )}

        <div
          ref={tabListRef}
          className="d-fle o_hidden text-center overflow-aut no-scrollbar text-nowrap justify-content-center flex-grow-1"
          style={{ scrollBehavior: "smooth" }}
        >
          {uniqueTabs.map((tab, index) => (
            <button
              key={index}
              className={`route-button mx- py-0 ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTabClick(tab, index)}
            >
              {tab}
            </button>
          ))}
        </div>

        {showArrows && (
          <button className="tab-arrow right_tab" onClick={() => handleScrollTab("right")} disabled={tabIndex === uniqueTabs.length - 1}>
            {/* ▶ */}
            <img className="social-link img-fluid d-block" src={right_icn.src} />
          </button>
        )}
        </div>
      </div>

      <div className="slider-container unique_container container what_reach_wor d-block py-">
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
