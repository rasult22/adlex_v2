/**
 * Chat Interface (Backend-Integrated Version)
 * Simplified chat interface that delegates conversation flow to backend
 */

import React, { useEffect, useRef, useState } from 'react';
import type { Button, ButtonAction } from '@/types/backend';
import { useChat } from '../hooks/useChat';
import { ChatHeader } from './chat/ChatHeader';
import { ChatInput } from './chat/ChatInput';
import { MessageRenderer } from './chat/MessageRenderer';
import documentService from '../services/document.service';

/**
 * Main chat interface component (Backend-Integrated)
 * Reduced from 779 lines to ~150 lines by removing hardcoded flow
 */
export const ChatInterface = React.memo(function ChatInterface() {
  // ============================================================================
  // Hooks
  // ============================================================================
  const { messages, sendMessage, isWaitingForResponse, isBootstrapping, lastError } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [uploadingFile, setUploadingFile] = useState(false);

  // ============================================================================
  // Auto-scroll to bottom on new messages
  // ============================================================================
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const timeoutId = setTimeout(scrollToBottom, 100);
    return () => clearTimeout(timeoutId);
  }, [messages]);

  // ============================================================================
  // Handle button clicks from backend keyboard
  // ============================================================================
  const handleButtonClick = async (button: Button) => {
    const action = button.action as ButtonAction;

    switch (action) {
      case 'message':
        // Send button text as message
        await sendMessage(button.text);
        break;

      case 'link':
        // Open link in new tab
        if (button.link) {
          window.open(button.link, '_blank', 'noopener,noreferrer');
        }
        break;

      case 'upload':
        // Trigger file upload
        document.getElementById('file-upload-input')?.click();
        break;

      case 'select':
        // Select action is handled by SelectorDisplay component
        // No action needed here
        break;

      case 'external_payment':
      case 'external_kyc':
      case 'external_signature':
        // Open external process link
        if (button.link) {
          window.open(button.link, '_blank', 'noopener,noreferrer');
          // Could add polling for status updates here
        }
        break;

      default:
        console.warn('Unknown button action:', action);
    }
  };

  // ============================================================================
  // Handle selector choices (citizenship, business activity, etc.)
  // ============================================================================
  const handleSelectorChoice = async (value: string | string[]) => {
    // Format the value as a message
    const messageText = Array.isArray(value)
      ? value.join(', ')  // For business activities (array of strings)
      : value;            // For citizenship/nationality (single string)

    // Send the selected value as a message to backend
    await sendMessage(messageText);
  };

  // ============================================================================
  // Handle file upload
  // ============================================================================
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploadingFile(true);

      // Validate file
      documentService.validateFile(file);

      // Get session ID from messages (last assistant message should have it)
      const sessionId = localStorage.getItem('adlex_session');
      const sessionData = sessionId ? JSON.parse(sessionId) : null;

      if (!sessionData?.sessionId) {
        throw new Error('No active session');
      }

      // Upload file
      const response = await documentService.uploadPassport(sessionData.sessionId, file);

      // Send confirmation message
      await sendMessage(`Uploaded file: ${response.filename}`);
    } catch (error) {
      console.error('File upload error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Upload failed';
      alert(`Failed to upload file: ${errorMessage}`);
    } finally {
      setUploadingFile(false);
      // Reset input
      event.target.value = '';
    }
  };

  // ============================================================================
  // Handle send message
  // ============================================================================
  const handleSendMessage = async (messageText: string) => {
    if (!messageText.trim()) return;
    await sendMessage(messageText);
  };

  // ============================================================================
  // Render
  // ============================================================================
  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <ChatHeader />

      {/* Messages Area */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
          {/* Bootstrapping indicator */}
          {isBootstrapping && messages.length === 0 && (
            <div className="flex justify-center items-center h-full">
              <div className="text-muted-foreground">Initializing chat...</div>
            </div>
          )}

          {/* Error message */}
          {lastError && (
            <div className="bg-destructive/10 text-destructive p-4 rounded-lg">
              <p className="font-semibold">Error</p>
              <p className="text-sm">{lastError}</p>
            </div>
          )}

          {/* Messages */}
          {messages.map((message) => (
            <MessageRenderer
              key={message.id}
              message={message}
              onButtonClick={handleButtonClick}
              onSelectorChoice={handleSelectorChoice}
              disabled={isWaitingForResponse}
            />
          ))}

          {/* Scroll anchor */}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <ChatInput
          onSendMessage={handleSendMessage}
          onAttachmentClick={() => document.getElementById('file-upload-input')?.click()}
          disabled={isWaitingForResponse || uploadingFile}
        />

        {/* Hidden file input */}
        <input
          id="file-upload-input"
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleFileUpload}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
});
