import React from 'react';

const ProgressPage = () => {
  return (
    <div className="page-container">
      <div className="card welcome-card">
        <h1 className="generated-homepage-class-2">
          <span className="generated-homepage-class-3">Track Your Progress</span>
        </h1>
        <p className="generated-homepage-class-4">
          Monitor your fitness journey, track your improvements, and visualize your accomplishments over time.
        </p>
      </div>

      <div className="card">
        <div className="progress-placeholder">
          <h2>Coming Soon</h2>
          <p>Progress tracking features will be available in a future update. You'll be able to:</p>
          <ul>
            <li>Track workout completion</li>
            <li>Record personal records</li>
            <li>Monitor body measurements</li>
            <li>View progress charts and statistics</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage; 