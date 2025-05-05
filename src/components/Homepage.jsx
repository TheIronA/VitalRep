import React from 'react';
// import { Link } from 'react-router-dom'; // Comment out router Link for now
import './Homepage.css'; // Keep existing CSS

// Updated features data for VitalRep AI Fitness
const features = [
  {
    id: 1,
    name: 'AI Personalized Plans',
    description: 'Get workout and nutrition plans tailored to your goals, body, and progress.',
    icon: '🤖',
    link: '/workouts', // Link to workout page
  },
  {
    id: 2,
    name: 'Intelligent Tracking',
    description: 'Log workouts and meals easily. Our AI analyzes your performance and provides insights.',
    icon: '📈',
    link: '/progress', // Link to progress page
  },
  {
    id: 3,
    name: 'Nutrition Synergy',
    description: 'Connect your diet to your training. Optimize fuel and recovery.',
    icon: '🥗',
    link: '/nutrition', // Link to nutrition page
  },
   {
    id: 4,
    name: 'Real-time Feedback',
    description: 'Receive AI-driven tips on form and intensity during your workouts (coming soon!).',
    icon: '🗣️',
    link: '#',
  },
];

const Homepage = () => {
  // Placeholder onClick handler if we need buttons later
  // const handleNavigate = (path) => {
  //   console.log(`Navigate to: ${path}`); // Replace with actual navigation logic if needed
  // };

  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-tagline">
            <h1 className="hero-title">
              Unlock Peak Fitness.<br />
              Powered by AI.<br />
              Just For You.
            </h1>
            <p className="hero-subtitle">
              VitalRep crafts personalized workout and nutrition plans that adapt as you progress.
              <br />Stop guessing, start achieving.
            </p>
          </div>
          <div className="hero-actions">
            <a
              href="/workouts" // Link to workouts or signup
              className="button button-primary hero-button"
              role="button"
              aria-label="Start Your Personalized Plan"
            >
              Start Your Personalized Plan
            </a>
            <p className="hero-note">Basic Access is Free Forever</p>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="app-preview-section">
        <div className="app-preview-content">
          <h2 className="app-preview-title">
            Your Training.<br />
            Your Nutrition.<br />
            Intelligently Connected.
          </h2>
          <p className="app-preview-description">
            VitalRep goes beyond simple tracking. Our AI understands the synergy between your workouts and diet,
            guiding you towards optimal performance and results.
          </p>
          <div className="app-preview-cta">
            {/* Optional: Link to a features page if you create one */}
            {/* <a href="/learn-more" className="text-link">
              Explore VitalRep Features →
            </a> */}
          </div>
          <div className="app-preview-image">
            {/* Placeholder for app screenshot - replace with actual image */}
            <div className="placeholder-image">VitalRep App Interface</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-content">
          <h2 className="features-title">
            How VitalRep Elevates Your Fitness
          </h2>
          <div className="features-grid">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="feature-card"
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-name">
                  {feature.name}
                </h3>
                <p className="feature-description">
                  {feature.description}
                </p>
                {/* Conditionally render link if it's not just '#' */}
                {feature.link !== '#' && (
                   <a
                     href={feature.link}
                     className="feature-link"
                     aria-label={`Learn more about ${feature.name}`}
                   >
                     Learn more →
                   </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <h2 className="stats-title">Join Thousands Achieving Their Goals</h2>
        <div className="stats-container">
          <div className="stat-item">
            <h3 className="stat-value">10k+</h3>
            <p className="stat-label">Active Users Daily</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-value">1M+</h3>
            <p className="stat-label">Workouts Logged</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-value">4.8 ★</h3>
            <p className="stat-label">Average App Rating</p>
          </div>
        </div>
        <p className="stats-description">
          VitalRep users report faster progress and greater consistency
          compared to traditional methods.
        </p>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="cta-title">Ready to experience AI-powered fitness?</h2>
        <a
          href="/workouts" // Link to workouts or signup
          className="button button-primary cta-button"
          role="button"
          aria-label="Get Started with VitalRep Today"
        >
          Get Started with VitalRep Today
        </a>
      </section>
    </div>
  );
};

export default Homepage; 