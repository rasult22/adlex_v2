/**
 * ButtonKeyboard Component
 * Renders interactive buttons from backend AgentResponse
 */

import type { Button, ButtonAction } from '@/types/backend';
import { Button as UIButton } from '@/components/ui/button';

interface ButtonKeyboardProps {
  buttons: Button[];
  onButtonClick: (button: Button) => void;
  disabled?: boolean;
}

/**
 * Renders a keyboard of buttons with various actions
 */
export function ButtonKeyboard({ buttons, onButtonClick, disabled = false }: ButtonKeyboardProps) {
  if (!buttons || buttons.length === 0) return null;

  const handleClick = (button: Button) => {
    if (disabled) return;
    onButtonClick(button);
  };

  const getButtonVariant = (action: ButtonAction) => {
    switch (action) {
      case 'message':
        return 'default';
      case 'link':
        return 'outline';
      case 'upload':
        return 'secondary';
      case 'external_payment':
      case 'external_kyc':
      case 'external_signature':
        return 'default';
      default:
        return 'default';
    }
  };

  const getButtonIcon = (action: ButtonAction) => {
    switch (action) {
      case 'link':
        return '🔗';
      case 'upload':
        return '📎';
      case 'external_payment':
        return '💳';
      case 'external_kyc':
        return '✓';
      case 'external_signature':
        return '✍️';
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-2 mt-3">
      {buttons.map((button, index) => {
        const icon = getButtonIcon(button.action as ButtonAction);

        return (
          <UIButton
            key={`${button.text}-${index}`}
            variant={getButtonVariant(button.action as ButtonAction)}
            onClick={() => handleClick(button)}
            disabled={disabled}
            className="justify-start text-left"
          >
            {icon && <span className="mr-2">{icon}</span>}
            {button.text}
          </UIButton>
        );
      })}
    </div>
  );
}
