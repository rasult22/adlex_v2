import React, { useState } from 'react';
import ChatMassageIncome from "../imports/ChatMassageIncome";

interface DesiredCompanyNamesProps {
  onComplete: (names: string[]) => void;
  companyType: 'freezone' | 'mainland';
}

export function DesiredCompanyNames({ onComplete, companyType }: DesiredCompanyNamesProps) {
  const [names, setNames] = useState(['', '', '']);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNameChange = (index: number, value: string) => {
    const newNames = [...names];
    newNames[index] = value;
    setNames(newNames);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Enter' && names[index].trim()) {
      if (index < 2) {
        setCurrentIndex(index + 1);
        // Focus next input
        setTimeout(() => {
          const nextInput = document.getElementById(`company-name-${index + 1}`);
          nextInput?.focus();
        }, 0);
      } else {
        handleComplete();
      }
    }
  };

  const handleComplete = () => {
    const filledNames = names.filter(name => name.trim() !== '');
    if (filledNames.length > 0) {
      onComplete(filledNames);
    }
  };

  const filledNamesCount = names.filter(name => name.trim() !== '').length;
  const canComplete = filledNamesCount >= 1;

  return (
    <div className="flex justify-start w-full pr-4">
      <div className="flex-1">
        <div className="flex flex-col gap-4">
          <ChatMassageIncome 
            content="Suggest 3 possible company names (in English) 📑 IFZA has specific rules for company names. You can suggest a trade name, and I'll check if it complies with these rules. Provide company name based on the priority, 1st most preferable, 3rd least preferable" 
          />
          
          <div className="flex flex-col gap-3 w-full">
            {names.map((name, index) => (
              <div key={index} className="flex flex-col gap-1.5">
                <label className="text-label text-foreground">
                  Option {index + 1} {index === 0 ? '(Required)' : '(Optional)'}
                </label>
                <input
                  id={`company-name-${index}`}
                  type="text"
                  value={name}
                  onChange={(e) => handleNameChange(index, e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  className="w-full bg-input-background border border-border rounded-lg px-3.5 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                  placeholder={`Enter company name option ${index + 1}`}
                  autoFocus={index === 0}
                />
              </div>
            ))}
            
            <button 
              onClick={handleComplete}
              disabled={!canComplete}
              className={`w-full rounded-lg transition-colors ${
                canComplete 
                  ? 'bg-primary hover:bg-primary/90 active:bg-primary/80' 
                  : 'bg-muted cursor-not-allowed'
              }`}
            >
              <div className="flex items-center justify-center w-full">
                <div className="flex items-center justify-center px-5 py-3 w-full">
                  <span className={`text-button ${canComplete ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
                    Continue
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}