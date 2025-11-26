/**
 * MessageRenderer Component
 * Renders chat messages with backend AgentResponse support
 */

import type { Message } from '@/stores/chatStore';
import type { Button } from '@/types/backend';
import { ButtonKeyboard } from './ButtonKeyboard';
import { SelectorDisplay } from './SelectorDisplay';
import ChatMassageIncome from '../../imports/ChatMassageIncome';

type SelectorValue = string | string[];

interface MessageRendererProps {
  message: Message;
  onButtonClick: (button: Button) => void;
  onSelectorChoice: (value: SelectorValue) => void;
  disabled?: boolean;
}

/**
 * Typing animation component
 */
function TypingAnimation() {
  return (
    <div className="flex gap-1 items-center py-2">
      <div
        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
        style={{ animationDelay: '0ms' }}
      />
      <div
        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
        style={{ animationDelay: '150ms' }}
      />
      <div
        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
        style={{ animationDelay: '300ms' }}
      />
    </div>
  );
}

/**
 * Renders individual chat messages with AgentResponse support
 */
export function MessageRenderer({ message, onButtonClick, onSelectorChoice, disabled = false }: MessageRendererProps) {
  // Typing indicator
  if (message.isTyping) {
    return (
      <div className="flex justify-start w-full">
        <div className="max-w-[80%] bg-muted rounded-2xl px-4 py-3">
          <TypingAnimation />
        </div>
      </div>
    );
  }

  // User message
  if (message.role === 'user') {
    return (
      <div className="flex justify-end w-full">
        <div className="bg-muted border border-border rounded-[20px] px-[14px] py-[12px] max-w-[280px]">
          <p className="text-button text-foreground leading-relaxed whitespace-pre-wrap">{message.content}</p>
        </div>
      </div>
    );
  }

  // Assistant message with AgentResponse
  const { agentResponse } = message;

  // Check if there's a select button
  const selectButton = agentResponse?.keyboard?.buttons.find(
    (btn) => btn.action === 'select'
  );

  // Filter out select button from regular keyboard
  const regularButtons = agentResponse?.keyboard?.buttons.filter(
    (btn) => btn.action !== 'select'
  ) || [];

  return (
    <div className="flex justify-start w-full pr-4">
      <div className="flex-1">
        <div className="flex flex-col gap-2">
          {/* Message content */}
          {message.content && <ChatMassageIncome content={message.content} />}

          {/* Selector if select button is present */}
          {selectButton && (
            <SelectorDisplay
              button={selectButton}
              onSelect={onSelectorChoice}
              disabled={disabled}
            />
          )}

          {/* Regular keyboard buttons (excluding select) */}
          {regularButtons.length > 0 && (
            <ButtonKeyboard
              buttons={regularButtons}
              onButtonClick={onButtonClick}
              disabled={disabled}
            />
          )}
        </div>
      </div>
    </div>
  );
}
