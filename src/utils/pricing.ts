import { BASE_COSTS, VISA_COST_PER_PERSON } from '@/constants/registration';

/**
 * Calculate total registration cost
 * @param visaCount Number of visas requested (0-4)
 * @returns Object containing base cost, visa cost, and total cost
 */
export function calculateRegistrationCost(visaCount: number): {
  baseCost: number;
  visaCost: number;
  totalCost: number;
} {
  // Validate visa count
  const validVisaCount = Math.max(0, Math.min(4, visaCount));

  // Get base cost from lookup table
  const baseCost = BASE_COSTS[validVisaCount] || BASE_COSTS[0];

  // Calculate visa cost (included in base for first visa, additional for rest)
  const visaCost = VISA_COST_PER_PERSON;

  // Total cost is base cost + additional processing fee
  const totalCost = baseCost + visaCost;

  return {
    baseCost,
    visaCost,
    totalCost,
  };
}

/**
 * Format currency for display
 * @param amount Amount in AED
 * @returns Formatted string (e.g., "AED 12,900")
 */
export function formatCurrency(amount: number): string {
  return `AED ${amount.toLocaleString('en-US')}`;
}

/**
 * Calculate shares per shareholder
 * @param totalShares Total number of shares
 * @param numberOfShareholders Number of shareholders
 * @returns Array of share allocations
 */
export function calculateEqualShares(
  totalShares: number,
  numberOfShareholders: number
): number[] {
  const sharesPerPerson = Math.floor(totalShares / numberOfShareholders);
  const remainder = totalShares % numberOfShareholders;

  const shares: number[] = Array(numberOfShareholders).fill(sharesPerPerson);

  // Distribute remainder shares to first shareholders
  for (let i = 0; i < remainder; i++) {
    shares[i]++;
  }

  return shares;
}

/**
 * Validate share distribution
 * @param shares Array of share allocations
 * @param totalShares Expected total
 * @returns True if valid, false otherwise
 */
export function validateShareDistribution(
  shares: number[],
  totalShares: number
): boolean {
  const sum = shares.reduce((acc, curr) => acc + curr, 0);
  return sum === totalShares && shares.every((s) => s > 0);
}
