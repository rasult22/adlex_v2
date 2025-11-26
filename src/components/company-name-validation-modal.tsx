import React, { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-24rkcplway";

// IFZA validation rules
const IFZA_RULES = {
  // Forbidden words that are completely banned
  forbidden: [
    'bank', 'insurance', 'finance', 'university', 'institute', 'government', 'police', 'dubai police',
    'un', 'united nations', 'red cross', 'unesco', 'world health', 'international monetary'
  ],
  
  // Activity-only names that need distinctive words
  activities: [
    'solar energy', 'energy', 'trading', 'consulting', 'services', 'development', 'management',
    'technology', 'solutions', 'systems', 'digital', 'marketing', 'investment'
  ]
};

// Company name validation function
function validateCompanyName(name: string): { isValid: boolean; error?: string; suggestion?: string } {
  const cleanName = name.trim().toLowerCase();
  
  // Check if name is empty
  if (!cleanName) {
    return {
      isValid: false,
      error: "Company name cannot be empty."
    };
  }

  // Check for special characters and emojis
  const specialCharRegex = /[#@$!%^&*()+=\[\]{}|\\:";'<>?,./`~]/;
  const emojiRegex = /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]/gu;
  
  if (specialCharRegex.test(cleanName) || emojiRegex.test(cleanName)) {
    return {
      isValid: false,
      error: "❌ The trade name contains forbidden symbols or emojis.",
      suggestion: "Please remove special characters (#, @, $, !, emojis, etc.) and use only letters, numbers, and spaces."
    };
  }

  // Check if name ends with FZCO or FZE
  if (!cleanName.endsWith('fzco') && !cleanName.endsWith('fze')) {
    return {
      isValid: false,
      error: "❌ The trade name must end with FZCO or FZE.",
      suggestion: "Please add FZCO (for companies) or FZE (for establishments) at the end. ✅ Example: Your Company Name FZCO"
    };
  }

  // Remove the legal suffix for content validation
  const nameWithoutSuffix = cleanName.replace(/\s*(fzco|fze)$/, '').trim();

  // Check for forbidden words
  for (const forbidden of IFZA_RULES.forbidden) {
    if (nameWithoutSuffix.includes(forbidden)) {
      return {
        isValid: false,
        error: `❌ The trade name "${name}" cannot be approved.`,
        suggestion: `The word "${forbidden}" requires special licensing and cannot be used without proper authorization from IFZA. Please choose a different name.`
      };
    }
  }

  // Check if it's only an activity name without distinctive elements
  const isActivityOnly = IFZA_RULES.activities.some(activity => {
    const activityWords = activity.split(' ');
    const nameWords = nameWithoutSuffix.split(' ');
    
    // Check if the name consists only of activity words
    return nameWords.length <= activityWords.length && 
           nameWords.every(word => activityWords.includes(word));
  });

  if (isActivityOnly) {
    return {
      isValid: false,
      error: `❌ The trade name "${name}" cannot be approved.`,
      suggestion: "Problem: The name only reflects the activity without a distinctive word. According to IFZA rules, activity names cannot stand alone as the full trade name. How to fix it: Please add a unique word before the activity. ✅ Example: Bright Solar Energy FZCO or Nova Energy Trading FZCO."
    };
  }

  // Check minimum length (should have at least one distinctive word)
  if (nameWithoutSuffix.length < 3) {
    return {
      isValid: false,
      error: "❌ The trade name is too short.",
      suggestion: "Please provide a more descriptive company name with at least one distinctive word."
    };
  }

  // Name is valid
  return { isValid: true };
}

interface CompanyNameValidationModalProps {
  isOpen: boolean;
  onClose: () => void;
  companyName: string;
  onNameChange: (name: string) => void;
  onValidationComplete: (isValid: boolean, validatedName: string) => void;
  nameIndex?: number;
}

function ProgressRing() {
  return (
    <div className="relative w-24 h-24">
      <div className="absolute inset-[4.8px]">
        <div className="absolute inset-[-5.556%]">
          <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 97">
            <g>
              <path 
                d={svgPaths.p3c1ffd00} 
                stroke="var(--color-muted)" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="9.6" 
              />
              <path 
                d={svgPaths.p36902180} 
                stroke="var(--color-primary)" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="9.6"
                className="animate-pulse" 
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function CompanyNameInput({ 
  value, 
  onChange, 
  disabled 
}: { 
  value: string; 
  onChange: (value: string) => void; 
  disabled: boolean;
}) {
  return (
    <div className="w-full">
      <div className="bg-input-background relative rounded-lg w-full border border-border shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
        <div className="flex items-center w-full">
          <div className="flex items-center px-3.5 py-2.5 w-full">
            <input
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              disabled={disabled}
              className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
              placeholder="Enter company name"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ValidationContent({ 
  companyName, 
  onNameChange, 
  isValidating, 
  onValidate,
  validationResult,
  onUseThisName 
}: {
  companyName: string;
  onNameChange: (name: string) => void;
  isValidating: boolean;
  onValidate: () => void;
  validationResult: { isValid: boolean; error?: string; suggestion?: string } | null;
  onUseThisName: () => void;
}) {
  return (
    <div className="flex flex-col justify-between h-full w-full">
      <div className="flex flex-col gap-3 items-start w-full">
        <div className="text-large font-semibold w-full">Type a name</div>
        <CompanyNameInput 
          value={companyName}
          onChange={onNameChange}
          disabled={isValidating}
        />
      </div>
      
      {isValidating && (
        <div className="flex flex-col items-center gap-4 py-8">
          <ProgressRing />
          <p className="text-center w-full">Checking</p>
        </div>
      )}
      
      {/* Validation Result */}
      {validationResult && !isValidating && (
        <div className="w-full py-4">
          {validationResult.isValid ? (
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <div className="w-4 h-4 text-primary">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 16 16">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <p className="!text-base !font-semibold text-foreground mb-2">
                  🎉 Great choice! The trade name "{companyName}" fully complies with IFZA rules.
                </p>
                <p className="!text-base text-foreground mb-2">
                  To secure your license, you'll need to submit up to 3 trade name options (in case the first one is not available).
                </p>
                <p className="!text-base text-foreground">
                  👉 You can use this name or try a different one.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-destructive/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <div className="w-4 h-4 text-red-500">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 16 16">
                    <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <p className="!text-base !font-semibold text-foreground mb-2">
                  {validationResult.error}
                </p>
                {validationResult.suggestion && (
                  <>
                    <p className="!text-base text-foreground mb-2">
                      {validationResult.suggestion}
                    </p>
                    <p className="!text-base text-foreground">
                      👉 Try entering another version, and I'll check it again for you.
                    </p>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      )}
      
      <button 
        onClick={validationResult?.isValid ? onUseThisName : onValidate}
        disabled={isValidating || !companyName.trim()}
        className="w-full bg-primary rounded-lg border border-primary disabled:opacity-50 disabled:cursor-not-allowed mt-auto"
      >
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center justify-center px-4.5 py-2.5 w-full">
            <span className="text-button text-primary-foreground">
              {validationResult?.isValid ? 'Use this name' : isValidating ? 'Checking...' : 'Check'}
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}

export function CompanyNameValidationModal({
  isOpen,
  onClose,
  companyName,
  onNameChange,
  onValidationComplete,
  nameIndex = 1
}: CompanyNameValidationModalProps) {
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState<{ isValid: boolean; error?: string; suggestion?: string } | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setIsValidating(false);
      setValidationResult(null);
    }
  }, [isOpen]);

  const handleValidate = async () => {
    if (!companyName.trim()) return;

    setIsValidating(true);
    setValidationResult(null);

    // Simulate validation process
    setTimeout(() => {
      const result = validateCompanyName(companyName);
      setValidationResult(result);
      setIsValidating(false);
    }, 2000);
  };

  const handleUseThisName = () => {
    if (validationResult?.isValid) {
      onValidationComplete(true, companyName);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && !isValidating) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-end"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.48)' }}
      onClick={handleOverlayClick}
    >
      <div className="w-full h-full flex flex-col pt-24">
        <div className="flex-1 bg-background rounded-t-[20px] w-full">
          <div className="flex flex-col items-center h-full">
            <div className="flex flex-col gap-5 items-center px-4 py-6 w-full h-full">
              {/* Handle bar */}
              <div className="bg-muted h-[5px] rounded-2xl w-12" />
              
              {/* Breadcrumb */}
              <p className="text-caption text-muted-foreground w-full">
                {nameIndex === 1 ? 'First name' : nameIndex === 2 ? 'Second name' : 'Third name'}
              </p>
              
              {/* Content */}
              <div className="flex-1 flex flex-col w-full">
                <ValidationContent
                  companyName={companyName}
                  onNameChange={onNameChange}
                  isValidating={isValidating}
                  onValidate={handleValidate}
                  validationResult={validationResult}
                  onUseThisName={handleUseThisName}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}