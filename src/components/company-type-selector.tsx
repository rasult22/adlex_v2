import React from 'react';
import ChatMassageIncome from "../imports/ChatMassageIncome";

interface CompanyTypeSelectorProps {
  onSelect: (type: 'freezone' | 'mainland') => void;
}

export function CompanyTypeSelector({ onSelect }: CompanyTypeSelectorProps) {
  const handleFreezoneClick = () => {
    onSelect('freezone');
  };

  const handleMainlandClick = () => {
    onSelect('mainland');
  };

  return (
    <div className="flex justify-start w-full pr-4">
      <div className="flex-1">
        <div className="flex flex-col gap-4">
          <ChatMassageIncome content="Let's start with the basics! First, I need to know what type of company you'd like to establish in the UAE. **Please select your preferred company type:**" />
          
          <div className="flex flex-col gap-3 items-center w-full">
            <button 
              onClick={handleFreezoneClick}
              className="w-full bg-accent/10 rounded-lg border border-accent/20 transition-colors hover:bg-accent/20 active:bg-accent/30"
            >
              <div className="flex items-center justify-center w-full">
                <div className="flex items-center justify-center px-5 py-3 w-full">
                  <span className="text-button text-primary text-center">Freezone Company</span>
                </div>
              </div>
            </button>
            
            <button 
              onClick={handleMainlandClick}
              className="w-full bg-accent/10 rounded-lg border border-accent/20 transition-colors hover:bg-accent/20 active:bg-accent/30"
            >
              <div className="flex items-center justify-center w-full">
                <div className="flex items-center justify-center px-5 py-3 w-full">
                  <span className="text-button text-primary text-center">Mainland Company</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}