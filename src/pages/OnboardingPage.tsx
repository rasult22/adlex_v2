import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Onboarding UI Components
function OnboardingSkipButton({ onSkip }: { onSkip?: () => void }) {
  return (
    <button onClick={onSkip} className="flex gap-2 items-center justify-center">
      <span className="text-button text-muted-foreground">Skip</span>
    </button>
  );
}

function OnboardingBackButton({ onBack }: { onBack: () => void }) {
  return (
    <button onClick={onBack} className="flex gap-2 items-center justify-center">
      <div className="w-5 h-5">
        <svg className="w-full h-full" fill="none" viewBox="0 0 20 20">
          <path
            d="M12.5 15L7.5 10L12.5 5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.67"
            className="text-muted-foreground"
          />
        </svg>
      </div>
      <span className="text-button text-muted-foreground">Back</span>
    </button>
  );
}

function OnboardingProgressBar({ currentStep }: { currentStep: number }) {
  const getStepColor = (step: number) => {
    if (step < currentStep) return 'bg-primary';
    if (step === currentStep) return 'bg-accent/70';
    return 'bg-muted';
  };

  return (
    <div className="flex gap-2 items-start w-full">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className={`flex-1 h-2 rounded-xl ${getStepColor(step)}`} />
      ))}
    </div>
  );
}

function OnboardingNextButton({
  onNext,
  isLast,
}: {
  onNext: () => void;
  isLast?: boolean;
}) {
  return (
    <button onClick={onNext} className="w-full bg-primary rounded-lg border border-primary">
      <div className="flex items-center justify-center overflow-hidden w-full">
        <div className="flex items-center justify-center px-5 py-3 w-full">
          <span className="text-button text-primary-foreground">
            {isLast ? 'Get started' : 'Next'}
          </span>
        </div>
      </div>
    </button>
  );
}

// Onboarding Screens
function OnboardingScreen1({ onNext, onSkip }: { onNext: () => void; onSkip: () => void }) {
  return (
    <div className="bg-background flex flex-col gap-2.5 items-start justify-end w-full h-screen">
      <div className="flex-1 flex flex-col gap-6 items-end px-4 py-4 w-full">
        <OnboardingSkipButton onSkip={onSkip} />
        <OnboardingProgressBar currentStep={1} />
      </div>
      <div className="flex flex-col gap-8 items-center px-4 pb-8 w-full h-[274px]">
        <div className="flex-1 flex flex-col gap-8 items-center w-full">
          <div className="flex-1 flex flex-col gap-4 items-center text-center w-full">
            <h2 className="w-full text-left !text-[32px]">Remote Application</h2>
            <p className="text-muted-foreground w-full text-left !text-[16px]">
              Submit your application fully remotely. No travel, no queues, just a simple online
              process
            </p>
          </div>
          <OnboardingNextButton onNext={onNext} />
        </div>
      </div>
    </div>
  );
}

function OnboardingScreen2({
  onNext,
  onBack,
  onSkip,
}: {
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
}) {
  return (
    <div className="bg-background flex flex-col gap-2.5 items-start justify-end w-full h-screen">
      <div className="flex-1 flex flex-col gap-6 items-end px-4 py-4 w-full">
        <div className="flex items-center justify-between w-full">
          <OnboardingBackButton onBack={onBack} />
          <OnboardingSkipButton onSkip={onSkip} />
        </div>
        <OnboardingProgressBar currentStep={2} />
      </div>
      <div className="flex flex-col gap-8 items-center px-4 pb-8 w-full h-[274px]">
        <div className="flex-1 flex flex-col gap-8 items-center w-full">
          <div className="flex-1 flex flex-col gap-4 items-center text-center w-full">
            <h2 className="w-full !text-[32px] text-left">Data Security</h2>
            <p className="text-muted-foreground w-full !text-[16px] text-left">
              All documents are encrypted and shared only with IFZA, our official partner. We
              follow international ISO standards for data security
            </p>
          </div>
          <OnboardingNextButton onNext={onNext} />
        </div>
      </div>
    </div>
  );
}

function OnboardingScreen3({
  onNext,
  onBack,
  onSkip,
}: {
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
}) {
  return (
    <div className="bg-background flex flex-col gap-2.5 items-start justify-end w-full h-screen">
      <div className="flex-1 flex flex-col gap-6 items-end px-4 py-4 w-full">
        <div className="flex items-center justify-between w-full">
          <OnboardingBackButton onBack={onBack} />
          <OnboardingSkipButton onSkip={onSkip} />
        </div>
        <OnboardingProgressBar currentStep={3} />
      </div>
      <div className="flex flex-col gap-8 items-center px-4 pb-8 w-full h-[274px]">
        <div className="flex-1 flex flex-col gap-8 items-center w-full">
          <div className="flex-1 flex flex-col gap-4 items-center text-center w-full">
            <h2 className="w-full text-left !text-[32px]">Modern Technology</h2>
            <p className="text-muted-foreground w-full text-left !text-[16px]">
              Automated checks, instant status updates, and a clear progress tracker at every step
            </p>
          </div>
          <OnboardingNextButton onNext={onNext} />
        </div>
      </div>
    </div>
  );
}

function OnboardingScreen4({
  onStartWithRegistration,
  onBack,
  onSkip,
}: {
  onStartWithRegistration: () => void;
  onBack: () => void;
  onSkip: () => void;
}) {
  return (
    <div className="bg-background flex flex-col gap-2.5 items-start justify-end w-full h-screen">
      <div className="flex-1 flex flex-col gap-6 items-end px-4 py-4 w-full">
        <div className="flex items-center justify-between w-full">
          <OnboardingBackButton onBack={onBack} />
          <OnboardingSkipButton onSkip={onSkip} />
        </div>
        <OnboardingProgressBar currentStep={4} />
      </div>
      <div className="flex flex-col gap-8 items-center px-4 pb-8 w-full h-[274px]">
        <div className="flex-1 flex flex-col gap-8 items-center w-full">
          <div className="flex-1 flex flex-col gap-4 items-center text-center w-full">
            <h2 className="w-full !text-[32px] text-left">AI-Powered Support</h2>
            <p className="text-muted-foreground w-full !text-[16px] text-left">
              Get instant answers and guidance from our AI assistant throughout your entire
              business registration journey
            </p>
          </div>
          <button onClick={onStartWithRegistration} className="w-full bg-primary rounded-lg">
            <div className="flex items-center justify-center overflow-hidden w-full">
              <div className="flex items-center justify-center px-5 py-3 w-full">
                <span className="text-button text-primary-foreground">Start with registration</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

// Main Onboarding Page Component
export default function OnboardingPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Last step completed, go to registration
      navigate('/registration');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    navigate('/registration');
  };

  const handleStartWithRegistration = () => {
    navigate('/registration');
  };

  switch (currentStep) {
    case 1:
      return <OnboardingScreen1 onNext={handleNext} onSkip={handleSkip} />;
    case 2:
      return <OnboardingScreen2 onNext={handleNext} onBack={handleBack} onSkip={handleSkip} />;
    case 3:
      return <OnboardingScreen3 onNext={handleNext} onBack={handleBack} onSkip={handleSkip} />;
    case 4:
      return (
        <OnboardingScreen4
          onStartWithRegistration={handleStartWithRegistration}
          onBack={handleBack}
          onSkip={handleSkip}
        />
      );
    default:
      return <OnboardingScreen1 onNext={handleNext} onSkip={handleSkip} />;
  }
}
