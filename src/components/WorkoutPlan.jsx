import React from 'react';

const WorkoutPlan = ({ plan }) => {
  // Early return if no plan is provided or if it lacks essential data
  if (!plan || !plan.name || !plan.schedule || !plan.workouts) {
    return (
        <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
            <p className="text-gray-600 text-center">Select your preferences above to generate a workout plan.</p>
        </div>
    );
  }

  const { name, description, schedule, workouts } = plan;

  return (
    <div className="mt-10 p-6 bg-white rounded-lg shadow-xl animate-fade-in">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-4">{name}</h2>
      <p className="text-lg text-gray-700 text-center mb-8">{description}</p>

      <div className="space-y-8">
        {schedule.map((dayName, index) => {
          const dailyWorkouts = workouts[dayName] || [];
          // Simple check if the workout definition is just informational text
          const isInfoOnly = dailyWorkouts.length === 1 && dailyWorkouts[0].exercise && !dailyWorkouts[0].sets;

          return (
            <div key={index} className="p-4 border border-gray-200 rounded-md shadow-sm bg-gray-50">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">{dayName}</h3>
              {isInfoOnly ? (
                  <p className="text-md text-gray-600 italic">{dailyWorkouts[0].exercise}</p>
              ) : dailyWorkouts.length > 0 ? (
                <ul className="space-y-3">
                  {dailyWorkouts.map((workout, workoutIndex) => (
                    <li key={workoutIndex} className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200 pb-2 last:border-b-0">
                      <span className="font-medium text-gray-800 flex-1 mb-1 sm:mb-0">{workout.exercise}</span>
                      {(workout.sets || workout.reps || workout.rest) && (
                          <span className="text-sm text-gray-600 flex-shrink-0">
                            {workout.sets && `Sets: ${workout.sets}`}
                            {workout.reps && `, Reps: ${workout.reps}`}
                            {workout.rest && `, Rest: ${workout.rest}`}
                          </span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-md text-gray-500 italic">Rest day or details not available.</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkoutPlan; 