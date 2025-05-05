import React, { useState } from 'react';
import GoalSetup from './GoalSetup';
import WorkoutPlan from './WorkoutPlan';
import { getWorkoutPlan } from '../data/mockWorkouts'; // Corrected path

const Homepage = () => {
  const [workoutPlan, setWorkoutPlan] = useState(null);
  const [showSetup, setShowSetup] = useState(true); // Keep setup visible by default

  const handleGeneratePlan = (goal, level, equipment) => {
    console.log("Homepage received:", { goal, level, equipment }); // Debug log
    const plan = getWorkoutPlan(goal, level, equipment);
    console.log("Retrieved Plan:", plan); // Debug log
    setWorkoutPlan(plan);
    // Decide if you want to hide setup after generation:
    // setShowSetup(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Welcome to <span className="text-indigo-600">VitalRep</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Your AI-powered fitness coach. Let's set up your goals and generate a personalized workout plan just for you.
          </p>
        </div>

        {/* Goal Setup Section - Conditionally Render or always show */}
        {showSetup && (
          <div className="mb-12">
             <GoalSetup onGeneratePlan={handleGeneratePlan} />
          </div>
        )}

        {/* Workout Plan Display Section */}
        <WorkoutPlan plan={workoutPlan} />

      </div>
    </div>
  );
};

export default Homepage; 