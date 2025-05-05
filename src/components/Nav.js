import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import Header CSS for nav styles
import './Nav.css'; // Added import

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to handle closing menu when a link is clicked (optional but good UX)
  const handleNavLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav>
      {/* Mobile Menu Button */}
      <button
        type="button"
        aria-label="Toggle mobile menu"
        aria-expanded={isMobileMenuOpen}
        onClick={handleToggleMobileMenu}
        className="generated-nav-class-1 mobile-menu-btn"
      >
        {isMobileMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="generated-nav-class-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="generated-nav-class-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>

      {/* Navigation List */}
      <ul className={`generated-nav-class-4 nav-list ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" className="nav-link" onClick={handleNavLinkClick}>Home</Link></li>
        <li><Link to="/workouts" className="nav-link" onClick={handleNavLinkClick}>Workouts</Link></li>
        <li><Link to="/progress" className="nav-link" onClick={handleNavLinkClick}>Progress</Link></li>
        <li><Link to="/nutrition" className="nav-link" onClick={handleNavLinkClick}>Nutrition</Link></li>
        <li><Link to="/account" className="nav-link" onClick={handleNavLinkClick}>Account</Link></li>
      </ul>
    </nav>
  );
}

export default Nav; 