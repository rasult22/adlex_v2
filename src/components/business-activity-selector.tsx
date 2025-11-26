import React, { useState } from 'react';
import svgPaths from "../imports/svg-9sfx88w55s";
import { ActivitySelectorModal } from "./activity-selector-modal";



function Plus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="plus">
          <path d="M12 5V19M5 12H19" id="Icon" stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="search">
          <path d={svgPaths.p272bfa00} id="Icon" stroke="var(--muted-foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Check() {
  return (
    <div className="w-5 h-5">
      <svg className="w-full h-full" fill="none" viewBox="0 0 20 20">
        <path d="M16.25 6.25L8.125 14.375L3.75 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" className="text-primary" />
      </svg>
    </div>
  );
}

function Trash() {
  return (
    <div className="w-5 h-5">
      <svg className="w-full h-full" fill="none" viewBox="0 0 20 20">
        <path d="M8.33333 5V4.16667C8.33333 3.24619 9.07952 2.5 10 2.5C10.9205 2.5 11.6667 3.24619 11.6667 5V5M5 5H15M13.3333 5V13.3333C13.3333 14.2538 12.5871 15 11.6667 15H8.33333C7.41286 15 6.66667 14.2538 6.66667 13.3333V5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" className="text-muted-foreground" />
      </svg>
    </div>
  );
}



interface BusinessActivitySelectorProps {
  onComplete: (activities: string[]) => void;
  isCompleted?: boolean;
  completedActivities?: string[];
}

export function BusinessActivitySelector({ onComplete, isCompleted = false, completedActivities = [] }: BusinessActivitySelectorProps) {
  const [selectedActivities, setSelectedActivities] = useState<string[]>(isCompleted ? completedActivities : []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSlot, setActiveSlot] = useState<number | null>(null);

  const handleActivitySelect = (activity: string) => {
    // Add activity to the next available slot
    if (selectedActivities.length < 3 && !selectedActivities.includes(activity)) {
      setSelectedActivities(prev => [...prev, activity]);
    }
  };

  const handleSlotClick = (slotIndex: number) => {
    if (isCompleted) return; // Don't allow changes if completed
    
    if (selectedActivities[slotIndex]) {
      // If slot has activity, remove it
      setSelectedActivities(prev => prev.filter((_, index) => index !== slotIndex));
    } else {
      // If slot is empty, open modal to select activity
      setActiveSlot(slotIndex);
      setIsModalOpen(true);
    }
  };

  const handleComplete = () => {
    if (selectedActivities.length > 0) {
      onComplete(selectedActivities);
    }
  };

  const getSlotContent = (index: number) => {
    if (selectedActivities[index]) {
      return selectedActivities[index];
    }
    return `${index + 1}. Select`;
  };

  const getSlotIcon = (index: number) => {
    if (selectedActivities[index]) {
      return <Trash />;
    }
    return <Plus />;
  };

  const allSlotsSelected = selectedActivities.length === 3;

  return (
    <div className="flex justify-start w-full pr-4">
      <div className="flex-1">
        <div className="flex flex-col gap-3">
          {/* Message */}
          <div className="bg-muted rounded-2xl px-4 py-3">
            <div className="flex flex-col gap-4">
              <p className="!text-[16px] text-foreground leading-relaxed">
                Perfect, thank you 🙌 You're doing great.
              </p>
              <p className="!text-[16px] !font-bold text-foreground">
                Step 2 — Company activity & name
              </p>
              <p className="!text-[16px] text-foreground">
                Confirm up to 3 business activities
              </p>
            </div>
          </div>
          
          {/* Activity Selection Buttons */}
          <div className="flex flex-col gap-3">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => handleSlotClick(index)}
                disabled={isCompleted}
                className={`bg-background border border-border rounded-[20px] px-4 py-4 flex items-center justify-between transition-colors ${
                  isCompleted ? 'cursor-default' : 'hover:bg-muted/50'
                }`}
              >
                <span className={`!text-[16px] ${selectedActivities[index] ? 'text-foreground' : '!font-semibold text-foreground'}`}>
                  {getSlotContent(index)}
                </span>
                {isCompleted && selectedActivities[index] ? <Check /> : getSlotIcon(index)}
              </button>
            ))}
          </div>

          {/* Confirm Button - appears when at least one activity is selected */}
          {selectedActivities.length > 0 && (
            <button
              onClick={isCompleted ? undefined : handleComplete}
              disabled={isCompleted}
              className={`mt-2 rounded-lg px-4 py-3 transition-colors flex items-center justify-center w-full ${
                isCompleted 
                  ? 'bg-primary/20 cursor-default' 
                  : 'bg-primary hover:bg-primary/90 active:bg-primary/80'
              }`}
            >
              <span className={`!text-[16px] ${isCompleted ? 'text-primary/60' : 'text-primary-foreground'}`}>
                {isCompleted ? '✓ Confirmed' : 'Confirm & select name'}
              </span>
            </button>
          )}
        </div>
      </div>

      <ActivitySelectorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handleActivitySelect}
      />
    </div>
  );
}