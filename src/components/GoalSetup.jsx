import React, { useState, useEffect } from 'react';
import './GoalSetup.css';

// Constants for options
const GOAL_OPTIONS = [
  {
    value: 'build-muscle',
    label: 'Build Muscle',
    description: 'Focus on increasing muscle mass and strength through resistance training.',
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=250&h=250&auto=format&fit=crop&q=80', 
  },
  {
    value: 'lose-fat',
    label: 'Lose Fat',
    description: 'Prioritize calorie expenditure and metabolic conditioning to reduce body fat.',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=250&h=250&auto=format&fit=crop&q=80', 
  },
  {
    value: 'improve-endurance',
    label: 'Improve Endurance',
    description: 'Enhance cardiovascular health and stamina with sustained aerobic activities.',
    imageUrl: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=250&h=250&auto=format&fit=crop&q=80', 
  },
  {
    value: 'general-fitness',
    label: 'General Fitness',
    description: 'Maintain overall health, functional strength, and well-being.',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=250&h=250&auto=format&fit=crop&q=80', 
  },
];

const LEVEL_OPTIONS = [
  { 
    value: 'beginner', 
    label: 'Beginner',
    description: 'New to fitness or returning after a long break. Focus on form and consistency.',
    imageUrl: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=250&h=250&auto=format&fit=crop&q=80',
  },
  { 
    value: 'intermediate', 
    label: 'Intermediate',
    description: 'Comfortable with basic exercises and ready for more challenging workouts.',
    imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=250&h=250&auto=format&fit=crop&q=80',
  },
  { 
    value: 'advanced', 
    label: 'Advanced',
    description: 'Experienced with consistent training and looking for higher intensity programs.',
    imageUrl: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=250&h=250&auto=format&fit=crop&q=80',
  },
];

const EQUIPMENT_OPTIONS = [
  { 
    value: 'full-gym', 
    label: 'Full Gym',
    description: 'Access to a complete range of gym equipment including machines and free weights.',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=250&h=250&auto=format&fit=crop&q=80',
  },
  { 
    value: 'dumbbells', 
    label: 'Dumbbells Only',
    description: 'Workouts that only require dumbbells, perfect for home fitness enthusiasts.',
    imageUrl: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=250&h=250&auto=format&fit=crop&q=80',
  },
  { 
    value: 'bodyweight', 
    label: 'Bodyweight Only',
    description: 'No equipment necessary - just you and gravity for effective workouts anywhere.',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=250&h=250&auto=format&fit=crop&q=80',
  },
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

  // Construct a more descriptive aria-label
  const descriptiveAriaLabel = `${ariaLabelPrefix}: ${option.label}. ${option.description}`;

  // Combine base and conditional classes
  const buttonClasses = [
    'selection-button', // Base class
    isSelected ? 'selected' : '' // Add 'selected' class if isSelected is true
  ].filter(Boolean).join(' '); // Filter out empty strings and join

  return (
    <button
      type="button"
      onClick={() => onSelect(option.value)}
      onKeyDown={handleKeyDown}
      role="radio"
      aria-checked={isSelected}
      aria-label={descriptiveAriaLabel}
      tabIndex={0}
      className={buttonClasses} // Apply the combined classes
    >
      <div className="selection-button-inner"> {/* Use inner container class */} 
        <div className="selection-button-text-content"> {/* Use text content container class */}
          <span className="selection-button-label"> {/* Use label class */} 
            {option.label}
          </span>
          <span className="selection-button-description"> {/* Use description class */}
            {option.description}
          </span>
        </div>
        <div className="selection-button-image-container"> {/* Use image container class */}
          <img
            src={option.imageUrl}
            alt={`${option.label} goal illustration`}
            // Image specific classes removed as handled by container
          />
        </div>
      </div>
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
    if (!goal || !level || !equipment) {
      console.error("Cannot generate plan: missing required selections", { goal, level, equipment });
      return;
    }
    
    console.log("Generating plan with:", { goal, level, equipment });
    
    try {
      if (typeof onGeneratePlan === 'function') {
        onGeneratePlan(goal, level, equipment);
      } else {
        console.error("onGeneratePlan is not a function", onGeneratePlan);
      }
    } catch (error) {
      console.error("Error generating workout plan:", error);
    }
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
          <div className="generated-goalsetup-class-7">
            <h3 className="step-title">Step 1: Choose Your Primary Goal</h3>
            <div className="generated-goalsetup-class-9">
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
            <div className="step-navigation-controls">
              <div></div>
              <button
                type="button"
                onClick={handleNextStep}
                onKeyDown={(e) => handleButtonKeyDown(e, handleNextStep)}
                disabled={!goal}
                aria-label="Next step: Select Fitness Level"
                tabIndex={0}
                className="generated-goalsetup-class-11 button button-next"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="generated-goalsetup-class-12">
            <h3 className="step-title">Step 2: Select Your Fitness Level</h3>
            <div className="generated-goalsetup-class-14">
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
            <div className="step-navigation-controls">
              <button
                type="button"
                onClick={handlePreviousStep}
                onKeyDown={(e) => handleButtonKeyDown(e, handlePreviousStep)}
                aria-label="Previous step: Choose Goal"
                tabIndex={0}
                className="generated-goalsetup-class-16 button"
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
                className="generated-goalsetup-class-17 button button-next"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="generated-goalsetup-class-18">
            <h3 className="step-title">Step 3: Available Equipment</h3>
             <div className="generated-goalsetup-class-20">
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
            <div className="step-navigation-controls">
              <button
                type="button"
                onClick={handlePreviousStep}
                onKeyDown={(e) => handleButtonKeyDown(e, handlePreviousStep)}
                aria-label="Previous step: Select Fitness Level"
                tabIndex={0}
                className="generated-goalsetup-class-22 button"
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
                className="generated-goalsetup-class-23 button button-primary"
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
    <div>
      {/* Step Indicator Section */}
      <div className="step-indicator">
        <p className="step-indicator-text">Step {currentStep} of 3</p>
        <div className="step-indicator-bar-container">
          <div
            className="step-indicator-bar-progress"
            style={{ width: `${(currentStep / 3) * 100}%` }}
            aria-valuenow={currentStep}
            aria-valuemin="1"
            aria-valuemax="3"
            role="progressbar"
            aria-label={`Step ${currentStep} of 3 complete`}
          ></div>
        </div>
      </div>

      {renderStep()}
    </div>
  );
};

export default GoalSetup; 