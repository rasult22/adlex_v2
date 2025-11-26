/**
 * Chat Store (Backend-Integrated Version)
 * Simplified store that delegates conversation state to backend
 */

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type { AgentResponse, ConversationStatus } from '@/types/backend';

// ============================================================================
// Types
// ============================================================================

/**
 * Message with backend agent response
 */
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  agentResponse?: AgentResponse; // For assistant messages
  isTyping?: boolean; // For loading state
}

/**
 * Chat state interface
 */
interface ChatState {
  // ============================================================================
  // Session Management
  // ============================================================================
  sessionId: string | null;
  conversationStatus: ConversationStatus | null;

  // ============================================================================
  // Messages
  // ============================================================================
  messages: Message[];
  isWaitingForResponse: boolean;

  // ============================================================================
  // UI State
  // ============================================================================
  inputValue: string;
  isBootstrapping: boolean;
  lastError: string | null;

  // ============================================================================
  // Actions - Session
  // ============================================================================
  setSessionId: (sessionId: string) => void;
  setConversationStatus: (status: ConversationStatus) => void;
  clearSession: () => void;

  // ============================================================================
  // Actions - Messages
  // ============================================================================
  addUserMessage: (content: string) => void;
  addAssistantMessage: (agentResponse: AgentResponse) => void;
  addTypingIndicator: () => void;
  removeTypingIndicator: () => void;
  clearMessages: () => void;

  // ============================================================================
  // Actions - UI
  // ============================================================================
  setInputValue: (value: string) => void;
  setWaitingForResponse: (waiting: boolean) => void;
  setBootstrapping: (bootstrapping: boolean) => void;
  setLastError: (error: string | null) => void;

  // ============================================================================
  // Reset
  // ============================================================================
  reset: () => void;
}

// ============================================================================
// Initial State
// ============================================================================

const initialState = {
  sessionId: null,
  conversationStatus: null,
  messages: [],
  isWaitingForResponse: false,
  inputValue: '',
  isBootstrapping: false,
  lastError: null,
};

// ============================================================================
// Store
// ============================================================================

export const useChatStore = create<ChatState>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,

        // Session actions
        setSessionId: (sessionId) => set({ sessionId }),
        setConversationStatus: (status) => set({ conversationStatus: status }),
        clearSession: () => set({ sessionId: null, conversationStatus: null }),

        // Message actions
        addUserMessage: (content) =>
          set((state) => ({
            messages: [
              ...state.messages,
              {
                id: `user-${Date.now()}-${Math.random()}`,
                role: 'user' as const,
                content,
                timestamp: new Date(),
              },
            ],
            inputValue: '', // Clear input after sending
          })),

        addAssistantMessage: (agentResponse) =>
          set((state) => {
            // Remove typing indicator if present
            const messagesWithoutTyping = state.messages.filter((m) => !m.isTyping);

            return {
              messages: [
                ...messagesWithoutTyping,
                {
                  id: `assistant-${Date.now()}-${Math.random()}`,
                  role: 'assistant' as const,
                  content: agentResponse.text,
                  timestamp: new Date(),
                  agentResponse,
                },
              ],
            };
          }),

        addTypingIndicator: () =>
          set((state) => ({
            messages: [
              ...state.messages,
              {
                id: `typing-${Date.now()}`,
                role: 'assistant' as const,
                content: '',
                timestamp: new Date(),
                isTyping: true,
              },
            ],
          })),

        removeTypingIndicator: () =>
          set((state) => ({
            messages: state.messages.filter((m) => !m.isTyping),
          })),

        clearMessages: () => set({ messages: [] }),

        // UI actions
        setInputValue: (value) => set({ inputValue: value }),
        setWaitingForResponse: (waiting) => set({ isWaitingForResponse: waiting }),
        setBootstrapping: (bootstrapping) => set({ isBootstrapping: bootstrapping }),
        setLastError: (error) => set({ lastError: error }),

        // Reset
        reset: () => set(initialState),
      }),
      {
        name: 'chat-storage',
        // Only persist session ID and messages
        partialize: (state) => ({
          sessionId: state.sessionId,
          messages: state.messages,
        }),
      }
    ),
    { name: 'ChatStore' }
  )
);

// ============================================================================
// Selectors
// ============================================================================

export const selectSessionId = (state: ChatState) => state.sessionId;
export const selectMessages = (state: ChatState) => state.messages;
export const selectConversationStatus = (state: ChatState) => state.conversationStatus;
export const selectIsWaitingForResponse = (state: ChatState) => state.isWaitingForResponse;
export const selectLastError = (state: ChatState) => state.lastError;
