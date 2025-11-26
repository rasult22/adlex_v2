import React, { useState } from 'react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentSuccess: () => void;
}

function PaymentForm({ onSubmit }: { onSubmit: () => void }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\D/g, '');
    if (v.length >= 2) {
      return v.slice(0, 2) + '/' + v.slice(2, 4);
    }
    return v;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cardNumber || !expiryDate || !cvc) return;
    
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onSubmit();
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-label text-foreground mb-2">
          Card number
        </label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
          placeholder="1234 1234 1234 1234"
          maxLength={19}
          className="w-full px-3.5 py-2.5 border border-border rounded-lg bg-input-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          required
        />
      </div>
      
      <div className="flex space-x-3">
        <div className="flex-1">
          <label className="block text-label text-foreground mb-2">
            Expiry date
          </label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
            placeholder="MM/YY"
            maxLength={5}
            className="w-full px-3.5 py-2.5 border border-border rounded-lg bg-input-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            required
          />
        </div>
        <div className="flex-1">
          <label className="block text-label text-foreground mb-2">
            CVC
          </label>
          <input
            type="text"
            value={cvc}
            onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').slice(0, 4))}
            placeholder="123"
            maxLength={4}
            className="w-full px-3.5 py-2.5 border border-border rounded-lg bg-input-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isProcessing || !cardNumber || !expiryDate || !cvc}
        className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
      >
        {isProcessing ? (
          <div className="flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
            Processing...
          </div>
        ) : (
          'Pay $3,450'
        )}
      </button>
    </form>
  );
}

function PaymentSuccessPage({ onBackToAdlex }: { onBackToAdlex: () => void }) {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="px-6 py-8 flex flex-col items-center justify-center min-h-[400px]">
        {/* Success Icon */}
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
          <div className="w-8 h-8 text-primary">
            <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Success Content */}
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-h2 text-foreground">Payment Successful!</h2>
          <p className="text-metadata text-muted-foreground">
            Your payment of $3,450 has been processed successfully.
          </p>
          <p className="text-metadata text-muted-foreground">
            You will receive an email confirmation shortly.
          </p>
        </div>

        {/* Back to Adlex Button */}
        <button
          onClick={onBackToAdlex}
          className="w-full max-w-sm bg-primary text-primary-foreground py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
        >
          Back to Adlex
        </button>
      </div>
    </div>
  );
}

export function PaymentModal({ isOpen, onClose, onPaymentSuccess }: PaymentModalProps) {
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && !showSuccess) {
      onClose();
    }
  };

  const handlePaymentFormSuccess = () => {
    setShowSuccess(true);
  };

  const handleBackToAdlex = () => {
    setShowSuccess(false);
    onClose();
    onPaymentSuccess();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.48)' }}
      onClick={handleOverlayClick}
    >
      <div style={{ height: '96px' }} />
      <div className="flex-1 bg-background rounded-t-3xl flex flex-col min-h-0">
        {/* Header - Fixed */}
        <div className="bg-primary px-6 py-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-primary-foreground">I</span>
              </div>
              <span className="text-large text-primary-foreground">IFZA Payment</span>
            </div>
            <button 
              onClick={onClose}
              className="text-primary-foreground hover:opacity-70 transition-opacity"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        {showSuccess ? (
          <PaymentSuccessPage onBackToAdlex={handleBackToAdlex} />
        ) : (
          <div className="flex-1 overflow-y-auto">
            {/* Invoice Details */}
            <div className="px-6 py-4 bg-muted border-b border-border">
              <h3 className="text-large font-medium text-foreground mb-2">UAE Company Registration</h3>
              <div className="text-h2 text-foreground">$3,450</div>
              <div className="text-metadata text-muted-foreground mt-1">Due immediately</div>
              
              <div className="mt-4 space-y-2 text-metadata">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">To</span>
                  <span className="text-foreground">IFZA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">From</span>
                  <span className="text-foreground">Adlex.ai</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Memo</span>
                  <span className="text-foreground">Company registration services</span>
                </div>
              </div>
            </div>

            {/* Service Breakdown */}
            <div className="px-6 py-4 border-b border-border bg-background">
              <div className="text-label text-muted-foreground mb-3">Invoice #ADX-2024-001</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-metadata">IFZA Company Registration</span>
                  <span className="text-foreground text-metadata">$2,950</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-metadata">Service Fee</span>
                  <span className="text-foreground text-metadata">$500</span>
                </div>
                <div className="border-t border-border pt-2 mt-3">
                  <div className="flex justify-between">
                    <span className="text-metadata font-medium text-foreground">Amount due</span>
                    <span className="text-metadata font-medium text-foreground">$3,450</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div className="px-6 py-6">
              <PaymentForm onSubmit={handlePaymentFormSuccess} />
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-muted text-center">
              <p className="text-caption text-muted-foreground">
                Questions? Contact us at{' '}
                <a href="mailto:support@adlex.ai" className="text-primary hover:underline">
                  support@adlex.ai
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}