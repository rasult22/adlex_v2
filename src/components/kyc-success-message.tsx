import React, { useState } from 'react';

interface KYCSuccessMessageProps {
  onProceed?: () => void;
}

export function KYCSuccessMessage({ onProceed }: KYCSuccessMessageProps) {
  const [showMOAStep, setShowMOAStep] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSignClick = () => {
    setShowMOAStep(false);
    setShowSuccess(true);
    
    // После показа success сообщения через 5 секунд вызываем onProceed
    setTimeout(() => {
      onProceed?.();
    }, 5000);
  };

  if (showSuccess) {
    return (
      <div className="flex justify-start w-full pr-4">
        <div className="flex-1">
          <div className="rounded-2xl px-4 py-4">
            <div className="flex flex-col gap-2.5 items-start justify-center w-full">
              <div className="w-full">
                <p className="mb-4 text-base">🎉 Great news! Your MOA & Resolution has been successfully signed.</p>
                <p className="mb-4 text-base">You're now ready to proceed with the final step of your company incorporation.</p>
                <p className="font-semibold mb-4 text-base">Step 6 — License Issuance 📄</p>
                <p className="mb-4 text-base">
                  Your Trade License and Certificate of Incorporation will be issued by IFZA.
                  <br />
                  You'll get digital copies in your personal account and email – <span className="font-semibold">maxholding007@gmail.com</span>
                </p>
                <p className="text-base">🔔 We'll also notify you as soon as everything is ready.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showMOAStep) {
    return (
      <div className="flex justify-start w-full pr-4">
        <div className="flex-1">
          <div className="rounded-2xl px-4 py-4">
            <div className="flex flex-col gap-2.5 items-start justify-center w-full">
              <div className="w-full">
                <p className="mb-4 text-base">🎉 Great news! Your KYC verification has been successfully completed.</p>
                <p className="mb-4 text-base">You're now ready to proceed with the next step of your company incorporation.</p>
                <p className="font-semibold mb-4 text-base">Step 5.1 — MOA & Resolution E-sign 📝</p>
                <p className="mb-4 text-base">
                  Please review and electronically sign your Memorandum of Association and Company Resolution documents.
                  <br />
                  These are essential legal documents for your company formation.
                </p>
                <button 
                  onClick={handleSignClick}
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors text-base font-semibold"
                >
                  Sign
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}