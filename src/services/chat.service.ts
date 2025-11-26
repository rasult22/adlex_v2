/**
 * Chat Service
 * Handles chat message communication with backend AI agent
 */

import api from './api';
import sessionService from './session.service';
import type { ChatResponse, CompanyNameValidationRequest } from '@/types/backend';

/**
 * Chat Service
 * Manages chat conversation flow with backend
 */
const chatService = {
  /**
   * Send a message to the backend AI agent
   *
   * @param sessionId - Current session identifier
   * @param message - User message text
   * @returns Agent response with text and optional keyboard
   */
  async sendMessage(sessionId: string, message: string): Promise<ChatResponse> {
    try {
      // Update session activity
      sessionService.updateLastActivity();

      const response = await api.post<ChatResponse>('/chat/message', {
        message,
        session_id: sessionId,
      });

      return response.data;
    } catch (error) {
      console.error('Send message error:', error);
      throw error;
    }
  },

  /**
   * Validate company name availability
   * This is a special endpoint separate from the main chat flow
   *
   * @param name - Company name to validate
   * @param companyType - Type of company (Freezone or Mainland)
   * @returns Validation result
   */
  async validateCompanyName(name: string, companyType: string): Promise<any> {
    try {
      const requestData: CompanyNameValidationRequest = {
        name,
        company_type: companyType,
      };

      const response = await api.post('/chat/company/name/validation', requestData);
      return response.data;
    } catch (error) {
      console.error('Company name validation error:', error);
      throw error;
    }
  },

  /**
   * Helper: Send message with automatic session handling
   * If no session exists, creates one via bootstrap
   *
   * @param message - User message text
   * @returns Agent response
   */
  async sendMessageWithSessionHandling(message: string): Promise<ChatResponse> {
    try {
      // Get or create session
      let sessionId = sessionService.getSessionId();

      if (!sessionId || sessionService.isSessionExpired()) {
        // Bootstrap new session
        const bootstrapResponse = await sessionService.bootstrap();
        sessionId = bootstrapResponse.session_id;
      }

      // Send message
      return await this.sendMessage(sessionId, message);
    } catch (error) {
      console.error('Send message with session handling error:', error);
      throw error;
    }
  },
};

export default chatService;
