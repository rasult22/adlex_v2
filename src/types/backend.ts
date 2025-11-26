/**
 * Backend API Type Definitions
 * Based on backend-openapi.json specification
 */

// ============================================================================
// Enums
// ============================================================================

/**
 * Button action types for keyboard interactions
 */
export enum ButtonAction {
  MESSAGE = 'message',
  LINK = 'link',
  UPLOAD = 'upload',
  SELECT = 'select',
  EXTERNAL_PAYMENT = 'external_payment',
  EXTERNAL_KYC = 'external_kyc',
  EXTERNAL_SIGNATURE = 'external_signature',
}

/**
 * Conversation status enum - represents backend conversation state
 */
export enum ConversationStatus {
  INITIAL_GREETING = 'INITIAL_GREETING',
  NAME_COLLECTED = 'NAME_COLLECTED',
  PROCESS_STARTED = 'PROCESS_STARTED',
  REGISTRATION_FLOW = 'REGISTRATION_FLOW',
  COMPANY_TYPE_SELECTION = 'COMPANY_TYPE_SELECTION',
  COMPANY_NAME_COLLECTION = 'COMPANY_NAME_COLLECTION',
  COMPANY_NAME_CHECKING = 'COMPANY_NAME_CHECKING',
  COMPANY_NAME_SUGGESTIONS = 'COMPANY_NAME_SUGGESTIONS',
  COMPANY_NAME_SELECTED = 'COMPANY_NAME_SELECTED',
  SHAREHOLDERS_COUNT = 'SHAREHOLDERS_COUNT',
  SHAREHOLDERS_NAME_COLLECTION = 'SHAREHOLDERS_NAME_COLLECTION',
  SHARE_ALLOCATION = 'SHARE_ALLOCATION',
  SHAREHOLDERS_BIRTH_DATES = 'SHAREHOLDERS_BIRTH_DATES',
  SHAREHOLDERS_NATIONALITIES = 'SHAREHOLDERS_NATIONALITIES',
  VISA_PACKAGE_SELECTION = 'VISA_PACKAGE_SELECTION',
  BUSINESS_ACTIVITIES_SELECTION = 'BUSINESS_ACTIVITIES_SELECTION',
  DOCUMENT_UPLOAD = 'DOCUMENT_UPLOAD',
  PAYMENT_PENDING = 'PAYMENT_PENDING',
  KYC_PENDING = 'KYC_PENDING',
  SIGNATURE_PENDING = 'SIGNATURE_PENDING',
  REGISTRATION_COMPLETE = 'REGISTRATION_COMPLETE',
  UNKNOWN = 'UNKNOWN',
}

// ============================================================================
// Agent Response Types
// ============================================================================

/**
 * Button configuration for user interaction
 */
export interface Button {
  /** Text to display on the button */
  text: string;
  /** Action to perform when button is clicked */
  action: ButtonAction;
  /** URL for LINK, EXTERNAL_PAYMENT, EXTERNAL_KYC, or EXTERNAL_SIGNATURE actions */
  link?: string | null;
  /** Optional data for custom action handling */
  callback_data?: string | null;
}

/**
 * Keyboard configuration with buttons
 */
export interface Keyboard {
  /** List of buttons to display */
  buttons: Button[];
}

/**
 * Structured response from the AI agent
 */
export interface AgentResponse {
  /** Main message text to send to user */
  text: string;
  /** Keyboard with buttons if user interaction is needed */
  keyboard?: Keyboard | null;
}

// ============================================================================
// Chat API Types
// ============================================================================

/**
 * Request to send a chat message
 */
export interface ChatRequest {
  message: string;
  session_id?: string;
}

/**
 * Response from chat message endpoint
 */
export interface ChatResponse {
  response: AgentResponse;
  session_id: string;
}

/**
 * Response from bootstrap endpoint
 */
export interface BootstrapResponse {
  session_id: string;
  message: AgentResponse;
}

/**
 * Response from session clear endpoint
 */
export interface SessionClearResponse {
  message: string;
}

/**
 * Response from session state endpoint
 */
export interface SessionStateResponse {
  session_id: string;
  status: ConversationStatus;
  system_prompt: string;
  state: Record<string, any>;
  updated_at: string;
}

/**
 * Request for company name validation
 */
export interface CompanyNameValidationRequest {
  /** Company name to validate */
  name: string;
  /** Type of company (Freezone Company or Mainland Company) */
  company_type: string;
}

// ============================================================================
// Document API Types
// ============================================================================

/**
 * Information about an uploaded document
 */
export interface DocumentInfo {
  /** Unique document identifier */
  document_id: string;
  /** Original filename */
  filename: string;
  /** URL to access the document */
  url: string;
  /** Upload date in ISO format */
  upload_date: string;
  /** File size in bytes */
  file_size: number;
}

/**
 * Response from passport upload endpoint
 */
export interface PassportUploadResponse {
  /** Whether upload was successful */
  success: boolean;
  /** Unique document identifier */
  document_id: string;
  /** URL to access the document */
  url: string;
  /** Original filename */
  filename: string;
  /** Upload date in ISO format */
  upload_date: string;
  /** File size in bytes */
  file_size: number;
}

/**
 * Response from passport list endpoint
 */
export interface PassportListResponse {
  /** List of uploaded documents */
  documents: DocumentInfo[];
  /** Total number of documents */
  total: number;
}

// ============================================================================
// Admin API Types (for reference, not used by frontend)
// ============================================================================

export interface SetPaymentLinkRequest {
  external_key: string;
  payment_link: string;
  amount?: string | null;
  reference?: string | null;
}

export interface SetKYCLinkRequest {
  external_key: string;
  kyc_link: string;
  kyc_id?: string | null;
}

export interface SetSignatureLinkRequest {
  external_key: string;
  signature_link: string;
  signature_id?: string | null;
}

export interface SetDocumentsRequest {
  external_key: string;
  trade_license_url?: string | null;
  certificate_url?: string | null;
  moa_url?: string | null;
  aoa_url?: string | null;
}

export interface UpdateExternalStatusRequest {
  external_key: string;
  process_type: string;
  status: string;
}

export interface WebhookNotification {
  user_id: string;
  process_type: string;
  status?: string | null;
  payment_link?: string | null;
  kyc_link?: string | null;
  signature_link?: string | null;
  documents?: Record<string, any> | null;
}

// ============================================================================
// Error Types
// ============================================================================

export interface ValidationError {
  loc: (string | number)[];
  msg: string;
  type: string;
}

export interface HTTPValidationError {
  detail?: ValidationError[];
}

// ============================================================================
// Helper Types
// ============================================================================

/**
 * API response wrapper for error handling
 */
export interface ApiResponse<T> {
  data?: T;
  error?: {
    message: string;
    status: number;
    details?: any;
  };
}

/**
 * Session storage interface
 */
export interface SessionStorage {
  sessionId: string;
  createdAt: string;
  lastActivity: string;
}
