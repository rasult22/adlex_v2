import React from 'react';
import svgPaths from "../imports/svg-jynqrw219";

function Shield() {
  return (
    <div className="relative shrink-0 w-3 h-3">
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g>
          <path d={svgPaths.p8610900} stroke="#12B76A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SecureBadge() {
  return (
    <div className="bg-[#ecfdf3] flex gap-1 items-center justify-center px-3 py-1 rounded-2xl">
      <Shield />
      <p className="text-caption text-[#027a48]">Secure mode</p>
    </div>
  );
}

interface PaymentMessageProps {
  onPayClick: () => void;
}

export function PaymentMessage({ onPayClick }: PaymentMessageProps) {
  return (
    <div className="flex justify-start w-full pr-4">
      <div className="flex-1">
        <div className="bg-muted rounded-2xl px-4 py-3">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-4">
              <p className="!text-[16px] text-foreground leading-relaxed">
                Nice! Documents received ✅
              </p>
              <p className="!text-[16px] !font-semibold text-foreground">
                Step 4 — Payment
              </p>
              <p className="!text-[16px] text-foreground">
                Now it's time to pay the government and service fees.
              </p>
              <p className="!text-[16px] !font-semibold text-foreground">
                Total cost for your application is $3,450 (government fees + service fee)
              </p>
              <p className="!text-[16px] text-foreground">
                💳 Payments are always made directly through IFZA's certified payment gateway
              </p>
            </div>
            
            <SecureBadge />
            
            <button 
              onClick={onPayClick}
              className="w-full bg-primary rounded-lg px-4.5 py-2.5 transition-colors hover:bg-primary/90 active:bg-primary/80 flex items-center justify-center"
            >
              <span className="!text-[16px] text-primary-foreground">Pay</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}