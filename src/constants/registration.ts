import type { CompanyType } from '@/types';

// Pricing constants
export const BASE_COSTS: Record<number, number> = {
  0: 12900,
  1: 14900,
  2: 16900,
  3: 18900,
  4: 20900,
};

export const VISA_COST_PER_PERSON = 2000;

// Step delays for chat interface (in milliseconds)
export const CHAT_DELAYS = {
  INITIAL: 500,
  MEDIUM: 3500,
  LONG: 5500,
};

// Validation constants
export const VALIDATION_RULES = {
  MIN_SHAREHOLDERS: 1,
  MAX_SHAREHOLDERS: 10,
  MIN_SHARES: 1,
  MIN_COMPANY_NAMES: 1,
  MAX_COMPANY_NAMES: 3,
  MIN_VISA_COUNT: 0,
  MAX_VISA_COUNT: 4,
};

// Business activity categories
export const BUSINESS_ACTIVITY_CATEGORIES = [
  'Trading',
  'Consulting',
  'Technology',
  'Marketing',
  'Real Estate',
  'Healthcare',
  'Education',
  'Manufacturing',
  'Other',
];

// Company types
export const COMPANY_TYPES: Record<CompanyType, { label: string; description: string }> = {
  freezone: {
    label: 'Freezone Company',
    description: '100% foreign ownership, tax benefits, easy setup',
  },
  mainland: {
    label: 'Mainland Company',
    description: 'Operate anywhere in UAE, direct access to local market',
  },
};
