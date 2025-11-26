import React from 'react';
import svgPaths from "../imports/svg-7y53eq4mjc";

function Shield() {
  return (
    <div className="relative shrink-0 w-3 h-3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g>
          <path 
            d={svgPaths.p8610900} 
            stroke="#12B76A" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="1.5" 
          />
        </g>
      </svg>
    </div>
  );
}

function SecureBadge() {
  return (
    <div className="bg-green-50 border border-green-200 rounded-full px-3 py-1 flex items-center gap-1">
      <Shield />
      <span className="text-caption text-green-700">Secure mode</span>
    </div>
  );
}

export function PaymentSuccessMessage({ onLaunchKYC }: { onLaunchKYC: () => void }) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="space-y-4">
        <p className="text-base text-foreground">
          Great, Myrza🎉 Your payment is confirmed ✅
        </p>
        <p className="text-base text-foreground font-medium">
          Step 5 — KYC & E-Sign
        </p>
        <p className="text-base text-foreground">
          Next, you'll pass identity verification and sign documents online.
        </p>
        <p className="text-base text-foreground">
          🔐 Both steps are safe and handled via IFZA's certified platforms.
        </p>
      </div>
      
      <SecureBadge />
      
      <button 
        onClick={onLaunchKYC}
        className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
      >
        Launch KYC
      </button>
    </div>
  );
}