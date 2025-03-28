"use client";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header p-0">
      <div className="header-containe unique_container d-flex justify-content-between py-md-3 py-2">
        <a href="/" className="logo-link">
          <img
            src="/assets/images/atpl_logo.svg"
            alt="Altruist Logo"
            className="logo"
          />
        </a>

        {/* Hamburger Button */}
        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <a href="#who-we-are" className="nav-link" onClick={toggleMenu}>
            Who We Are
          </a>
          <a href="#what-we-do" className="nav-link" onClick={toggleMenu}>
            What We Do
          </a>
          <a href="#our-work" className="nav-link" onClick={toggleMenu}>
            Our Work
          </a>
          <a href="#contact-us" className="nav-link" onClick={toggleMenu}>
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
