/**
 * useChat Hook (Backend-Integrated Version)
 * Handles chat functionality with backend API integration
 */

import { useEffect, useCallback } from 'react';
import { useChatStore } from '../stores/chatStore';
import chatService from '../services/chat.service';
import sessionService from '../services/session.service';

/**
 * Custom hook for chat functionality
 * Integrates with backend chat API
 */
export function useChat() {
  // ============================================================================
  // Store State
  // ============================================================================
  const sessionId = useChatStore((state) => state.sessionId);
  const messages = useChatStore((state) => state.messages);
  const isWaitingForResponse = useChatStore((state) => state.isWaitingForResponse);
  const isBootstrapping = useChatStore((state) => state.isBootstrapping);
  const lastError = useChatStore((state) => state.lastError);

  // ============================================================================
  // Store Actions
  // ============================================================================
  const setSessionId = useChatStore((state) => state.setSessionId);
  // const setConversationStatus = useChatStore((state) => state.setConversationStatus); // Reserved for future use
  const addUserMessage = useChatStore((state) => state.addUserMessage);
  const addAssistantMessage = useChatStore((state) => state.addAssistantMessage);
  const addTypingIndicator = useChatStore((state) => state.addTypingIndicator);
  const removeTypingIndicator = useChatStore((state) => state.removeTypingIndicator);
  const setWaitingForResponse = useChatStore((state) => state.setWaitingForResponse);
  const setBootstrapping = useChatStore((state) => state.setBootstrapping);
  const setLastError = useChatStore((state) => state.setLastError);
  const clearMessages = useChatStore((state) => state.clearMessages);
  const clearSession = useChatStore((state) => state.clearSession);

  // ============================================================================
  // Bootstrap Session
  // ============================================================================
  const bootstrap = useCallback(async () => {
    try {
      setBootstrapping(true);
      setLastError(null);

      // Check if we have an existing session
      const existingSessionId = sessionService.getSessionId();

      // Call bootstrap API
      const response = await sessionService.bootstrap(
        existingSessionId || undefined
      );

      // Update store
      setSessionId(response.session_id);

      // Add initial message if provided
      if (response.message && response.message.text) {
        addAssistantMessage(response.message);
      }

      return response;
    } catch (error) {
      console.error('Bootstrap error:', error);
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to initialize session';
      setLastError(errorMessage);
      throw error;
    } finally {
      setBootstrapping(false);
    }
  }, [
    setBootstrapping,
    setLastError,
    setSessionId,
    addAssistantMessage,
  ]);

  // ============================================================================
  // Send Message
  // ============================================================================
  const sendMessage = useCallback(
    async (message: string) => {
      if (!message.trim()) return;
      if (isWaitingForResponse) return;
      if (!sessionId) {
        setLastError('No active session. Please refresh the page.');
        return;
      }

      try {
        setWaitingForResponse(true);
        setLastError(null);

        // Add user message to UI immediately
        addUserMessage(message.trim());

        // Add typing indicator
        addTypingIndicator();

        // Send to backend
        const response = await chatService.sendMessage(sessionId, message.trim());

        // Remove typing indicator
        removeTypingIndicator();

        // Add assistant response
        addAssistantMessage(response.response);

        // Update conversation status if provided
        // Note: Backend doesn't return status in ChatResponse currently,
        // but we can add this later if needed
      } catch (error) {
        console.error('Send message error:', error);
        removeTypingIndicator();
        const errorMessage =
          error instanceof Error ? error.message : 'Failed to send message';
        setLastError(errorMessage);

        // Add error message to chat
        addAssistantMessage({
          text: `Sorry, I encountered an error: ${errorMessage}. Please try again.`,
        });
      } finally {
        setWaitingForResponse(false);
      }
    },
    [
      sessionId,
      isWaitingForResponse,
      setWaitingForResponse,
      setLastError,
      addUserMessage,
      addTypingIndicator,
      removeTypingIndicator,
      addAssistantMessage,
    ]
  );

  // ============================================================================
  // Clear Conversation
  // ============================================================================
  const clearConversation = useCallback(async () => {
    if (!sessionId) return;

    try {
      setLastError(null);
      await sessionService.clearSession(sessionId);

      // Clear local state
      clearMessages();
      clearSession();

      // Bootstrap new session
      await bootstrap();
    } catch (error) {
      console.error('Clear conversation error:', error);
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to clear conversation';
      setLastError(errorMessage);
    }
  }, [sessionId, setLastError, clearMessages, clearSession, bootstrap]);

  // ============================================================================
  // Auto-bootstrap on mount
  // ============================================================================
  useEffect(() => {
    if (!sessionId && !isBootstrapping) {
      bootstrap();
    }
  }, [sessionId, isBootstrapping, bootstrap]);

  // ============================================================================
  // Return API
  // ============================================================================
  return {
    // State
    sessionId,
    messages,
    isWaitingForResponse,
    isBootstrapping,
    lastError,

    // Actions
    sendMessage,
    clearConversation,
    bootstrap,
  };
}
