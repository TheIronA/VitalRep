import React from 'react';

const WorkoutPlan = ({ plan }) => {
  // Early return if no plan is provided or if it lacks essential data
  if (!plan || !plan.name || !plan.schedule || !plan.workouts) {
    return (
        <div className="workout-plan-message">
            <p>Select your preferences above to generate a workout plan.</p>
        </div>
    );
  }

  const { name, description, schedule, workouts } = plan;

  return (
    <div className="workout-plan-container">
      <h2 className="workout-plan-title">{name}</h2>
      <p className="workout-plan-description">{description}</p>

      <div className="workout-schedule-grid">
        {schedule.map((dayName, index) => {
          const dailyWorkouts = workouts[dayName] || [];
          const isInfoOnly = dailyWorkouts.length === 1 && dailyWorkouts[0].exercise && !dailyWorkouts[0].sets;
          const isRestDay = dailyWorkouts.length === 1 && dailyWorkouts[0].exercise && dailyWorkouts[0].exercise.toLowerCase().includes('rest day');

          return (
            <div key={index} className={`workout-day-card ${isRestDay ? 'rest-day' : ''}`}>
              <h3 className="workout-day-title">{dayName}</h3>
              {isInfoOnly ? (
                  <p className="workout-day-info">{dailyWorkouts[0].exercise}</p>
              ) : dailyWorkouts.length > 0 ? (
                <ul className="exercise-list">
                  {dailyWorkouts.map((workout, workoutIndex) => (
                    <li key={workoutIndex} className="exercise-item">
                      <span className="exercise-name">{workout.exercise}</span>
                      {(workout.sets || workout.reps || workout.rest) && (
                          <span className="exercise-details">
                            {workout.sets && <span className="detail-item sets">Sets: {workout.sets}</span>}
                            {workout.reps && <span className="detail-item reps">Reps: {workout.reps}</span>}
                            {workout.rest && <span className="detail-item rest">Rest: {workout.rest}</span>}
                          </span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="rest-day-message">Details not available. Likely a rest day.</p> // Fallback, though isRestDay should catch most
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkoutPlan; 