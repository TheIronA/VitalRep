import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="generated-footer-class-1 app-footer">
      <div className="generated-footer-class-2 footer-content">
        <ul className="generated-footer-class-3 footer-links">
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
        <p className="generated-footer-class-4 footer-copy">
          &copy; {currentYear} VitalRep. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 