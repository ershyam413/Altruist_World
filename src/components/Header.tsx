"use client";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex align-items-center justify-content-between">
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
        <nav className={`nav-menu d-flex ${isMenuOpen ? "active" : ""}`}>
          <a href="#who-we-are" className="nav-link text-white" onClick={toggleMenu}>
            Who We Are
          </a>
          <a href="#what-we-do" className="nav-link text-white" onClick={toggleMenu}>
            What We Do
          </a>
          <a href="#our-work" className="nav-link text-white" onClick={toggleMenu}>
            Our Work
          </a>
          <a href="#contact-us" className="nav-link text-white" onClick={toggleMenu}>
            Contact Us
          </a>
        </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
