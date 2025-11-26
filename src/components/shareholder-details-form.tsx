import React, { useState } from 'react';
import ChatMassageIncome from "../imports/ChatMassageIncome";
import { CitizenshipSelector } from "./citizenship-selector";

interface ShareholderData {
  name: string;
  shares: number;
  birthdate: string;
  citizenship: string;
}

interface ShareholderDetailsFormProps {
  shareholderIndex: number;
  totalShareholders: number;
  onComplete: (data: ShareholderData) => void;
  remainingShares?: number;
  totalShares?: number;
}

export function ShareholderDetailsForm({ 
  shareholderIndex, 
  totalShareholders, 
  onComplete, 
  remainingShares,
  totalShares 
}: ShareholderDetailsFormProps) {
  const [currentStep, setCurrentStep] = useState<'name' | 'shares' | 'birthdate' | 'citizenship'>('name');
  const [shareholderData, setShareholderData] = useState<ShareholderData>({
    name: '',
    shares: 0,
    birthdate: '',
    citizenship: ''
  });
  const [showCitizenshipSelector, setShowCitizenshipSelector] = useState(false);

  const handleNameSubmit = (name: string) => {
    setShareholderData(prev => ({ ...prev, name }));
    setCurrentStep('shares');
  };

  const handleSharesSubmit = (shares: number) => {
    setShareholderData(prev => ({ ...prev, shares }));
    setCurrentStep('birthdate');
  };

  const handleBirthdateSubmit = (birthdate: string) => {
    setShareholderData(prev => ({ ...prev, birthdate }));
    setCurrentStep('citizenship');
    setShowCitizenshipSelector(true);
  };

  const handleCitizenshipSelect = (citizenship: string) => {
    const finalData = { ...shareholderData, citizenship };
    setShareholderData(finalData);
    onComplete(finalData);
  };

  const getStepContent = () => {
    const shareholderNumber = shareholderIndex + 1;
    
    switch (currentStep) {
      case 'name':
        return (
          <ShareholderNameStep
            shareholderNumber={shareholderNumber}
            onSubmit={handleNameSubmit}
          />
        );
      case 'shares':
        return (
          <ShareholderSharesStep
            shareholderNumber={shareholderNumber}
            shareholderName={shareholderData.name}
            remainingShares={remainingShares}
            totalShares={totalShares}
            onSubmit={handleSharesSubmit}
          />
        );
      case 'birthdate':
        return (
          <ShareholderBirthdateStep
            shareholderName={shareholderData.name}
            onSubmit={handleBirthdateSubmit}
          />
        );
      case 'citizenship':
        if (showCitizenshipSelector) {
          return (
            <CitizenshipSelector
              shareholderName={shareholderData.name}
              onSelect={handleCitizenshipSelect}
            />
          );
        }
        return null;
      default:
        return null;
    }
  };

  return getStepContent();
}

function ShareholderNameStep({ shareholderNumber, onSubmit }: { shareholderNumber: number, onSubmit: (name: string) => void }) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <div className="flex justify-start w-full pr-4">
      <div className="flex-1">
        <div className="flex flex-col gap-4">
          <ChatMassageIncome 
            content={`**Step 2 — Shareholder ${shareholderNumber} Details** Let's collect all the information for shareholder ${shareholderNumber}. **Full name of shareholder ${shareholderNumber}:**`} 
          />
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-input-background border border-border rounded-lg px-3.5 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              placeholder="Enter full name"
              autoFocus
            />
            
            <button 
              type="submit"
              disabled={!name.trim()}
              className={`w-full rounded-lg transition-colors ${
                name.trim() 
                  ? 'bg-primary hover:bg-primary/90 active:bg-primary/80' 
                  : 'bg-muted cursor-not-allowed'
              }`}
            >
              <div className="flex items-center justify-center w-full">
                <div className="flex items-center justify-center px-5 py-3 w-full">
                  <span className={`text-button ${name.trim() ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
                    Continue
                  </span>
                </div>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ShareholderSharesStep({ 
  shareholderNumber, 
  shareholderName, 
  remainingShares,
  totalShares,
  onSubmit 
}: { 
  shareholderNumber: number, 
  shareholderName: string, 
  remainingShares?: number,
  totalShares?: number,
  onSubmit: (shares: number) => void 
}) {
  const [shares, setShares] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sharesNumber = parseInt(shares);
    if (!isNaN(sharesNumber) && sharesNumber > 0) {
      onSubmit(sharesNumber);
    }
  };

  const getSharesInfo = () => {
    if (remainingShares !== undefined && totalShares !== undefined) {
      const usedShares = totalShares - remainingShares;
      const usedPercentage = ((usedShares / totalShares) * 100).toFixed(1);
      const remainingPercentage = ((remainingShares / totalShares) * 100).toFixed(1);
      
      return `**Share allocation progress:** • Used: ${usedShares} shares (${usedPercentage}%) • Remaining: ${remainingShares} shares (${remainingPercentage}%) **${shareholderName}'s share amount (number of shares):**`;
    }
    
    return `**${shareholderName}'s share amount (number of shares):**`;
  };

  const sharesNumber = parseInt(shares);
  const isValid = !isNaN(sharesNumber) && sharesNumber > 0;
  const isWithinLimit = remainingShares ? sharesNumber <= remainingShares : true;

  return (
    <div className="flex justify-start w-full pr-4">
      <div className="flex-1">
        <div className="flex flex-col gap-4">
          <ChatMassageIncome content={getSharesInfo()} />
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
            <input
              type="number"
              value={shares}
              onChange={(e) => setShares(e.target.value)}
              className="w-full bg-input-background border border-border rounded-lg px-3.5 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              placeholder="Enter number of shares"
              min="1"
              max={remainingShares}
              autoFocus
            />
            
            {!isWithinLimit && remainingShares && (
              <p className="text-destructive text-base">
                Cannot exceed remaining shares ({remainingShares})
              </p>
            )}
            
            <button 
              type="submit"
              disabled={!isValid || !isWithinLimit}
              className={`w-full rounded-lg transition-colors ${
                isValid && isWithinLimit
                  ? 'bg-primary hover:bg-primary/90 active:bg-primary/80' 
                  : 'bg-muted cursor-not-allowed'
              }`}
            >
              <div className="flex items-center justify-center w-full">
                <div className="flex items-center justify-center px-5 py-3 w-full">
                  <span className={`text-button ${isValid && isWithinLimit ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
                    Continue
                  </span>
                </div>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ShareholderBirthdateStep({ shareholderName, onSubmit }: { shareholderName: string, onSubmit: (birthdate: string) => void }) {
  const [birthdate, setBirthdate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (birthdate.trim()) {
      onSubmit(birthdate.trim());
    }
  };

  const isValidDate = (date: string) => {
    const regex = /^\d{2}\.\d{2}\.\d{4}$/;
    return regex.test(date);
  };

  const isValid = isValidDate(birthdate);

  return (
    <div className="flex justify-start w-full pr-4">
      <div className="flex-1">
        <div className="flex flex-col gap-4">
          <ChatMassageIncome 
            content={`**${shareholderName}'s birth date (DD.MM.YYYY):** Please enter the birth date in the format DD.MM.YYYY (for example: 15.03.1990)`} 
          />
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
            <input
              type="text"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              className="w-full bg-input-background border border-border rounded-lg px-3.5 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              placeholder="DD.MM.YYYY"
              autoFocus
            />
            
            <button 
              type="submit"
              disabled={!isValid}
              className={`w-full rounded-lg transition-colors ${
                isValid 
                  ? 'bg-primary hover:bg-primary/90 active:bg-primary/80' 
                  : 'bg-muted cursor-not-allowed'
              }`}
            >
              <div className="flex items-center justify-center w-full">
                <div className="flex items-center justify-center px-5 py-3 w-full">
                  <span className={`text-button ${isValid ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
                    Continue
                  </span>
                </div>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}