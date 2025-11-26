import { z } from 'zod';
import { VALIDATION_RULES } from '@/constants/registration';

// Registration validation schemas
export const companyNameSchema = z
  .string()
  .min(2, 'Company name must be at least 2 characters')
  .max(100, 'Company name must not exceed 100 characters')
  .regex(/^[a-zA-Z0-9\s&'-]+$/, 'Company name contains invalid characters');

export const shareholderNameSchema = z
  .string()
  .min(2, 'Name must be at least 2 characters')
  .max(100, 'Name must not exceed 100 characters')
  .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters');

export const shareholderSchema = z.object({
  name: shareholderNameSchema,
  shares: z.number().min(VALIDATION_RULES.MIN_SHARES, 'Shares must be at least 1'),
  birthdate: z.string().refine(
    (date) => {
      const birthDate = new Date(date);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      return age >= 18 && age <= 120;
    },
    { message: 'Shareholder must be at least 18 years old' }
  ),
  citizenship: z.string().min(2, 'Please select a country'),
});

export const registrationSchema = z.object({
  companyType: z.enum(['freezone', 'mainland']),
  companyNames: z
    .array(companyNameSchema)
    .min(VALIDATION_RULES.MIN_COMPANY_NAMES, 'At least one company name is required')
    .max(VALIDATION_RULES.MAX_COMPANY_NAMES, `Maximum ${VALIDATION_RULES.MAX_COMPANY_NAMES} company names allowed`),
  shareholdersCount: z
    .number()
    .min(VALIDATION_RULES.MIN_SHAREHOLDERS, `At least ${VALIDATION_RULES.MIN_SHAREHOLDERS} shareholder required`)
    .max(VALIDATION_RULES.MAX_SHAREHOLDERS, `Maximum ${VALIDATION_RULES.MAX_SHAREHOLDERS} shareholders allowed`),
  shareholders: z.array(shareholderSchema),
  totalShares: z.number().min(1, 'Total shares must be at least 1'),
  visaCount: z
    .number()
    .min(VALIDATION_RULES.MIN_VISA_COUNT, 'Visa count cannot be negative')
    .max(VALIDATION_RULES.MAX_VISA_COUNT, `Maximum ${VALIDATION_RULES.MAX_VISA_COUNT} visas allowed`),
  businessActivities: z.array(z.string()).min(1, 'At least one business activity is required'),
});

// Auth validation schemas
export const emailSchema = z.string().email('Invalid email address');

export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number');

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password is required'),
});

export const registerSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  phone: z.string().optional(),
});

export const verificationCodeSchema = z.object({
  code: z.string().length(6, 'Verification code must be 6 digits').regex(/^\d+$/, 'Code must contain only numbers'),
});

// Payment validation
export const cardNumberSchema = z
  .string()
  .regex(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, 'Invalid card number format');

export const expiryDateSchema = z
  .string()
  .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid expiry date format (MM/YY)');

export const cvcSchema = z
  .string()
  .regex(/^\d{3,4}$/, 'CVC must be 3 or 4 digits');

export const paymentSchema = z.object({
  cardNumber: cardNumberSchema,
  expiryDate: expiryDateSchema,
  cvc: cvcSchema,
  cardholderName: z.string().min(2, 'Cardholder name is required'),
});

// Helper functions
export function validateEmail(email: string): { valid: boolean; error?: string } {
  try {
    emailSchema.parse(email);
    return { valid: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { valid: false, error: error.issues[0].message };
    }
    return { valid: false, error: 'Validation failed' };
  }
}

export function validatePassword(password: string): { valid: boolean; error?: string } {
  try {
    passwordSchema.parse(password);
    return { valid: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { valid: false, error: error.issues[0].message };
    }
    return { valid: false, error: 'Validation failed' };
  }
}
