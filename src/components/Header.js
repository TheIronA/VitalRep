import React from 'react';
import Nav from './Nav';
// Removed logo import as it's accessed via public URL
import './Header.css'; // Import the CSS file

const Header = () => {
  // Removed className prop
  return (
    <header className="generated-header-class-1 app-header"> {/* Kept app-header assuming it's custom */}
      <div className="generated-header-class-2 logo-container"> {/* Kept logo-container assuming it's custom */}
        {/* Replaced Tailwind: logo-img (Likely custom, check CSS) */}
        <img src="/logo.jpg" alt="VitalRep Logo" className="generated-header-class-3 logo-img" /> {/* Kept logo-img assuming it's custom */}
        <span className="header-title">VitalRep</span> {/* Added title text */}
        {/* <h1>VitalRep</h1> Commented out or remove if logo replaces it */}
      </div>
      <Nav /> {/* Render the Nav component */}
    </header>
  );
};

export default Header; 