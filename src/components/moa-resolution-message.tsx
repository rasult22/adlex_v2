import React from 'react';
import ChatMassageIncome from "../imports/ChatMassageIncome";

interface MOAResolutionMessageProps {
  onSign: () => void;
}

export function MOAResolutionMessage({ onSign }: MOAResolutionMessageProps) {
  const content = `🎉 **Congratulations! Your KYC verification is complete.** **Step 6 — MOA & Resolution Signing** Now it's time to finalize your company documents. You'll need to digitally sign two important legal documents: **📋 Memorandum of Association (MOA)** This document outlines your company's constitution, including: • Company objectives and permitted activities • Share capital structure and shareholding details • Directors' powers and responsibilities • Company regulations and governance structure **📋 Board Resolution** This document officially establishes: • Appointment of directors and their authorities • Banking arrangements and signatory rights • Registered office address confirmation • Initial operational decisions Both documents have been prepared based on the information you provided during registration. Please review them carefully before signing. **🔒 Digital Signature Process:** • Documents are legally binding once signed • Your signature will be verified using blockchain technology • All documents will be automatically filed with IFZA ��� You'll receive certified copies immediately after signing Click "Sign Documents" to proceed with the digital signing process.`;

  return (
    <div className="flex justify-start w-full pr-4">
      <div className="flex-1">
        <div className="flex flex-col gap-4">
          <ChatMassageIncome content={content} />
          
          <div className="flex justify-start">
            <button 
              onClick={onSign}
              className="bg-primary rounded-lg px-6 py-3 transition-colors hover:bg-primary/90 active:bg-primary/80"
            >
              <span className="text-button text-primary-foreground">Sign Documents</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}