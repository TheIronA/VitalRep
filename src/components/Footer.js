import React from 'react';
import './Footer.css';
// Import icons
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

// Define social links (replace # with actual URLs)
const socialLinks = [
  { icon: FaGithub, href: '#', label: 'GitHub' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaFacebook, href: '#', label: 'Facebook' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-main-content">
        <div className="footer-column footer-brand">
          <div className="footer-logo-title">
            <img src="/logo.jpg" alt="VitalRep Logo" className="footer-logo" />
            <span className="footer-brand-title">VitalRep</span>
          </div>
          <p className="footer-tagline">
            Your AI-powered fitness journey starts here.
          </p>
        </div>

        <div className="footer-column footer-navigation">
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/workouts">Workouts</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h4 className="footer-heading">Contact Us</h4>
          <p>info@vitalrep.app</p>
          {/* Social Links */}
          <div className="footer-socials">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="social-link"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {currentYear} VitalRep. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 