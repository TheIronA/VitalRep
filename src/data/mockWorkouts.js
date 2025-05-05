// src/data/mockWorkouts.js

// Simple key generation helper (can be expanded)
const generateKey = (goal, level, equipment) => `${goal}_${level}_${equipment}`;

export const mockWorkouts = {
  [generateKey('build-muscle', 'beginner', 'full-gym')]: {
    name: 'Beginner Muscle Gain - Full Gym',
    description: 'Focus on compound lifts to build a solid foundation.',
    schedule: ['Day 1: Upper Body', 'Day 2: Lower Body & Core', 'Day 3: Rest', 'Day 4: Upper Body', 'Day 5: Lower Body & Core', 'Day 6: Rest', 'Day 7: Rest'],
    workouts: {
      'Day 1: Upper Body': [
        { exercise: 'Bench Press', sets: 3, reps: '8-12', rest: '60-90s' },
        { exercise: 'Overhead Press', sets: 3, reps: '8-12', rest: '60s' },
        { exercise: 'Barbell Rows', sets: 3, reps: '8-12', rest: '60s' },
        { exercise: 'Lat Pulldowns', sets: 3, reps: '10-15', rest: '60s' },
      ],
      'Day 2: Lower Body & Core': [
        { exercise: 'Squats', sets: 3, reps: '8-12', rest: '90-120s' },
        { exercise: 'Romanian Deadlifts', sets: 3, reps: '10-15', rest: '60-90s' },
        { exercise: 'Leg Press', sets: 3, reps: '10-15', rest: '60s' },
        { exercise: 'Plank', sets: 3, reps: '30-60s hold', rest: '60s' },
      ],
       // Repeat structure for Day 4 and Day 5, possibly with slight variations
      'Day 4: Upper Body': [
        { exercise: 'Incline Dumbbell Press', sets: 3, reps: '8-12', rest: '60-90s' },
        { exercise: 'Seated Cable Rows', sets: 3, reps: '10-15', rest: '60s' },
        { exercise: 'Lateral Raises', sets: 3, reps: '12-15', rest: '45-60s' },
        { exercise: 'Tricep Pushdowns', sets: 3, reps: '10-15', rest: '45-60s' },
      ],
      'Day 5: Lower Body & Core': [
          { exercise: 'Goblet Squats', sets: 3, reps: '10-15', rest: '60-90s' },
          { exercise: 'Hamstring Curls', sets: 3, reps: '12-15', rest: '60s' },
          { exercise: 'Calf Raises', sets: 4, reps: '15-20', rest: '45s' },
          { exercise: 'Crunches', sets: 3, reps: '15-20', rest: '45s' },
      ],
    },
  },
  [generateKey('lose-fat', 'intermediate', 'bodyweight')]: {
    name: 'Intermediate Fat Loss - Bodyweight',
    description: 'High-intensity circuit training to maximize calorie burn.',
    schedule: ['Day 1: Full Body Circuit', 'Day 2: Active Recovery / LISS', 'Day 3: Full Body Circuit', 'Day 4: Rest', 'Day 5: Full Body Circuit', 'Day 6: Active Recovery / LISS', 'Day 7: Rest'],
    workouts: {
       // Define circuits for relevant days
       'Day 1: Full Body Circuit': [
         { exercise: 'Perform 3-4 rounds, minimal rest between exercises, 60-90s rest between rounds'},
         { exercise: 'Jumping Jacks', sets: 1, reps: '60s', rest: '0s' },
         { exercise: 'Bodyweight Squats', sets: 1, reps: '20', rest: '15s' },
         { exercise: 'Push-ups', sets: 1, reps: 'AMRAP (As Many Reps As Possible)', rest: '15s' },
         { exercise: 'Lunges (alternating)', sets: 1, reps: '15 per leg', rest: '15s' },
         { exercise: 'Plank', sets: 1, reps: '60s hold', rest: '15s' },
         { exercise: 'Burpees', sets: 1, reps: '10-15', rest: '60-90s' },
       ],
        'Day 3: Full Body Circuit': [
         { exercise: 'Perform 3-4 rounds, minimal rest between exercises, 60-90s rest between rounds'},
         { exercise: 'High Knees', sets: 1, reps: '60s', rest: '0s' },
         { exercise: 'Glute Bridges', sets: 1, reps: '20', rest: '15s' },
         { exercise: 'Decline Push-ups (use chair/step)', sets: 1, reps: 'AMRAP', rest: '15s' },
         { exercise: 'Jump Squats', sets: 1, reps: '15', rest: '15s' },
         { exercise: 'Mountain Climbers', sets: 1, reps: '60s', rest: '15s' },
         { exercise: 'Superman', sets: 1, reps: '15', rest: '60-90s' },
       ],
        'Day 5: Full Body Circuit': [
         { exercise: 'Perform 3-4 rounds, minimal rest between exercises, 60-90s rest between rounds'},
         { exercise: 'Butt Kicks', sets: 1, reps: '60s', rest: '0s' },
         { exercise: 'Pike Push-ups', sets: 1, reps: 'AMRAP', rest: '15s' },
         { exercise: 'Walking Lunges', sets: 1, reps: '10 per leg', rest: '15s' },
         { exercise: 'Side Plank (Left)', sets: 1, reps: '30-45s hold', rest: '15s' },
         { exercise: 'Side Plank (Right)', sets: 1, reps: '30-45s hold', rest: '15s' },
         { exercise: 'Tuck Jumps', sets: 1, reps: '10-12', rest: '60-90s' },
       ],
       'Active Recovery / LISS': [
            { exercise: 'Light activity like walking, stretching, or yoga for 30-60 minutes.'}
       ]
    },
  },
  // Add more combinations as needed...
  [generateKey('improve-endurance', 'advanced', 'dumbbells')]: {
        name: 'Advanced Endurance - Dumbbells',
        description: 'Challenging dumbbell circuits and complexes.',
        schedule: ['Day 1: DB Complex A', 'Day 2: LISS Cardio', 'Day 3: DB Complex B', 'Day 4: Rest', 'Day 5: DB Full Body Circuit', 'Day 6: LISS Cardio', 'Day 7: Rest'],
        workouts: {
            'Day 1: DB Complex A': [
                { exercise: 'Perform all exercises back-to-back with no rest. Rest 90-120s after completing one round. Complete 4-5 rounds.' },
                { exercise: 'Dumbbell Goblet Squat', sets: 1, reps: '10', rest: '0s' },
                { exercise: 'Dumbbell Renegade Row (alternating)', sets: 1, reps: '8 per side', rest: '0s' },
                { exercise: 'Dumbbell Push Press', sets: 1, reps: '12', rest: '0s' },
                { exercise: 'Dumbbell Romanian Deadlift', sets: 1, reps: '15', rest: '90-120s' },
            ],
            'Day 3: DB Complex B': [
                 { exercise: 'Perform all exercises back-to-back with no rest. Rest 90-120s after completing one round. Complete 4-5 rounds.' },
                 { exercise: 'Dumbbell Snatch (alternating)', sets: 1, reps: '6 per side', rest: '0s' },
                 { exercise: 'Dumbbell Thruster', sets: 1, reps: '10', rest: '0s' },
                 { exercise: "Dumbbell Farmer's Walk", sets: 1, reps: '30 seconds', rest: '0s' },
                 { exercise: 'Dumbbell Swing', sets: 1, reps: '20', rest: '90-120s' },
            ],
            'Day 5: DB Full Body Circuit': [
                 { exercise: 'Perform 3 rounds. Rest 45-60s between exercises and 90s between rounds.' },
                 { exercise: 'Dumbbell Bench Press', sets: 3, reps: '12-15', rest: '45-60s' },
                 { exercise: 'Dumbbell Single Arm Row', sets: 3, reps: '10-12 per side', rest: '45-60s' },
                 { exercise: 'Dumbbell Bulgarian Split Squat', sets: 3, reps: '10-12 per leg', rest: '45-60s' },
                 { exercise: 'Dumbbell Bicep Curl', sets: 3, reps: '12-15', rest: '45-60s' },
                 { exercise: 'Dumbbell Overhead Tricep Extension', sets: 3, reps: '12-15', rest: '45-60s' },
            ],
            'LISS Cardio': [
                { exercise: 'Low-Intensity Steady State Cardio (e.g., jogging, cycling, brisk walking) for 45-60 minutes at a conversational pace.'}
            ]
        },
    },
  // Add more combinations as needed...
  [generateKey('build-muscle', 'intermediate', 'bodyweight')]: {
    name: 'Intermediate Muscle Gain - Bodyweight',
    description: 'Bodyweight exercises for muscle growth.',
    schedule: ['Day 1: Push', 'Day 2: Pull', 'Day 3: Legs', 'Day 4: Rest'],
    workouts: {
      'Day 1: Push': [{ exercise: 'Push-ups', sets: 4, reps: 'AMRAP', rest: '60s' }],
      'Day 2: Pull': [{ exercise: 'Pull-ups/Rows (if possible)', sets: 4, reps: 'AMRAP', rest: '60s' }],
      'Day 3: Legs': [{ exercise: 'Bodyweight Squats', sets: 5, reps: '20', rest: '60s' }],
    },
  },
  [generateKey('lose-fat', 'beginner', 'dumbbells')]: {
    name: 'Beginner Fat Loss - Dumbbells',
    description: 'Basic dumbbell exercises for fat loss.',
    schedule: ['Day 1: Full Body', 'Day 2: Rest', 'Day 3: Full Body', 'Day 4: Rest'],
    workouts: {
      'Day 1: Full Body': [
          { exercise: 'Dumbbell Squats', sets: 3, reps: '12', rest: '60s' },
          { exercise: 'Dumbbell Bench Press', sets: 3, reps: '12', rest: '60s' },
      ],
      'Day 3: Full Body': [
          { exercise: 'Dumbbell Rows', sets: 3, reps: '12', rest: '60s' },
          { exercise: 'Dumbbell Lunges', sets: 3, reps: '10 per leg', rest: '60s' },
      ],
    },
  },
    [generateKey('improve-endurance', 'intermediate', 'full-gym')]: {
        name: 'Intermediate Endurance - Full Gym',
        description: 'Gym equipment for endurance training.',
        schedule: ['Day 1: Circuit A', 'Day 2: Cardio', 'Day 3: Circuit B', 'Day 4: Rest'],
        workouts: {
            'Day 1: Circuit A': [{ exercise: 'Leg Press', sets: 3, reps: '15-20', rest: '45s' }],
            'Day 2: Cardio': [{ exercise: 'Treadmill Run', duration: '30 mins' }],
            'Day 3: Circuit B': [{ exercise: 'Lat Pulldown', sets: 3, reps: '15-20', rest: '45s' }],
        },
    },
    [generateKey('build-muscle', 'advanced', 'full-gym')]: {
        name: 'Advanced Muscle Gain - Full Gym',
        description: 'Intense compound lifting.',
        schedule: ['Day 1: Chest & Tris', 'Day 2: Back & Bis', 'Day 3: Legs', 'Day 4: Shoulders & Core', 'Day 5: Rest'],
        workouts: {
            'Day 1: Chest & Tris': [{ exercise: 'Barbell Bench Press', sets: 5, reps: '5', rest: '120s' }],
            'Day 2: Back & Bis': [{ exercise: 'Deadlifts', sets: 3, reps: '5', rest: '180s' }],
            'Day 3: Legs': [{ exercise: 'Barbell Squats', sets: 5, reps: '5', rest: '150s' }],
            'Day 4: Shoulders & Core': [{ exercise: 'Overhead Press', sets: 4, reps: '8', rest: '90s' }],
        },
    },
  // Add a default/fallback plan if needed
   'default': {
    name: 'General Fitness Plan',
    description: 'Select your goal, level, and equipment to get a specific plan.',
    schedule: [],
    workouts: {},
  }
};

// Helper function to get a workout plan
export const getWorkoutPlan = (goal, level, equipment) => {
  const key = generateKey(goal, level, equipment);
  return mockWorkouts[key] || mockWorkouts['default']; // Return specific plan or default
}; 