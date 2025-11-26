/**
 * SelectorDisplay Component
 * Displays interactive selectors based on backend button configuration
 */

import { useState } from 'react';
import type { Button } from '@/types/backend';
import { CitizenshipSelector } from '../citizenship-selector';
import { BusinessActivitySelector } from '../business-activity-selector';

type SelectorValue = string | string[];

interface SelectorDisplayProps {
  button: Button;
  onSelect: (value: SelectorValue) => void;
  disabled?: boolean;
}

/**
 * Determines which selector to show based on callback_data
 */
export function SelectorDisplay({ button, onSelect, disabled = false }: SelectorDisplayProps) {
  const [hasSelected, setHasSelected] = useState(false);

  // Determine selector type from callback_data or text
  const selectorType = button.callback_data || button.text.toLowerCase();

  const handleSelect = (value: SelectorValue) => {
    setHasSelected(true);
    onSelect(value);
  };

  // Business Activity Selector
  if (
    selectorType.includes('business_activity') ||
    selectorType.includes('activity') ||
    selectorType.includes('business activity')
  ) {
    return (
      <BusinessActivitySelector
        onComplete={handleSelect}
        isCompleted={hasSelected || disabled}
        completedActivities={hasSelected ? [] : []}
      />
    );
  }

  // Citizenship/Nationality Selector
  if (
    selectorType.includes('citizenship') ||
    selectorType.includes('nationality') ||
    selectorType.includes('country')
  ) {
    return (
      <CitizenshipSelector
        shareholderName="shareholder" // TODO: Get actual name from context
        onSelect={handleSelect}
      />
    );
  }

  // If no matching selector found, return null
  console.warn('Unknown selector type:', selectorType);
  return null;
}
