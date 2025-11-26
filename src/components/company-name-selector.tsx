import React, { useState } from 'react';
import { CompanyNameValidationModal } from './company-name-validation-modal';

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

interface CompanyNameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApprove: (name: string) => void;
  nameIndex: number;
}

function CompanyNameModal({ isOpen, onClose, onApprove, nameIndex }: CompanyNameModalProps) {
  const [companyName, setCompanyName] = useState('');

  const handleValidationComplete = (isValid: boolean, validatedName: string) => {
    if (isValid) {
      onApprove(validatedName);
      handleClose();
    }
  };

  const handleClose = () => {
    setCompanyName('');
    onClose();
  };

  return (
    <CompanyNameValidationModal
      isOpen={isOpen}
      onClose={handleClose}
      companyName={companyName}
      onNameChange={setCompanyName}
      onValidationComplete={handleValidationComplete}
      nameIndex={nameIndex}
    />
  );
}

interface CompanyNameSelectorProps {
  onComplete: (names: string[]) => void;
}

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

function Trash() {
  return (
    <div className="w-5 h-5">
      <svg className="w-full h-full" fill="none" viewBox="0 0 20 20">
        <path d="M8.33333 5V4.16667C8.33333 3.24619 9.07952 2.5 10 2.5C10.9205 2.5 11.6667 3.24619 11.6667 5V5M5 5H15M13.3333 5V13.3333C13.3333 14.2538 12.5871 15 11.6667 15H8.33333C7.41286 15 6.66667 14.2538 6.66667 13.3333V5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" className="text-muted-foreground" />
      </svg>
    </div>
  );
}

export function CompanyNameSelector({ onComplete }: CompanyNameSelectorProps) {
  const [selectedNames, setSelectedNames] = useState<(string | null)[]>([null, null, null]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSlot, setActiveSlot] = useState<number>(0);

  const handleSlotClick = (index: number) => {
    setActiveSlot(index);
    setIsModalOpen(true);
  };

  const handleNameApprove = (name: string) => {
    const newNames = [...selectedNames];
    newNames[activeSlot] = name;
    setSelectedNames(newNames);
    setIsModalOpen(false);
  };

  const handleRemoveName = (index: number) => {
    const newNames = [...selectedNames];
    newNames[index] = null;
    setSelectedNames(newNames);
  };

  const handleConfirm = () => {
    const confirmedNames = selectedNames.filter((name): name is string => name !== null);
    if (confirmedNames.length > 0) {
      onComplete(confirmedNames);
    }
  };

  const allNamesSelected = selectedNames.every(name => name !== null);
  const hasAnyNames = selectedNames.some(name => name !== null);

  return (
    <div className="flex justify-start w-full pr-4">
      <div className="flex-1">
        <div className="flex flex-col gap-3">
          {/* Message */}
          <div className="bg-muted rounded-2xl px-4 py-3">
            <div className="flex flex-col gap-4">
              <div className="!font-normal leading-[0] not-italic relative shrink-0 text-[0px] text-foreground w-full">
                <p className="!font-bold leading-[24px] !text-[16px]">Suggest 3 possible company names (in English)</p>
              </div>
              <div className="!font-normal leading-[24px] not-italic relative shrink-0 !text-[16px] text-foreground w-full">
                <p className="mb-[16px]">
                  📑 IFZA has specific rules for company names.
                  <br />
                  You can suggest a trade name, and I'll check if it complies with these rules.
                </p>
                <p>Provide company name based on the priority, 1st most preferable, 3rd least preferable</p>
              </div>
            </div>
          </div>
          
          {/* Name Selection Buttons */}
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            {[0, 1, 2].map((index) => (
              <div key={index} className="relative w-full">
                <button
                  onClick={() => handleSlotClick(index)}
                  className="relative rounded-[20px] shrink-0 w-full hover:bg-muted/50 transition-colors"
                >
                  <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[20px]" />
                  <div className="flex flex-row items-center justify-center relative size-full">
                    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[16px] relative w-full">
                      <div className="basis-0 !font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 !text-[16px] text-foreground">
                        {selectedNames[index] ? (
                          <p className="leading-[24px] text-left">{selectedNames[index]}</p>
                        ) : (
                          <ol className="list-decimal" start={index + 1}>
                            <li className="ms-[24px]">
                              <span className="leading-[24px]">Type a name</span>
                            </li>
                          </ol>
                        )}
                      </div>
                      {!selectedNames[index] && <Plus />}
                    </div>
                  </div>
                </button>
                {selectedNames[index] && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveName(index);
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-muted/70 rounded-full transition-colors"
                  >
                    <Trash />
                  </button>
                )}
              </div>
            ))}
          </div>



          {/* Confirm Button */}
          {hasAnyNames && (
            <button
              onClick={handleConfirm}
              className="mt-2 bg-primary rounded-lg px-4 py-3 transition-colors hover:bg-primary/90 active:bg-primary/80 flex items-center justify-center w-full"
            >
              <span className="!text-[16px] text-primary-foreground">Confirm</span>
            </button>
          )}
        </div>
      </div>

      <CompanyNameModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onApprove={handleNameApprove}
        nameIndex={activeSlot + 1}
      />
    </div>
  );
}