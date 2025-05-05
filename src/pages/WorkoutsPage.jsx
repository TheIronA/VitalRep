import React, { useState } from 'react';
import GoalSetup from '../components/GoalSetup';
import WorkoutPlan from '../components/WorkoutPlan';
import { getWorkoutPlan } from '../data/mockWorkouts';
import './WorkoutsPage.css';

const WorkoutsPage = () => {
  const [workoutPlan, setWorkoutPlan] = useState(null);

  const handleGeneratePlan = (goal, level, equipment) => {
    console.log("Generating plan with:", { goal, level, equipment });
    const plan = getWorkoutPlan(goal, level, equipment);
    setWorkoutPlan(plan);
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

      {workoutPlan && (
        <div className="card">
          <WorkoutPlan plan={workoutPlan} />
        </div>
      )}
    </div>
  );
};

export default WorkoutsPage; 