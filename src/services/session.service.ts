/**
 * Session Service
 * Manages user session lifecycle and state
 */

import api from './api';
import type {
  BootstrapResponse,
  SessionStateResponse,
  SessionClearResponse,
  SessionStorage,
} from '@/types/backend';

const SESSION_STORAGE_KEY = 'adlex_session';

/**
 * Session Service
 * Handles session creation, persistence, and management
 */
const sessionService = {
  /**
   * Bootstrap a new or existing session
   * This should be called on app initialization
   *
   * @param existingSessionId - Optional session ID to resume
   * @returns Bootstrap response with session ID and initial message
   */
  async bootstrap(existingSessionId?: string): Promise<BootstrapResponse> {
    try {
      const params = existingSessionId ? { session_id: existingSessionId } : {};
      const response = await api.get<BootstrapResponse>('/chat/bootstrap', { params });

      // Save session ID to localStorage
      if (response.data.session_id) {
        this.saveSessionId(response.data.session_id);
      }

      return response.data;
    } catch (error) {
      console.error('Bootstrap error:', error);
      throw error;
    }
  },

  /**
   * Get current session state from backend
   * Useful for syncing frontend state with backend
   *
   * @param sessionId - Session identifier
   * @returns Current session state
   */
  async getSessionState(sessionId: string): Promise<SessionStateResponse> {
    try {
      const response = await api.get<SessionStateResponse>(`/chat/session/${sessionId}/state`);
      return response.data;
    } catch (error) {
      console.error('Get session state error:', error);
      throw error;
    }
  },

  /**
   * Clear session on backend and locally
   * This starts a new conversation
   *
   * @param sessionId - Session identifier to clear
   * @returns Clear confirmation message
   */
  async clearSession(sessionId: string): Promise<SessionClearResponse> {
    try {
      const response = await api.post<SessionClearResponse>(`/chat/clear/${sessionId}`);

      // Clear local session storage
      this.clearLocalSession();

      return response.data;
    } catch (error) {
      console.error('Clear session error:', error);
      throw error;
    }
  },

  /**
   * Save session ID to localStorage
   *
   * @param sessionId - Session identifier to save
   */
  saveSessionId(sessionId: string): void {
    const sessionData: SessionStorage = {
      sessionId,
      createdAt: new Date().toISOString(),
      lastActivity: new Date().toISOString(),
    };

    try {
      localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionData));
    } catch (error) {
      console.warn('Failed to save session to localStorage:', error);
    }
  },

  /**
   * Get session ID from localStorage
   *
   * @returns Session ID if exists, null otherwise
   */
  getSessionId(): string | null {
    try {
      const sessionData = localStorage.getItem(SESSION_STORAGE_KEY);
      if (!sessionData) return null;

      const parsed: SessionStorage = JSON.parse(sessionData);

      // Update last activity
      this.updateLastActivity();

      return parsed.sessionId;
    } catch (error) {
      console.warn('Failed to read session from localStorage:', error);
      return null;
    }
  },

  /**
   * Get full session data from localStorage
   *
   * @returns Session storage object or null
   */
  getSessionData(): SessionStorage | null {
    try {
      const sessionData = localStorage.getItem(SESSION_STORAGE_KEY);
      if (!sessionData) return null;

      return JSON.parse(sessionData);
    } catch (error) {
      console.warn('Failed to read session data from localStorage:', error);
      return null;
    }
  },

  /**
   * Update last activity timestamp
   */
  updateLastActivity(): void {
    try {
      const sessionData = this.getSessionData();
      if (!sessionData) return;

      sessionData.lastActivity = new Date().toISOString();
      localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionData));
    } catch (error) {
      console.warn('Failed to update last activity:', error);
    }
  },

  /**
   * Clear session from localStorage
   */
  clearLocalSession(): void {
    try {
      localStorage.removeItem(SESSION_STORAGE_KEY);
    } catch (error) {
      console.warn('Failed to clear local session:', error);
    }
  },

  /**
   * Check if session exists in localStorage
   *
   * @returns True if session exists
   */
  hasSession(): boolean {
    return this.getSessionId() !== null;
  },

  /**
   * Check if session is expired (inactive for more than 24 hours)
   *
   * @returns True if session is expired
   */
  isSessionExpired(): boolean {
    const sessionData = this.getSessionData();
    if (!sessionData) return true;

    const lastActivity = new Date(sessionData.lastActivity);
    const now = new Date();
    const hoursSinceActivity = (now.getTime() - lastActivity.getTime()) / (1000 * 60 * 60);

    // Session expires after 24 hours of inactivity
    return hoursSinceActivity > 24;
  },
};

export default sessionService;
