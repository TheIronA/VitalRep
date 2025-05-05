import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css'; // Ensure CSS is imported

const Homepage = () => {
  const navigate = useNavigate();

  const handleGenerateWorkplan = () => {
    navigate('/workouts');
  };

  return (
    <div>
      {/* Apply card and welcome-card styles */}
      <div className="card welcome-card">
        {/* Replaced Tailwind: text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 */}
        <h1 className="generated-homepage-class-2">
          {/* Replaced Tailwind: text-indigo-600 */}
          Welcome to <span className="generated-homepage-class-3">VitalRep</span>
        </h1>
        {/* Replaced Tailwind: text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto */}
        <p className="generated-homepage-class-4">
          Your personalized fitness journey starts here. Select your goals, fitness level, and available equipment to generate a tailored workout plan.
        </p>
        <button 
          className="generate-workplan-btn"
          onClick={handleGenerateWorkplan}
          aria-label="Generate Workout Plan"
        >
          Generate Workout Plan
        </button>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <h2>Personalized Workouts</h2>
          <p>Get workout plans tailored to your specific goals, fitness level, and available equipment.</p>
        </div>
        <div className="feature-card">
          <h2>Track Progress</h2>
          <p>Monitor your fitness journey and see your improvements over time.</p>
        </div>
        <div className="feature-card">
          <h2>Nutrition Guidance</h2>
          <p>Access nutrition tips and meal suggestions to complement your workout routine.</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage; 