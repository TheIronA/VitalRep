import React, { useState } from 'react';

// Constants for options
const GOAL_OPTIONS = [
  { value: 'build-muscle', label: 'Build Muscle' },
  { value: 'lose-fat', label: 'Lose Fat' },
  { value: 'improve-endurance', label: 'Improve Endurance' },
  { value: 'general-fitness', label: 'General Fitness' },
];

const LEVEL_OPTIONS = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
];

const EQUIPMENT_OPTIONS = [
  { value: 'full-gym', label: 'Full Gym' },
  { value: 'dumbbells', label: 'Dumbbells Only' },
  { value: 'bodyweight', label: 'Bodyweight Only' },
];

// Reusable Button Component for Selection
const SelectionButton = ({ option, selectedValue, onSelect, ariaLabelPrefix }) => {
  const isSelected = option.value === selectedValue;

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Prevent page scroll on space
      onSelect(option.value);
    }
  };

  return (
    <button
      type="button"
      onClick={() => onSelect(option.value)}
      onKeyDown={handleKeyDown}
      role="radio" // Semantically represents a radio button choice
      aria-checked={isSelected} // Indicate selection state for screen readers
      aria-label={`${ariaLabelPrefix}: ${option.label}`}
      tabIndex={0} // Make it focusable
      className={`
        p-4 border rounded-lg text-center transition duration-150 ease-in-out w-full 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        ${isSelected
          ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400'
        }
      `}
    >
      {option.label}
    </button>
  );
};

const GoalSetup = ({ onGeneratePlan }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [goal, setGoal] = useState('');
  const [level, setLevel] = useState('');
  const [equipment, setEquipment] = useState('');

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
     if (!goal || !level || !equipment) return; // Prevent submission if any step is incomplete
     console.log("Generating plan with:", { goal, level, equipment }); // Debug log
     onGeneratePlan(goal, level, equipment);
  };

  // Generic button handler for Enter/Space keys
  const handleButtonKeyDown = (event, action) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-semibold text-gray-800 text-center">Step 1: Choose Your Primary Goal</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {GOAL_OPTIONS.map(option => (
                <SelectionButton
                  key={option.value}
                  option={option}
                  selectedValue={goal}
                  onSelect={setGoal}
                  ariaLabelPrefix="Goal"
                />
              ))}
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="button"
                onClick={handleNextStep}
                onKeyDown={(e) => handleButtonKeyDown(e, handleNextStep)}
                disabled={!goal}
                aria-label="Next step: Select Fitness Level"
                tabIndex={0}
                className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-semibold text-gray-800 text-center">Step 2: Select Your Fitness Level</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {LEVEL_OPTIONS.map(option => (
                <SelectionButton
                  key={option.value}
                  option={option}
                  selectedValue={level}
                  onSelect={setLevel}
                  ariaLabelPrefix="Fitness Level"
                 />
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={handlePreviousStep}
                onKeyDown={(e) => handleButtonKeyDown(e, handlePreviousStep)}
                aria-label="Previous step: Choose Goal"
                tabIndex={0}
                className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                onKeyDown={(e) => handleButtonKeyDown(e, handleNextStep)}
                disabled={!level}
                aria-label="Next step: Select Equipment"
                tabIndex={0}
                className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-semibold text-gray-800 text-center">Step 3: Available Equipment</h3>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {EQUIPMENT_OPTIONS.map(option => (
                <SelectionButton
                  key={option.value}
                  option={option}
                  selectedValue={equipment}
                  onSelect={setEquipment}
                  ariaLabelPrefix="Equipment"
                 />
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={handlePreviousStep}
                onKeyDown={(e) => handleButtonKeyDown(e, handlePreviousStep)}
                aria-label="Previous step: Select Fitness Level"
                tabIndex={0}
                className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                onKeyDown={(e) => handleButtonKeyDown(e, handleSubmit)}
                disabled={!equipment || !goal || !level} // Ensure all steps are complete
                aria-label="Generate Workout Plan"
                tabIndex={0}
                className="px-6 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Generate Workout Plan
              </button>
            </div>
          </div>
        );
      default:
        return null; // Should not happen
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      {/* Optional: Progress Indicator */}
       <div className="mb-6">
         <p className="text-center text-sm font-medium text-indigo-600">Step {currentStep} of 3</p>
         <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
           <div
             className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300 ease-out"
             style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
         </div>
       </div>

      {renderStep()}
    </div>
  );
};

export default GoalSetup; 