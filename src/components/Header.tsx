"use client";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header p-0">
      <div className="header-containe unique_container container d-flex flex-wrap align-items-center justify-content-between gap-2 py-md-4 py-2">
        <a href="/" className="logo-link">
          <img
            src="/assets/images/atpl_logo.svg"
            alt="Altruist Logo"
            className="logo w-100"
          />
        </a>

        {/* Hamburger Button */}
        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {/* <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span> */}
          <img src="/assets/icons/hamburger.svg" alt="hamburger" />
        </button>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <a href="#who-we-are" className="nav-link p-0" onClick={toggleMenu}>
            Who We Are
          </a>
          <a href="#what-we-do" className="nav-link p-0" onClick={toggleMenu}>
            What We Do
          </a>
          <a href="#our-work" className="nav-link p-0" onClick={toggleMenu}>
            Our Work
          </a>
          <a href="#contact-us" className="nav-link p-0" onClick={toggleMenu}>
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
