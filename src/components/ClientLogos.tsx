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
      <div className="partners-containe unique_container slider-containe pb-0">
        {/* <Slider {...settings}>
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
                <h3 className="partner-name my-md-3 my-2">{client.name}</h3>
                <div className="social-icons">
                  <a href="#" className="social-link">
                    <img src={client.socialIcon} alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider> */}
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators mb-0">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active mx-0" aria-current="true" aria-label="Slide 1"></button>
    <button  className="mx-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button  className="mx-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner partner_carousel text-center pb-5">
    <div className="carousel-item active">
    <div className="row">
                        <div className="col-3">
                          <img src="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742444872590Rectangle_9_(1).png" className="d-block w-100" alt="..."/>
                            <h3 className="partner-name my-md-3 my-2">Three</h3>
                            <div className='d-flex flex-wrap gap-md- gap- align-items-center justify-content-center social_icns'>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Facebook.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Linkedin.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/X.png"/>
                            </div>                        
                          </div>
                          <div className="col-3">
                          <img src="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742444872590Rectangle_9_(1).png" className="d-block w-100" alt="..."/>
                            <h3 className="partner-name my-md-3 my-2">Three</h3>
                            <div className='d-flex flex-wrap gap-md- gap- align-items-center justify-content-center social_icns'>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Facebook.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Linkedin.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/X.png"/>
                            </div>                        
                          </div>
                          <div className="col-3">
                          <img src="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742444872590Rectangle_9_(1).png" className="d-block w-100" alt="..."/>
                            <h3 className="partner-name my-md-3 my-2">Three</h3>
                            <div className='d-flex flex-wrap gap-md- gap- align-items-center justify-content-center social_icns'>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Facebook.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Linkedin.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/X.png"/>
                            </div>                        
                          </div>
                          <div className="col-3">
                          <img src="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742444872590Rectangle_9_(1).png" className="d-block w-100" alt="..."/>
                            <h3 className="partner-name my-md-3 my-2">Three</h3>
                            <div className='d-flex flex-wrap gap-md- gap- align-items-center justify-content-center social_icns'>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Facebook.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Linkedin.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/X.png"/>
                            </div>                        
                          </div>
                          <div className="col-3">
                          <img src="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742444872590Rectangle_9_(1).png" className="d-block w-100" alt="..."/>
                            <h3 className="partner-name my-md-3 my-2">Three</h3>
                            <div className='d-flex flex-wrap gap-md- gap- align-items-center justify-content-center social_icns'>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Facebook.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Linkedin.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/X.png"/>
                            </div>                        
                          </div>
                          <div className="col-3">
                          <img src="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742444872590Rectangle_9_(1).png" className="d-block w-100" alt="..."/>
                            <h3 className="partner-name my-md-3 my-2">Three</h3>
                            <div className='d-flex flex-wrap gap-md- gap- align-items-center justify-content-center social_icns'>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Facebook.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Linkedin.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/X.png"/>
                            </div>                        
                          </div>
                          <div className="col-3">
                          <img src="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742444872590Rectangle_9_(1).png" className="d-block w-100" alt="..."/>
                            <h3 className="partner-name my-md-3 my-2">Three</h3>
                            <div className='d-flex flex-wrap gap-md- gap- align-items-center justify-content-center social_icns'>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Facebook.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Linkedin.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/X.png"/>
                            </div>                        
                          </div>
                          <div className="col-3">
                          <img src="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742444872590Rectangle_9_(1).png" className="d-block w-100" alt="..."/>
                            <h3 className="partner-name my-md-3 my-2">Three</h3>
                            <div className='d-flex flex-wrap gap-md- gap- align-items-center justify-content-center social_icns'>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Facebook.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Linkedin.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/X.png"/>
                            </div>                        
                          </div>
                    </div>
    </div>
    <div className="carousel-item">
    <div className="row">
                        <div className="col-3">
                          <img src="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742444872590Rectangle_9_(1).png" className="d-block w-100" alt="..."/>
                            <h3 className="partner-name my-md-3 my-2">Three</h3>
                            <div className='d-flex flex-wrap gap-md- gap- align-items-center justify-content-center social_icns'>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Facebook.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Linkedin.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/X.png"/>
                            </div>                        
                          </div>
                          <div className="col-3">
                          <img src="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742444872590Rectangle_9_(1).png" className="d-block w-100" alt="..."/>
                            <h3 className="partner-name my-md-3 my-2">Three</h3>
                            <div className='d-flex flex-wrap gap-md- gap- align-items-center justify-content-center social_icns'>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Facebook.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Linkedin.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/X.png"/>
                            </div>                        
                          </div>
                          <div className="col-3">
                          <img src="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742444872590Rectangle_9_(1).png" className="d-block w-100" alt="..."/>
                            <h3 className="partner-name my-md-3 my-2">Three</h3>
                            <div className='d-flex flex-wrap gap-md- gap- align-items-center justify-content-center social_icns'>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Facebook.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Linkedin.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/X.png"/>
                            </div>                        
                          </div>
                          <div className="col-3">
                          <img src="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742444872590Rectangle_9_(1).png" className="d-block w-100" alt="..."/>
                            <h3 className="partner-name my-md-3 my-2">Three</h3>
                            <div className='d-flex flex-wrap gap-md- gap- align-items-center justify-content-center social_icns'>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Facebook.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Linkedin.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/X.png"/>
                            </div>                        
                          </div>
                          <div className="col-3">
                          <img src="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742444872590Rectangle_9_(1).png" className="d-block w-100" alt="..."/>
                            <h3 className="partner-name my-md-3 my-2">Three</h3>
                            <div className='d-flex flex-wrap gap-md- gap- align-items-center justify-content-center social_icns'>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Facebook.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Linkedin.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/X.png"/>
                            </div>                        
                          </div>
                          <div className="col-3">
                          <img src="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742444872590Rectangle_9_(1).png" className="d-block w-100" alt="..."/>
                            <h3 className="partner-name my-md-3 my-2">Three</h3>
                            <div className='d-flex flex-wrap gap-md- gap- align-items-center justify-content-center social_icns'>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Facebook.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Linkedin.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/X.png"/>
                            </div>                        
                          </div>
                          <div className="col-3">
                          <img src="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742444872590Rectangle_9_(1).png" className="d-block w-100" alt="..."/>
                            <h3 className="partner-name my-md-3 my-2">Three</h3>
                            <div className='d-flex flex-wrap gap-md- gap- align-items-center justify-content-center social_icns'>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Facebook.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Linkedin.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/X.png"/>
                            </div>                        
                          </div>
                          <div className="col-3">
                          <img src="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742444872590Rectangle_9_(1).png" className="d-block w-100" alt="..."/>
                            <h3 className="partner-name my-md-3 my-2">Three</h3>
                            <div className='d-flex flex-wrap gap-md- gap- align-items-center justify-content-center social_icns'>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Facebook.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Linkedin.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/X.png"/>
                            </div>                        
                          </div>
                    </div>
    </div>
    <div className="carousel-item">
    <div className="row">
                        <div className="col-3">
                          <img src="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742444872590Rectangle_9_(1).png" className="d-block w-100" alt="..."/>
                            <h3 className="partner-name my-md-3 my-2">Three</h3>
                            <div className='d-flex flex-wrap gap-md- gap- align-items-center justify-content-center social_icns'>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Facebook.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Linkedin.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/X.png"/>
                            </div>                        
                          </div>
                          <div className="col-3">
                          <img src="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742444872590Rectangle_9_(1).png" className="d-block w-100" alt="..."/>
                            <h3 className="partner-name my-md-3 my-2">Three</h3>
                            <div className='d-flex flex-wrap gap-md- gap- align-items-center justify-content-center social_icns'>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Facebook.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Linkedin.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/X.png"/>
                            </div>                        
                          </div>
                          <div className="col-3">
                          <img src="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742444872590Rectangle_9_(1).png" className="d-block w-100" alt="..."/>
                            <h3 className="partner-name my-md-3 my-2">Three</h3>
                            <div className='d-flex flex-wrap gap-md- gap- align-items-center justify-content-center social_icns'>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Facebook.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Linkedin.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/X.png"/>
                            </div>                        
                          </div>
                          <div className="col-3">
                          <img src="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742444872590Rectangle_9_(1).png" className="d-block w-100" alt="..."/>
                            <h3 className="partner-name my-md-3 my-2">Three</h3>
                            <div className='d-flex flex-wrap gap-md- gap- align-items-center justify-content-center social_icns'>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Facebook.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Linkedin.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/X.png"/>
                            </div>                        
                          </div>
                          <div className="col-3">
                          <img src="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742444872590Rectangle_9_(1).png" className="d-block w-100" alt="..."/>
                            <h3 className="partner-name my-md-3 my-2">Three</h3>
                            <div className='d-flex flex-wrap gap-md- gap- align-items-center justify-content-center social_icns'>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Facebook.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Linkedin.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/X.png"/>
                            </div>                        
                          </div>
                          <div className="col-3">
                          <img src="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742444872590Rectangle_9_(1).png" className="d-block w-100" alt="..."/>
                            <h3 className="partner-name my-md-3 my-2">Three</h3>
                            <div className='d-flex flex-wrap gap-md- gap- align-items-center justify-content-center social_icns'>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Facebook.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Linkedin.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/X.png"/>
                            </div>                        
                          </div>
                          <div className="col-3">
                          <img src="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742444872590Rectangle_9_(1).png" className="d-block w-100" alt="..."/>
                            <h3 className="partner-name my-md-3 my-2">Three</h3>
                            <div className='d-flex flex-wrap gap-md- gap- align-items-center justify-content-center social_icns'>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Facebook.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Linkedin.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/X.png"/>
                            </div>                        
                          </div>
                          <div className="col-3">
                          <img src="https://apicitiplaza.altruistindia.com///uploads/altruist_world/1742444872590Rectangle_9_(1).png" className="d-block w-100" alt="..."/>
                            <h3 className="partner-name my-md-3 my-2">Three</h3>
                            <div className='d-flex flex-wrap gap-md- gap- align-items-center justify-content-center social_icns'>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Facebook.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/Linkedin.png"/>
                              <img className="social-link img-fluid d-block" src="http://localhost:8095/assets/images/X.png"/>
                            </div>                        
                          </div>
                    </div>
    </div>
  </div>
  {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
</div>
      </div>
    </section>
  );
}
