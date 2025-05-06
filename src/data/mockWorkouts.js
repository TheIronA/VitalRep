// src/data/mockWorkouts.js

// Simple key generation helper (can be expanded)
const generateKey = (goal, level, equipment) => `${goal}_${level}_${equipment}`;

const GOALS = ['build-muscle', 'lose-fat', 'improve-endurance', 'general-fitness'];
const LEVELS = ['beginner', 'intermediate', 'advanced'];
const EQUIPMENT = ['full-gym', 'dumbbells', 'bodyweight'];

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const formatName = (goal, level, equipment) =>
  `${capitalize(goal.replace('-', ' '))} - ${capitalize(level)} - ${capitalize(equipment.replace('-', ' '))} Plan`;
const formatDescription = (goal, level, equipment) =>
  `A placeholder ${level} plan focusing on ${goal.replace('-', ' ')} using ${equipment.replace('-', ' ')} equipment. Includes a mix of exercises and rest days, tailored for ${level} frequency.`;

const createPlaceholderExercise = (level, type, dayLabel, exerciseNum) => {
  const exerciseBase = ['Squat', 'Push-up', 'Row', 'Lunge', 'Plank', 'Press', 'Curl', 'Extension', 'Deadlift Variant', 'Fly', 'Raise'];
  return {
    exercise: `${capitalize(dayLabel.split(' ')[0])} Placeholder ${exerciseNum} (${exerciseBase[Math.floor(Math.random() * exerciseBase.length)]} for ${type})`,
    sets: (level === 'advanced' ? 4 : 3),
    reps: (level === 'beginner' ? '10-15' : '8-12'),
    rest: '60-90s',
  };
};

const newMockWorkouts = {};

// Pre-existing plans (copied from the current file structure for integration)
const existingPlans = {
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
      'Day 3: Rest': [{ exercise: 'Rest day. Focus on recovery and light stretching if desired.' }],
      'Day 6: Rest': [{ exercise: 'Rest day. Focus on recovery and light stretching if desired.' }],
      'Day 7: Rest': [{ exercise: 'Rest day. Focus on recovery and light stretching if desired.' }],
    },
  },
  [generateKey('lose-fat', 'intermediate', 'bodyweight')]: {
    name: 'Intermediate Fat Loss - Bodyweight',
    description: 'High-intensity circuit training to maximize calorie burn.',
    schedule: ['Day 1: Full Body Circuit', 'Day 2: Active Recovery / LISS', 'Day 3: Full Body Circuit', 'Day 4: Rest', 'Day 5: Full Body Circuit', 'Day 6: Active Recovery / LISS', 'Day 7: Rest'],
    workouts: {
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
       'Active Recovery / LISS': [ { exercise: 'Light activity like walking, stretching, or yoga for 30-60 minutes.'} ],
       'Day 4: Rest': [{ exercise: 'Rest day. Focus on recovery and light stretching if desired.' }],
       'Day 7: Rest': [{ exercise: 'Rest day. Focus on recovery and light stretching if desired.' }],
    },
  },
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
        'LISS Cardio': [ { exercise: 'Low-Intensity Steady State Cardio (e.g., jogging, cycling, brisk walking) for 45-60 minutes at a conversational pace.'} ],
        'Day 4: Rest': [{ exercise: 'Rest day. Focus on recovery and light stretching if desired.' }],
        'Day 7: Rest': [{ exercise: 'Rest day. Focus on recovery and light stretching if desired.' }],
    },
  },
  [generateKey('build-muscle', 'intermediate', 'bodyweight')]: {
    name: 'Intermediate Muscle Gain - Bodyweight',
    description: 'Progressive bodyweight exercises for muscle growth, focusing on increasing difficulty and volume.',
    schedule: ['Day 1: Upper Body Push', 'Day 2: Lower Body', 'Day 3: Upper Body Pull', 'Day 4: Rest', 'Day 5: Full Body Strength', 'Day 6: Core & Mobility', 'Day 7: Rest'],
    workouts: {
      'Day 1: Upper Body Push': [
        { exercise: 'Decline Push-ups (feet elevated)', sets: 4, reps: 'AMRAP to 15', rest: '75s' },
        { exercise: 'Diamond Push-ups', sets: 3, reps: 'AMRAP to 12', rest: '60s' },
        { exercise: 'Dips (using chairs or parallel bars)', sets: 3, reps: 'AMRAP to 10', rest: '75s' },
        { exercise: 'Pike Push-ups', sets: 3, reps: 'AMRAP to 10', rest: '60s' },
      ],
      'Day 2: Lower Body': [
        { exercise: 'Pistol Squat Progressions (or Shrimp Squats)', sets: 3, reps: '5-8 per leg', rest: '90s' },
        { exercise: 'Bodyweight Bulgarian Split Squats', sets: 3, reps: '10-12 per leg', rest: '75s' },
        { exercise: 'Nordic Hamstring Curl Negatives (or Glute Ham Raises if equipment allows)', sets: 3, reps: '5-8', rest: '90s' },
        { exercise: 'Single-Leg Calf Raises', sets: 4, reps: '15-20 per leg', rest: '45s' },
      ],
      'Day 3: Upper Body Pull': [
        { exercise: 'Pull-ups (or progression like negatives/assisted)', sets: 4, reps: 'AMRAP to 10', rest: '90s' },
        { exercise: 'Bodyweight Rows (under a table or low bar)', sets: 3, reps: 'AMRAP to 15', rest: '75s' },
        { exercise: 'Towel Rows (around a sturdy pole)', sets: 3, reps: '10-12', rest: '60s' },
        { exercise: 'Reverse Snow Angels', sets: 3, reps: '15-20', rest: '45s' },
      ],
      'Day 5: Full Body Strength': [
        { exercise: 'Explosive Push-ups (Clapping Push-ups if possible)', sets: 3, reps: '6-10', rest: '90s' },
        { exercise: 'Jump Squats', sets: 3, reps: '10-15', rest: '75s' },
        { exercise: 'Chin-ups (palms facing you)', sets: 3, reps: 'AMRAP to 8', rest: '90s' },
        { exercise: 'Walking Lunges', sets: 3, reps: '12-15 per leg', rest: '60s' },
      ],
      'Core & Mobility': [
        { exercise: 'Hanging Leg Raises (or Knee Tucks)', sets: 3, reps: '10-15', rest: '60s' },
        { exercise: 'Plank Variations (Side Plank, RKC Plank)', sets: 3, reps: '30-60s hold per variation', rest: '45s' },
        { exercise: 'Full Body Stretching Routine', duration: '15-20 mins' },
      ],
      'Day 4: Rest': [{ exercise: 'Rest day. Focus on recovery.' }],
      'Day 7: Rest': [{ exercise: 'Rest day. Focus on recovery.' }],
    },
  },
  [generateKey('lose-fat', 'beginner', 'dumbbells')]: {
    name: 'Beginner Fat Loss - Dumbbells',
    description: 'Full body dumbbell workouts to introduce resistance training and boost metabolism.',
    schedule: ['Day 1: Full Body A', 'Day 2: Rest or Light Cardio', 'Day 3: Full Body B', 'Day 4: Rest', 'Day 5: Full Body A', 'Day 6: Rest or Light Cardio', 'Day 7: Rest'],
    workouts: {
      'Day 1: Full Body A': [
          { exercise: 'Dumbbell Goblet Squats', sets: 3, reps: '10-12', rest: '60s' },
          { exercise: 'Dumbbell Bench Press (on floor if no bench)', sets: 3, reps: '10-12', rest: '60s' },
          { exercise: 'Dumbbell Bent-Over Rows', sets: 3, reps: '10-12 per arm', rest: '60s' },
          { exercise: 'Dumbbell Shoulder Press', sets: 3, reps: '10-12', rest: '60s' },
          { exercise: 'Plank', sets: 3, reps: '20-30s hold', rest: '45s' },
      ],
      'Day 3: Full Body B': [
          { exercise: 'Dumbbell Romanian Deadlifts', sets: 3, reps: '12-15', rest: '60s' },
          { exercise: 'Dumbbell Incline Press (use pillows for incline if no bench)', sets: 3, reps: '10-12', rest: '60s' },
          { exercise: 'Dumbbell Lunges', sets: 3, reps: '10-12 per leg', rest: '60s' },
          { exercise: 'Dumbbell Bicep Curls', sets: 3, reps: '12-15', rest: '45s' },
          { exercise: 'Dumbbell Tricep Kickbacks', sets: 3, reps: '12-15 per arm', rest: '45s' },
      ],
      'Day 5: Full Body A': [
          { exercise: 'Dumbbell Goblet Squats', sets: 3, reps: '10-12', rest: '60s' },
          { exercise: 'Dumbbell Bench Press (on floor if no bench)', sets: 3, reps: '10-12', rest: '60s' },
          { exercise: 'Dumbbell Bent-Over Rows', sets: 3, reps: '10-12 per arm', rest: '60s' },
          { exercise: 'Dumbbell Shoulder Press', sets: 3, reps: '10-12', rest: '60s' },
          { exercise: 'Bird Dog', sets: 3, reps: '10-12 per side', rest: '45s' },
      ],
      'Rest or Light Cardio': [{ exercise: 'Optional: 20-30 minutes of brisk walking, cycling, or other light cardio.' }],
      'Day 4: Rest': [{ exercise: 'Rest day. Focus on recovery.' }],
      'Day 7: Rest': [{ exercise: 'Rest day. Focus on recovery.' }],
    },
  },
  [generateKey('improve-endurance', 'intermediate', 'full-gym')]: {
    name: 'Intermediate Endurance - Full Gym',
    description: 'Combine gym equipment for circuit training and dedicated cardio sessions to boost endurance.',
    schedule: ['Day 1: Full Body Circuit A', 'Day 2: Steady State Cardio', 'Day 3: Full Body Circuit B', 'Day 4: Rest or Active Recovery', 'Day 5: HIIT Cardio', 'Day 6: Full Body Circuit A (Optional/Lighter)', 'Day 7: Rest'],
    workouts: {
        'Day 1: Full Body Circuit A': [
            { exercise: 'Perform 3-4 rounds. 45-60s per station, 15s transition. 90-120s rest between rounds.' },
            { exercise: 'Leg Press', sets: 1, reps: '15-20 (moderate weight)', rest: '15s' },
            { exercise: 'Lat Pulldown', sets: 1, reps: '15-20 (moderate weight)', rest: '15s' },
            { exercise: 'Dumbbell Walking Lunges', sets: 1, reps: '10-12 per leg', rest: '15s' },
            { exercise: 'Machine Chest Press', sets: 1, reps: '15-20 (moderate weight)', rest: '15s' },
            { exercise: 'Rowing Machine', sets: 1, reps: '60s (moderate intensity)', rest: '90-120s' },
        ],
        'Day 3: Full Body Circuit B': [
            { exercise: 'Perform 3-4 rounds. 45-60s per station, 15s transition. 90-120s rest between rounds.' },
            { exercise: 'Barbell Back Squats (lighter weight)', sets: 1, reps: '15-20', rest: '15s' },
            { exercise: 'Seated Cable Row', sets: 1, reps: '15-20', rest: '15s' },
            { exercise: 'Kettlebell Swings (or Dumbbell Swings)', sets: 1, reps: '20-25', rest: '15s' },
            { exercise: 'Machine Shoulder Press', sets: 1, reps: '15-20', rest: '15s' },
            { exercise: 'Stationary Bike', sets: 1, reps: '60s (moderate intensity)', rest: '90-120s' },
        ],
        'Day 6: Full Body Circuit A (Optional/Lighter)': [
            { exercise: 'Perform 2-3 rounds. Focus on form and controlled movements.' },
            { exercise: 'Leg Press', sets: 1, reps: '15 (light-moderate weight)', rest: '15s' },
            { exercise: 'Lat Pulldown', sets: 1, reps: '15 (light-moderate weight)', rest: '15s' },
            { exercise: 'Dumbbell Walking Lunges', sets: 1, reps: '10 per leg', rest: '15s' },
            { exercise: 'Machine Chest Press', sets: 1, reps: '15 (light-moderate weight)', rest: '15s' },
        ],
        'Steady State Cardio': [{ exercise: 'Treadmill, Elliptical, or Bike: 30-45 minutes at a consistent, moderate pace (Zone 2-3).' }],
        'HIIT Cardio': [
            { exercise: 'Choose one: Stationary Bike, Rower, or Treadmill (caution with sprints).' },
            { exercise: 'Warm-up: 5 minutes light cardio.' },
            { exercise: 'Intervals: 8-10 rounds of 30 seconds high intensity (Zone 4-5) / 60 seconds low intensity (Zone 1-2).' },
            { exercise: 'Cool-down: 5 minutes light cardio and stretching.' },
        ],
        'Rest or Active Recovery': [{ exercise: 'Rest or light activity like walking, yoga, or foam rolling for 20-30 minutes.' }],
        'Day 7: Rest': [{ exercise: 'Complete rest day.' }],
    },
  },
  [generateKey('build-muscle', 'advanced', 'full-gym')]: {
    name: 'Advanced Muscle Gain - Full Gym (PPL Split)',
    description: 'Intense Push/Pull/Legs split focusing on progressive overload with heavy compound and isolation exercises.',
    schedule: ['Day 1: Push (Chest, Shoulders, Triceps)', 'Day 2: Pull (Back, Biceps)', 'Day 3: Legs (Quads, Hamstrings, Calves)', 'Day 4: Rest', 'Day 5: Push (Strength Focus)', 'Day 6: Pull (Hypertrophy Focus)', 'Day 7: Legs (Volume Focus)'],
    workouts: {
        'Day 1: Push (Chest, Shoulders, Triceps)': [
            { exercise: 'Barbell Bench Press', sets: 4, reps: '6-10', rest: '90-120s' },
            { exercise: 'Incline Dumbbell Press', sets: 3, reps: '8-12', rest: '75-90s' },
            { exercise: 'Overhead Press (Barbell or Dumbbell)', sets: 4, reps: '6-10', rest: '90s' },
            { exercise: 'Lateral Raises', sets: 4, reps: '10-15', rest: '60s' },
            { exercise: 'Triceps Dips (Weighted if possible)', sets: 3, reps: '8-12 (or AMRAP)', rest: '75s' },
            { exercise: 'Skullcrushers or Cable Pushdowns', sets: 3, reps: '10-15', rest: '60s' },
        ],
        'Day 2: Pull (Back, Biceps)': [
            { exercise: 'Deadlifts (Conventional or Sumo)', sets: 1, reps: '3-5 (Heavy Warm-up then 1 Top Set)', rest: '180-240s' },
            { exercise: 'Weighted Pull-ups or Lat Pulldowns', sets: 4, reps: '6-10', rest: '90-120s' },
            { exercise: 'Barbell Rows or T-Bar Rows', sets: 3, reps: '8-12', rest: '75-90s' },
            { exercise: 'Seated Cable Rows (Close Grip)', sets: 3, reps: '10-15', rest: '60s' },
            { exercise: 'Face Pulls', sets: 4, reps: '15-20', rest: '45s' },
            { exercise: 'Barbell Curls', sets: 3, reps: '8-12', rest: '75s' },
            { exercise: 'Dumbbell Hammer Curls or Incline Curls', sets: 3, reps: '10-15', rest: '60s' },
        ],
        'Day 3: Legs (Quads, Hamstrings, Calves)': [
            { exercise: 'Barbell Back Squats', sets: 4, reps: '6-10', rest: '120-180s' },
            { exercise: 'Romanian Deadlifts (RDLs)', sets: 3, reps: '8-12', rest: '90-120s' },
            { exercise: 'Leg Press', sets: 4, reps: '10-15', rest: '75-90s' },
            { exercise: 'Hamstring Curls (Lying or Seated)', sets: 3, reps: '10-15', rest: '60s' },
            { exercise: 'Leg Extensions', sets: 3, reps: '12-20 (lighter, focus on contraction)', rest: '60s' },
            { exercise: 'Standing Calf Raises', sets: 4, reps: '10-15 (heavy)', rest: '60s' },
            { exercise: 'Seated Calf Raises', sets: 3, reps: '15-20', rest: '45s' },
        ],
        'Day 5: Push (Strength Focus)': [
            { exercise: 'Barbell Bench Press', sets: 5, reps: '3-5', rest: '120-180s' },
            { exercise: 'Overhead Press (Barbell)', sets: 5, reps: '3-5', rest: '120-180s' },
            { exercise: 'Close Grip Bench Press', sets: 3, reps: '6-8', rest: '90s' },
            { exercise: 'Dumbbell Front Raises', sets: 3, reps: '10-12', rest: '60s' },
        ],
        'Day 6: Pull (Hypertrophy Focus)': [
             { exercise: 'Pull-ups (Bodyweight AMRAP sets or Lat Pulldowns)', sets: 5, reps: 'AMRAP or 8-15', rest: '90s' },
             { exercise: 'Dumbbell Rows (Chest Supported if possible)', sets: 4, reps: '10-15 per arm', rest: '75s' },
             { exercise: 'Single Arm Cable Rows', sets: 3, reps: '12-15 per arm', rest: '60s' },
             { exercise: 'Preacher Curls or Concentration Curls', sets: 4, reps: '10-15', rest: '60s' },
        ],
        'Day 7: Legs (Volume Focus)': [
            { exercise: 'Front Squats or Hack Squats', sets: 4, reps: '8-12', rest: '90-120s' },
            { exercise: 'Good Mornings or Glute Ham Raises', sets: 3, reps: '10-15', rest: '75s' },
            { exercise: 'Walking Lunges (Dumbbell)', sets: 3, reps: '10-12 per leg', rest: '75s' },
            { exercise: 'Single Leg Hamstring Curls', sets: 3, reps: '12-15 per leg', rest: '60s' },
        ],
        'Day 4: Rest': [{ exercise: 'Active recovery (light walk, stretching) or complete rest.' }],
    },
  },
  [generateKey('general-fitness', 'advanced', 'dumbbells')]: {
    name: 'Advanced General Fitness - Dumbbells',
    description: 'Challenging full-body and split routines using only dumbbells for overall fitness.',
    schedule: ['Day 1: Full Body Strength A', 'Day 2: Metabolic Conditioning', 'Day 3: Full Body Strength B', 'Day 4: Rest or Active Recovery', 'Day 5: Upper Body Focus', 'Day 6: Lower Body & Core Focus', 'Day 7: Rest'],
    workouts: {
      'Day 1: Full Body Strength A': [
        { exercise: 'Dumbbell Goblet Squat', sets: 4, reps: '8-12', rest: '75s' },
        { exercise: 'Dumbbell Bench Press', sets: 4, reps: '8-12', rest: '75s' },
        { exercise: 'Dumbbell Renegade Rows', sets: 3, reps: '6-10 per side', rest: '60s' },
        { exercise: 'Dumbbell Romanian Deadlifts', sets: 3, reps: '10-15', rest: '75s' },
        { exercise: 'Dumbbell Shoulder Press', sets: 4, reps: '8-12', rest: '75s' },
      ],
      'Day 2: Metabolic Conditioning': [
        { exercise: 'Perform as a circuit, 3-4 rounds. 30-45s work, 15-30s rest between exercises. 90s rest between rounds.' },
        { exercise: 'Dumbbell Swings', sets: 1, reps: '30-45s', rest: '15-30s' },
        { exercise: 'Dumbbell Thrusters', sets: 1, reps: '30-45s', rest: '15-30s' },
        { exercise: 'Dumbbell Burpee Deadlifts', sets: 1, reps: '30-45s', rest: '15-30s' },
        { exercise: "Farmer's Walk (heavy dumbbells)", sets: 1, reps: '30-45s', rest: '15-30s' },
      ],
      'Day 3: Full Body Strength B': [
        { exercise: 'Dumbbell Bulgarian Split Squats', sets: 3, reps: '8-12 per leg', rest: '75s' },
        { exercise: 'Dumbbell Incline Press', sets: 4, reps: '10-15', rest: '75s' },
        { exercise: 'Dumbbell Single Arm Rows', sets: 4, reps: '10-15 per side', rest: '60s' },
        { exercise: 'Dumbbell Arnold Press', sets: 3, reps: '10-15', rest: '75s' },
        { exercise: 'Dumbbell Bicep Curls', sets: 3, reps: '10-15', rest: '60s' },
        { exercise: 'Dumbbell Overhead Tricep Extensions', sets: 3, reps: '10-15', rest: '60s' },
      ],
      'Day 5: Upper Body Focus': [
        { exercise: 'Dumbbell Push Press', sets: 4, reps: '6-10', rest: '90s' },
        { exercise: 'Dumbbell Floor Press', sets: 3, reps: 'AMRAP (As Many Reps As Possible)', rest: '75s' },
        { exercise: 'Dumbbell Bent Over Lateral Raises', sets: 4, reps: '12-15', rest: '60s' },
        { exercise: 'Dumbbell Hammer Curls', sets: 3, reps: '12-15', rest: '60s' },
        { exercise: 'Dumbbell Tricep Kickbacks', sets: 3, reps: '15-20 per arm', rest: '45s' },
      ],
      'Day 6: Lower Body & Core Focus': [
        { exercise: 'Dumbbell Front Squats', sets: 4, reps: '10-15', rest: '75s' },
        { exercise: 'Dumbbell Single Leg RDLs', sets: 3, reps: '10-12 per leg', rest: '60s' },
        { exercise: 'Dumbbell Step-ups', sets: 3, reps: '10-12 per leg', rest: '60s' },
        { exercise: 'Dumbbell Side Bends', sets: 3, reps: '12-15 per side', rest: '45s' },
        { exercise: 'Dumbbell Russian Twists', sets: 3, reps: '15-20 per side', rest: '45s' },
      ],
      'Rest or Active Recovery': [{ exercise: 'Light walk, yoga, or stretching for 20-30 minutes.' }],
      'Day 7: Rest': [{ exercise: 'Complete rest day.' }],
    }
  },
  [generateKey('lose-fat', 'beginner', 'full-gym')]: {
    name: 'Beginner Fat Loss - Full Gym',
    description: 'A mix of machine and free weight exercises to build confidence and burn calories.',
    schedule: ['Day 1: Full Body Strength', 'Day 2: Light Cardio & Core', 'Day 3: Full Body Strength', 'Day 4: Rest', 'Day 5: Full Body Strength (Circuit Style)', 'Day 6: Light Cardio & Stretching', 'Day 7: Rest'],
    workouts: {
      'Day 1: Full Body Strength': [
        { exercise: 'Leg Press Machine', sets: 3, reps: '12-15', rest: '60-90s' },
        { exercise: 'Chest Press Machine', sets: 3, reps: '12-15', rest: '60-90s' },
        { exercise: 'Lat Pulldown Machine', sets: 3, reps: '12-15', rest: '60-90s' },
        { exercise: 'Seated Shoulder Press Machine', sets: 3, reps: '12-15', rest: '60-90s' },
        { exercise: 'Assisted Pull-up/Dip Machine (or bodyweight negatives)', sets: 3, reps: 'AMRAP or 8-12', rest: '60s' },
      ],
      'Day 3: Full Body Strength': [
        { exercise: 'Goblet Squat (Dumbbell or Kettlebell)', sets: 3, reps: '12-15', rest: '60-90s' },
        { exercise: 'Dumbbell Bench Press', sets: 3, reps: '12-15', rest: '60-90s' },
        { exercise: 'Seated Cable Row', sets: 3, reps: '12-15', rest: '60-90s' },
        { exercise: 'Dumbbell Lateral Raises', sets: 3, reps: '15-20', rest: '45-60s' },
        { exercise: 'Plank', sets: 3, reps: '30-45s hold', rest: '45s' },
      ],
      'Day 5: Full Body Strength (Circuit Style)': [
        { exercise: 'Perform 2-3 rounds. 45s work, 15s rest/transition. 90s rest between rounds.'},
        { exercise: 'Bodyweight Squats (or Light Goblet Squats)', sets: 1, reps: '45s', rest: '15s' },
        { exercise: 'Push-ups (on knees if needed)', sets: 1, reps: '45s', rest: '15s' },
        { exercise: 'TRX Rows (or Dumbbell Rows)', sets: 1, reps: '45s', rest: '15s' },
        { exercise: 'Jumping Jacks (or Step Jacks)', sets: 1, reps: '45s', rest: '15s' },
        { exercise: 'Crunches', sets: 1, reps: '45s', rest: '90s' },
      ],
      'Light Cardio & Core': [
        { exercise: 'Choose one: Treadmill walk (incline), Elliptical, or Stationary Bike for 20-30 minutes at a light pace.' },
        { exercise: 'Bird Dog', sets: 3, reps: '10-12 per side', rest: '30s' },
        { exercise: 'Dead Bug', sets: 3, reps: '10-12 per side', rest: '30s' },
      ],
      'Light Cardio & Stretching': [
        { exercise: 'Choose one: Treadmill walk, Elliptical, or Stationary Bike for 15-20 minutes at a light pace.' },
        { exercise: 'Full body static stretching routine, hold each stretch for 20-30 seconds.'}
      ],
      'Day 4: Rest': [{ exercise: 'Complete rest day.' }],
      'Day 7: Rest': [{ exercise: 'Complete rest day.' }],
    }
  },
  [generateKey('improve-endurance', 'beginner', 'bodyweight')]: {
    name: 'Beginner Endurance - Bodyweight',
    description: 'Focus on building cardiovascular fitness and muscular endurance with bodyweight exercises.',
    schedule: ['Day 1: Circuit A', 'Day 2: Light Activity/Walk', 'Day 3: Circuit B', 'Day 4: Rest', 'Day 5: Circuit A (try more reps/rounds)', 'Day 6: Light Activity/Walk', 'Day 7: Rest'],
    workouts: {
      'Circuit A': [
        { exercise: 'Perform 2-3 rounds. Focus on good form. Rest 60-90s between exercises, and 2-3 mins between rounds.' },
        { exercise: 'Jumping Jacks (or Marching in Place)', sets: 1, reps: '30-60 seconds', rest: '60-90s' },
        { exercise: 'Bodyweight Squats', sets: 1, reps: '10-15', rest: '60-90s' },
        { exercise: 'Wall Push-ups (or Incline Push-ups on a sturdy surface)', sets: 1, reps: '8-12', rest: '60-90s' },
        { exercise: 'Step-ups (using a low step or stair)', sets: 1, reps: '10-12 per leg', rest: '60-90s' },
        { exercise: 'Plank (from knees if needed)', sets: 1, reps: '20-30 second hold', rest: '60-90s' },
      ],
      'Circuit B': [
        { exercise: 'Perform 2-3 rounds. Focus on good form. Rest 60-90s between exercises, and 2-3 mins between rounds.' },
        { exercise: 'High Knees (or Marching in Place with higher knees)', sets: 1, reps: '30-60 seconds', rest: '60-90s' },
        { exercise: 'Glute Bridges', sets: 1, reps: '12-15', rest: '60-90s' },
        { exercise: 'Chair Dips (for triceps)', sets: 1, reps: '8-12', rest: '60-90s' },
        { exercise: 'Bird Dog', sets: 1, reps: '10-12 per side', rest: '60-90s' },
        { exercise: 'Side Plank (from knees if needed)', sets: 1, reps: '15-20 second hold per side', rest: '60-90s' },
      ],
      'Day 5: Circuit A (try more reps/rounds)': [
        { exercise: 'Perform 2-4 rounds (aim for one more than last time if possible). Focus on good form. Rest 60-90s between exercises, and 2-3 mins between rounds.' },
        { exercise: 'Jumping Jacks (or Marching in Place)', sets: 1, reps: '30-60 seconds (try for longer duration or more intensity)', rest: '60-90s' },
        { exercise: 'Bodyweight Squats', sets: 1, reps: '12-20 (try for more reps)', rest: '60-90s' },
        { exercise: 'Wall Push-ups (or Incline Push-ups)', sets: 1, reps: '10-15 (try for more reps or a slightly lower incline)', rest: '60-90s' },
        { exercise: 'Step-ups', sets: 1, reps: '12-15 per leg', rest: '60-90s' },
        { exercise: 'Plank', sets: 1, reps: '25-40 second hold', rest: '60-90s' },
      ],
      'Light Activity/Walk': [{ exercise: '20-30 minutes of brisk walking or other light, enjoyable activity.' }],
      'Day 4: Rest': [{ exercise: 'Complete rest day. Focus on hydration and nutrition.' }],
      'Day 7: Rest': [{ exercise: 'Complete rest day. Focus on hydration and nutrition.' }],
    },
  },
};


GOALS.forEach(goal => {
  LEVELS.forEach(level => {
    EQUIPMENT.forEach(equipment => {
      const key = generateKey(goal, level, equipment);
      if (!existingPlans[key] && !newMockWorkouts[key]) {
        let schedule = [];
        const workouts = {};
        let workoutDays = [];
        let exercisesPerDay = 3;

        if (level === 'beginner') {
          workoutDays = ['Mon: Full Body A', 'Wed: Full Body B', 'Fri: Full Body C'];
          schedule = [
            workoutDays[0], 'Tue: Rest',
            workoutDays[1], 'Thu: Rest',
            workoutDays[2], 'Sat: Rest', 'Sun: Rest'
          ];
          exercisesPerDay = 3;
        } else if (level === 'intermediate') {
          workoutDays = ['Mon: Upper Body A', 'Tue: Lower Body A', 'Thu: Upper Body B', 'Fri: Lower Body B'];
          schedule = [
            workoutDays[0], workoutDays[1], 'Wed: Rest',
            workoutDays[2], workoutDays[3], 'Sat: Active Recovery/Cardio', 'Sun: Rest'
          ];
          exercisesPerDay = 4;
        } else { // advanced
          workoutDays = ['Mon: Push Focus', 'Tue: Pull Focus', 'Wed: Legs Focus', 'Fri: Upper Body Volume', 'Sat: Lower Body Volume'];
           schedule = [
            workoutDays[0], workoutDays[1], workoutDays[2], 'Thu: Rest',
            workoutDays[3], workoutDays[4], 'Sun: Active Recovery/Skill'
          ];
          exercisesPerDay = 5;
        }

        schedule.forEach((dayName) => {
          if (dayName.toLowerCase().includes('rest')) {
            workouts[dayName] = [{ exercise: 'Rest day. Focus on recovery, hydration, and light stretching if desired.' }];
          } else if (dayName.toLowerCase().includes('active recovery') || dayName.toLowerCase().includes('skill')) {
            workouts[dayName] = [{ exercise: `${capitalize(dayName.split(': ')[1])}. Examples: Light cardio, mobility work, skill practice, or foam rolling for 20-30 minutes.` }];
          } else {
            workouts[dayName] = [];
            for (let i = 1; i <= exercisesPerDay; i++) {
              workouts[dayName].push(createPlaceholderExercise(level, goal, dayName.split(': ')[1], i));
            }
          }
        });

        newMockWorkouts[key] = {
          name: formatName(goal, level, equipment),
          description: formatDescription(goal, level, equipment),
          schedule,
          workouts,
        };
      }
    });
  });
});

export const mockWorkouts = {
  ...newMockWorkouts,
  ...existingPlans,
  'default': {
    name: 'Workout Plan Not Found',
    description: 'The specific combination of goal, level, and equipment you selected does not have a pre-defined plan yet. Please select different options or check back later.',
    schedule: ['No Plan Available'],
    workouts: {
      'No Plan Available': [{ exercise: 'Please select different options to generate a workout plan.' }],
    },
  }
};

export const getWorkoutPlan = (goal, level, equipment) => {
  const key = generateKey(goal, level, equipment);
  console.log(`Fetching workout plan for key: ${key}`);
  const plan = mockWorkouts[key];
  if (plan && key !== 'default') {
    console.log(`Plan found for ${key}:`, plan.name);
    return plan;
  } else {
    console.warn(`No specific plan found for ${key}. Returning default plan.`);
    return mockWorkouts['default'];
  }
}; 