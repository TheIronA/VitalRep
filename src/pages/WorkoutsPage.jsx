import React, { useState, useEffect } from 'react';
import GoalSetup from '../components/GoalSetup';
import WorkoutPlan from '../components/WorkoutPlan';
import { getWorkoutPlan } from '../data/mockWorkouts';
import './WorkoutsPage.css';

const WorkoutsPage = () => {
  const [workoutPlan, setWorkoutPlan] = useState(null);
  const [error, setError] = useState(null);

  // Reset error when component mounts
  useEffect(() => {
    setError(null);
    console.log("WorkoutsPage mounted");
  }, []);

  const handleGeneratePlan = (goal, level, equipment) => {
    try {
      console.log("WorkoutsPage - Generating plan with:", { goal, level, equipment });
      
      // Get the workout plan using the provided parameters
      const plan = getWorkoutPlan(goal, level, equipment);
      
      console.log("Generated plan:", plan);
      
      if (!plan) {
        setError("Failed to generate a workout plan. Please try different options.");
        return;
      }
      
      // Set the workout plan in state
      setWorkoutPlan(plan);
      setError(null);
    } catch (err) {
      console.error("Error in handleGeneratePlan:", err);
      setError("An error occurred while generating your workout plan.");
    }
  };

  return (
    <div className="page-container">
      <div className="card welcome-card">
        <h1 className="generated-homepage-class-2">
          <span className="generated-homepage-class-3">Workout Plans</span>
        </h1>
        <p className="generated-homepage-class-4">
          Create your personalized workout plan. Select your goals, fitness level, and available equipment to generate a tailored workout plan.
        </p>
      </div>

      <div className="card">
        <GoalSetup onGeneratePlan={handleGeneratePlan} />
      </div>

      {error && (
        <div className="card error-card">
          <p className="error-message">{error}</p>
        </div>
      )}

      {workoutPlan && (
        <div className="card workout-card">
          <WorkoutPlan plan={workoutPlan} />
        </div>
      )}
    </div>
  );
};

export default WorkoutsPage; 