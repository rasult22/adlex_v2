// Page navigation types
export type PageType =
  | 'landing'
  | 'welcome'
  | 'onboarding'
  | 'figma-onboarding'
  | 'registration'
  | 'code-verification'
  | 'chat';

// Registration flow types
export type CompanyType = 'freezone' | 'mainland';

export type RegistrationStep =
  | 'none'
  | 'company-type'
  | 'company-names'
  | 'shareholders-count'
  | 'shareholder-names'
  | 'total-shares'
  | 'shareholder-shares'
  | 'shareholder-birthdate'
  | 'shareholder-citizenship'
  | 'visa-count'
  | 'business-activities'
  | 'documents'
  | 'payment'
  | 'kyc'
  | 'moa-resolution'
  | 'completed';

export interface ShareholderData {
  name: string;
  shares: number;
  birthdate: string;
  citizenship: string;
}

export interface RegistrationData {
  companyType: CompanyType | null;
  companyNames: string[];
  shareholdersCount: number;
  shareholders: ShareholderData[];
  totalShares: number;
  visaCount: number;
  businessActivities: string[];
}

// Message types for chat
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// Common prop types
export interface NavigationProps {
  onNavigate?: (page: PageType) => void;
}

export interface PageProps {
  onBack?: () => void;
  onNext?: () => void;
  onComplete?: () => void;
}
