import React, { useState } from 'react';
import svgPaths from "../imports/svg-1apofgx5xc";

// Business activities data structure - 3 levels: Category → Subcategory → Activity
const BUSINESS_ACTIVITIES = {
  "IT & Digital": {
    "Consultancy & Services": [
      "Hospitality Services",
      "Online Gaming Services", 
      "Computer Systems Consultancies",
      "Cyber Security Consultancy",
      "Cyber Risk Management Services"
    ],
    "Education & Training": [
      "Education & Training Computer Software",
      "Sport Training",
      "Fine Arts Training",
      "Child Skills Development Training",
      "Computer Training"
    ],
    "Manufacturing & Production": [
      "Gaming Production Service Providers"
    ],
    "Media & Creative": [
      "Gaming Streaming Social Media Platform"
    ],
    "Trading": [
      "Used Auto Spare Parts & Requisites Trading",
      "Computers & Peripheral Equipment Trading",
      "Encryption Software Trading",
      "Security Systems & Equipment Trading",
      "Computer Systems & Communication Equipment Software Trading"
    ]
  },
  "Healthcare & Pharma": {
    "Consultancy & Services": [
      "Health Planning Consultancies",
      "Pharmaceutical Consultancy",
      "Healthcare Management Services",
      "Clinical Research Organization",
      "Hospital Consultants"
    ],
    "Trading": [
      "Medical Gas Trading",
      "Para-Pharmaceutical Products Trading"
    ],
    "Other": [
      "Pharmaceutical Researches & Studies",
      "Pharmaceutical Laboratories"
    ]
  },
  "Construction & Engineering": {
    "Consultancy & Services": [
      "Renewable Energy Engineering Consultancy Abroad"
    ],
    "Trading": [
      "Building & Construction Materials Wholesale Trading"
    ],
    "Other": [
      "Turnkey Projects Contracting",
      "Artistic Talent Contracting"
    ]
  },
  "Food & Hospitality": {
    "Consultancy & Services": [
      "Hotel Consultants",
      "Food Consultant", 
      "Hotel Management Consultancy"
    ],
    "Trading": [
      "Food Supplements Trading",
      "Catering Equipment Trading"
    ]
  },
  "Finance & Insurance": {
    "Consultancy & Services": [
      "Investment in Commercial Enterprises & Management"
    ],
    "Finance & Insurance": [
      "Investment in Sport Enterprises & Development"
    ],
    "Trading": [
      "Aviation Trading Brokerage",
      "Monetary & Banking Services Brokerage"
    ]
  }
};

function Avatar() {
  return (
    <div className="bg-accent/10 relative rounded-full shrink-0 size-[24px]" data-name="Avatar">
      <div className="absolute font-medium leading-[0] left-1/2 not-italic text-primary text-[12px] text-center translate-x-[-50%] w-[24px]" style={{ top: "calc(50% - 8px)" }}>
        <p className="leading-[18px]">Ad</p>
      </div>
    </div>
  );
}

function Frame150() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Avatar />
      <div className="font-medium leading-[0] not-italic relative shrink-0 text-muted-foreground text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Adlex AI</p>
      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-right">
          <path d="M9 18L15 12L9 6" id="Icon" stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-left">
          <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ChevronRightSmall() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-right">
          <path d="M7.5 15L12.5 10L7.5 5" id="Icon" stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

interface ActivitySelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (activity: string) => void;
}

export function ActivitySelectorModal({ isOpen, onClose, onSelect }: ActivitySelectorModalProps) {
  const [currentView, setCurrentView] = useState<'categories' | 'subcategories' | 'activities'>('categories');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
  const [breadcrumb, setBreadcrumb] = useState<string[]>([]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentView('subcategories');
    setBreadcrumb([category]);
  };

  const handleSubcategorySelect = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
    setCurrentView('activities');
    setBreadcrumb([selectedCategory, subcategory]);
  };

  const handleActivitySelect = (activity: string) => {
    onSelect(activity);
    handleClose();
  };

  const handleBack = () => {
    if (currentView === 'activities') {
      setCurrentView('subcategories');
      setBreadcrumb([selectedCategory]);
    } else if (currentView === 'subcategories') {
      setCurrentView('categories');
      setBreadcrumb([]);
    }
  };

  const handleClose = () => {
    setCurrentView('categories');
    setSelectedCategory('');
    setSelectedSubcategory('');
    setBreadcrumb([]);
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  // Categories View
  if (currentView === 'categories') {
    return (
      <div 
        className="fixed inset-0 bg-black/50 flex items-end justify-center z-50"
        onClick={handleOverlayClick}
      >
        <div className="bg-background w-full max-w-md rounded-t-[20px] h-[704px] flex flex-col">
          <div className="flex flex-col items-center overflow-clip relative size-full">
            <div className="box-border content-stretch flex flex-col gap-[20px] h-[704px] items-center pb-[24px] pt-[12px] px-[16px] relative w-full">
              <div className="bg-muted h-[5px] rounded-[16px] shrink-0 w-[48px]" />
              <Frame150 />
              <div className="!font-semibold leading-[0] min-w-full not-italic relative shrink-0 !text-[20px] text-foreground" style={{ width: "min-content" }}>
                <p className="leading-[30px]">Select Category</p>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                {Object.keys(BUSINESS_ACTIVITIES).map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className="relative rounded-[20px] shrink-0 w-full hover:bg-muted/50 transition-colors"
                  >
                    <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[20px]" />
                    <div className="flex flex-row items-center justify-center relative size-full">
                      <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[16px] relative w-full">
                        <div className="basis-0 !font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 !text-[16px] text-foreground">
                          <p className="leading-[24px]">{category}</p>
                        </div>
                        <ChevronRight />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Subcategories View
  if (currentView === 'subcategories') {
    const subcategories = Object.keys(BUSINESS_ACTIVITIES[selectedCategory as keyof typeof BUSINESS_ACTIVITIES] || {});
    
    return (
      <div 
        className="fixed inset-0 bg-black/50 flex items-end justify-center z-50"
        onClick={handleOverlayClick}
      >
        <div className="bg-background w-full max-w-md rounded-t-[20px] h-[704px] flex flex-col">
          <div className="flex flex-col items-center overflow-clip relative size-full">
            <div className="box-border content-stretch flex flex-col gap-[20px] h-[704px] items-center pb-[24px] pt-[12px] px-[16px] relative w-full">
              <div className="bg-muted h-[5px] rounded-[16px] shrink-0 w-[48px]" />
              
              {/* Back Button */}
              <button onClick={handleBack} className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                <ArrowLeft />
                <div className="!font-normal leading-[0] not-italic relative shrink-0 text-foreground !text-[16px] text-nowrap">
                  <p className="leading-[24px] whitespace-pre">Back</p>
                </div>
              </button>
              
              {/* Breadcrumb */}
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                <div className="!font-normal leading-[0] not-italic relative shrink-0 text-muted-foreground !text-[14px] text-nowrap">
                  <p className="leading-[20px] whitespace-pre">Categories</p>
                </div>
                <ChevronRightSmall />
                <div className="!font-normal leading-[0] not-italic relative shrink-0 !text-[14px] text-foreground text-nowrap">
                  <p className="leading-[20px] whitespace-pre">{selectedCategory}</p>
                </div>
              </div>
              
              <div className="!font-semibold leading-[0] min-w-full not-italic relative shrink-0 !text-[20px] text-foreground" style={{ width: "min-content" }}>
                <p className="leading-[30px]">Select Subcategory</p>
              </div>
              
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                {subcategories.map((subcategory) => (
                  <button
                    key={subcategory}
                    onClick={() => handleSubcategorySelect(subcategory)}
                    className="relative rounded-[20px] shrink-0 w-full hover:bg-muted/50 transition-colors"
                  >
                    <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[20px]" />
                    <div className="flex flex-row items-center justify-center relative size-full">
                      <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[16px] relative w-full">
                        <div className="basis-0 !font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 !text-[16px] text-foreground">
                          <p className="leading-[24px]">{subcategory}</p>
                        </div>
                        <ChevronRight />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Activities View
  if (currentView === 'activities') {
    const activities = BUSINESS_ACTIVITIES[selectedCategory as keyof typeof BUSINESS_ACTIVITIES]?.[selectedSubcategory as keyof typeof BUSINESS_ACTIVITIES[keyof typeof BUSINESS_ACTIVITIES]] || [];
    
    return (
      <div 
        className="fixed inset-0 bg-black/50 flex items-end justify-center z-50"
        onClick={handleOverlayClick}
      >
        <div className="bg-background w-full max-w-md rounded-t-[20px] h-[704px] flex flex-col">
          <div className="flex flex-col items-center overflow-clip relative size-full">
            <div className="box-border content-stretch flex flex-col gap-[20px] h-[704px] items-center pb-[24px] pt-[12px] px-[16px] relative w-full">
              <div className="bg-muted h-[5px] rounded-[16px] shrink-0 w-[48px]" />
              
              {/* Back Button */}
              <button onClick={handleBack} className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                <ArrowLeft />
                <div className="!font-normal leading-[0] not-italic relative shrink-0 text-foreground !text-[16px] text-nowrap">
                  <p className="leading-[24px] whitespace-pre">Back</p>
                </div>
              </button>
              
              {/* Breadcrumb */}
              <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
                <div className="!font-normal leading-[0] not-italic relative shrink-0 text-muted-foreground !text-[14px] text-nowrap">
                  <p className="leading-[20px] whitespace-pre">Categories</p>
                </div>
                <ChevronRightSmall />
                <div className="!font-normal leading-[0] not-italic relative shrink-0 text-muted-foreground !text-[14px] text-nowrap">
                  <p className="leading-[20px] whitespace-pre">{selectedCategory}</p>
                </div>
                <ChevronRightSmall />
                <div className="!font-normal leading-[0] not-italic relative shrink-0 !text-[14px] text-foreground text-nowrap">
                  <p className="leading-[20px] whitespace-pre">{selectedSubcategory}</p>
                </div>
              </div>
              
              <div className="!font-semibold leading-[0] min-w-full not-italic relative shrink-0 !text-[20px] text-foreground" style={{ width: "min-content" }}>
                <p className="leading-[30px]">Select Activity</p>
              </div>
              
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                {activities.map((activity) => (
                  <button
                    key={activity}
                    onClick={() => handleActivitySelect(activity)}
                    className="cursor-pointer relative rounded-[20px] shrink-0 w-full hover:bg-muted/50 transition-colors"
                  >
                    <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[20px]" />
                    <div className="flex flex-row items-center justify-center relative size-full">
                      <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[16px] relative w-full">
                        <div className="basis-0 !font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 !text-[16px] text-foreground">
                          <p className="leading-[24px]">{activity}</p>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}