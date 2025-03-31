/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer border-to">
      <div className="footer-containe unique_container d-flex flex-column align-items-center gap-3 py-3">
        <div className="social-links">
          <a href="#" className="social-link" aria-label="Facebook">
            <img
              src="/assets/images/Facebook.png"
              alt="Facebook Icon"
              className="social-icon"
            />
          </a>
          <a href="#" className="social-link" aria-label="Instagram">
            <img
              src="/assets/images/Insta.png"
              alt="Instagram Icon"
              className="social-icon"
            />
          </a>
          <a href="#" className="social-link" aria-label="Twitter">
            <img
              src="/assets/images/X.png"
              alt="Twitter Icon"
              className="social-icon"
            />
          </a>
          <a href="#" className="social-link" aria-label="LinkedIn">
            <img
              src="/assets/images/Linkedin.png"
              alt="LinkedIn Icon"
              className="social-icon"
            />
          </a>
          <a href="#" className="social-link" aria-label="YouTube">
            <img
              src="/assets/images/Youtube.png"
              alt="YouTube Icon"
              className="social-icon"
            />
          </a>
        </div>
        <p className="copyright">© 2025 Altruist. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
