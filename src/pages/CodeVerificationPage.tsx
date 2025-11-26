import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import codeVerificationSvgPaths from '../imports/svg-80k7bb1k4n';

function CodeBackButton({ onBack }: { onBack: () => void }) {
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

function CodeVerificationHeader({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex items-center justify-between w-full">
      <CodeBackButton onBack={onBack} />
      <div className="opacity-0">
        <span className="text-button text-muted-foreground">Skip</span>
      </div>
    </div>
  );
}

function CodeVerificationLogo() {
  return (
    <div className="flex gap-2.5 h-8 items-center justify-center">
      <div className="w-8 h-8">
        <svg className="w-full h-full" fill="none" viewBox="0 0 32 32">
          <path
            d={codeVerificationSvgPaths.p2a153b00}
            fill="currentColor"
            className="text-primary"
          />
        </svg>
      </div>
      <div className="text-h4 text-foreground text-center whitespace-nowrap">AdlexAI</div>
    </div>
  );
}

function CodeInput({
  value,
  onChange,
  onKeyDown,
  inputRef,
}: {
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}) {
  return (
    <div className="w-11 h-11 bg-background border border-border rounded-md shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
      <input
        ref={inputRef}
        type="text"
        inputMode="numeric"
        maxLength={1}
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/[^0-9]/g, ''))}
        onKeyDown={onKeyDown}
        className="w-full h-full text-center text-[32px] text-foreground bg-transparent border-none outline-none focus:ring-0"
        style={{ color: value ? 'var(--foreground)' : 'var(--muted-foreground)' }}
      />
    </div>
  );
}

function CodeInputField({ onComplete }: { onComplete: () => void }) {
  const [codes, setCodes] = useState(['', '', '', '']);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleCodeChange = (index: number, value: string) => {
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }

    // Check if all 4 codes are filled
    const allFilled = newCodes.every((code) => code !== '');
    if (allFilled) {
      // Small delay to show the last digit before triggering completion
      setTimeout(() => {
        onComplete();
      }, 100);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !codes[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  return (
    <div className="flex flex-col gap-1 items-start w-full">
      <label className="text-label text-foreground">Secure code</label>
      <div className="flex gap-1.5 items-start">
        {codes.map((code, index) => (
          <CodeInput
            key={index}
            value={code}
            onChange={(value) => handleCodeChange(index, value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            inputRef={inputRefs[index]}
          />
        ))}
      </div>
    </div>
  );
}

function CodeVerificationContent({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <h2 className="text-center w-full !text-[32px]">Secure code</h2>
      <CodeInputField onComplete={onComplete} />
      <button className="w-full bg-primary rounded-lg">
        <div className="flex items-center justify-center overflow-hidden w-full">
          <div className="flex items-center justify-center px-5 py-3 w-full">
            <span className="text-button text-primary-foreground">Continue</span>
          </div>
        </div>
      </button>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div className="w-8 h-8 border-2 border-muted border-t-primary rounded-full animate-spin" />
  );
}

export default function CodeVerificationPage() {
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [countdown, setCountdown] = useState(59);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleComplete = () => {
    setShowLoading(true);
    // Show loading for 2 seconds, then success
    setTimeout(() => {
      setShowLoading(false);
      setShowSuccess(true);
    }, 2000);
  };

  const handleStart = () => {
    navigate('/chat');
  };

  const handleBack = () => {
    navigate('/registration');
  };

  // Loading Screen
  if (showLoading) {
    return (
      <div className="bg-background flex flex-col items-center justify-center w-full h-screen px-4">
        <div className="flex flex-col gap-6 items-center text-center max-w-sm w-full">
          <LoadingSpinner />
          <div className="flex flex-col gap-2">
            <h2 className="!text-[32px]">Verifying...</h2>
            <p className="text-muted-foreground !text-[16px]">
              Please wait while we verify your code
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Success Screen
  if (showSuccess) {
    return (
      <div className="bg-background flex flex-col items-center justify-center w-full h-screen px-4">
        <div className="flex flex-col gap-8 items-center text-center max-w-sm w-full">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 text-primary">
              <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="!text-[32px]">Code Verified!</h2>
            <p className="text-muted-foreground !text-[16px]">
              Your email has been successfully verified
            </p>
          </div>
          <button onClick={handleStart} className="w-full bg-primary rounded-lg">
            <div className="flex items-center justify-center overflow-hidden w-full">
              <div className="flex items-center justify-center px-5 py-3 w-full">
                <span className="text-button text-primary-foreground">Start</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    );
  }

  // Code Input Screen
  return (
    <div className="bg-background flex flex-col items-center w-full h-screen">
      <div className="flex flex-col gap-8 items-center px-4 py-8 w-full max-w-sm">
        <CodeVerificationHeader onBack={handleBack} />
        <CodeVerificationLogo />
        <CodeVerificationContent onComplete={handleComplete} />
        <p className="!text-[16px] text-foreground text-center">
          Resend after {formatTime(countdown)}
        </p>
      </div>
    </div>
  );
}
