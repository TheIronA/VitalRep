import React from 'react';

const WorkoutPlan = ({ plan }) => {
  // Early return if no plan is provided or if it lacks essential data
  if (!plan || !plan.name || !plan.schedule || !plan.workouts) {
    return (
        <div className="generated-workoutplan-class-1">
            <p className="generated-workoutplan-class-2">Select your preferences above to generate a workout plan.</p>
        </div>
    );
  }

  const { name, description, schedule, workouts } = plan;

  return (
    <div className="generated-workoutplan-class-3">
      <h2 className="generated-workoutplan-class-4">{name}</h2>
      <p className="generated-workoutplan-class-5">{description}</p>

      <div className="generated-workoutplan-class-6">
        {schedule.map((dayName, index) => {
          const dailyWorkouts = workouts[dayName] || [];
          // Simple check if the workout definition is just informational text
          const isInfoOnly = dailyWorkouts.length === 1 && dailyWorkouts[0].exercise && !dailyWorkouts[0].sets;

          return (
            <div key={index} className="generated-workoutplan-class-7">
              <h3 className="generated-workoutplan-class-8">{dayName}</h3>
              {isInfoOnly ? (
                  <p className="generated-workoutplan-class-9">{dailyWorkouts[0].exercise}</p>
              ) : dailyWorkouts.length > 0 ? (
                <ul className="generated-workoutplan-class-10">
                  {dailyWorkouts.map((workout, workoutIndex) => (
                    <li key={workoutIndex} className="generated-workoutplan-class-11">
                      <span className="generated-workoutplan-class-12">{workout.exercise}</span>
                      {(workout.sets || workout.reps || workout.rest) && (
                          <span className="generated-workoutplan-class-13">
                            {workout.sets && `Sets: ${workout.sets}`}
                            {workout.reps && `, Reps: ${workout.reps}`}
                            {workout.rest && `, Rest: ${workout.rest}`}
                          </span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="generated-workoutplan-class-14">Rest day or details not available.</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkoutPlan; 