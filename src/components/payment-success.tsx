import React from 'react';

interface PaymentSuccessProps {
  onReturnToAdlex: () => void;
}

export function PaymentSuccess({ onReturnToAdlex }: PaymentSuccessProps) {
  return (
    <div className="bg-background flex flex-col items-center justify-center w-full h-screen px-4">
      <div className="flex flex-col gap-8 items-center text-center max-w-md w-full">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
          <div className="w-10 h-10 text-green-600">
            <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
              <path 
                d="M20 6L9 17L4 12" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-[32px] text-foreground">Payment Successful!</h2>
          <div className="flex flex-col gap-3">
            <p className="!text-[18px] text-foreground">
              Your payment of <span className="font-semibold">$3,450</span> has been processed successfully.
            </p>
            <p className="!text-[16px] text-muted-foreground">
              Thank you for choosing Adlex.ai for your UAE company registration. We'll notify you about the next steps via email.
            </p>
          </div>
        </div>

        {/* Payment Details Card */}
        <div className="w-full bg-muted rounded-lg p-4 border border-border">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-label text-muted-foreground">Transaction ID</span>
              <span className="text-label text-foreground font-mono">TXN-ADX-2024-001</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-label text-muted-foreground">Amount Paid</span>
              <span className="text-label text-foreground font-semibold">$3,450.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-label text-muted-foreground">Payment Method</span>
              <span className="text-label text-foreground">•••• •••• •••• 1234</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-label text-muted-foreground">Date</span>
              <span className="text-label text-foreground">{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="w-full bg-accent/10 rounded-lg p-4 border border-accent/20">
          <div className="flex flex-col gap-2">
            <h4 className="text-large font-semibold text-foreground">What's next?</h4>
            <ul className="text-metadata text-muted-foreground space-y-1">
              <li>• IFZA will process your application within 2-3 business days</li>
              <li>• You'll receive email updates on your application status</li>
              <li>• Company documents will be available for download once approved</li>
            </ul>
          </div>
        </div>

        {/* Return Button */}
        <button 
          onClick={onReturnToAdlex}
          className="w-full bg-primary rounded-lg px-6 py-3 transition-colors hover:bg-primary/90 active:bg-primary/80"
        >
          <span className="text-button text-primary-foreground">Return to Adlex</span>
        </button>

        {/* Support Link */}
        <p className="text-caption text-muted-foreground">
          Need help?{' '}
          <a href="mailto:support@adlex.ai" className="text-primary hover:underline">
            Contact our support team
          </a>
        </p>
      </div>
    </div>
  );
}