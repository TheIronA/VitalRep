import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import WorkoutsPage from '../pages/WorkoutsPage';
import ProgressPage from '../pages/ProgressPage';
import NutritionPage from '../pages/NutritionPage';
import AccountPage from '../pages/AccountPage';
import './Main.css'; // Ensure CSS is imported

const Main = () => {
  return (
    <main className="generated-main-class-1 main-content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/workouts" element={<WorkoutsPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/nutrition" element={<NutritionPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </main>
  );
};

export default Main; 