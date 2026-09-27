/**
 * Turns a zero-based list index into the "01." style numbers used in the navigation.
 * @example formatListNumber(0) // "01."
 */
export function formatListNumber(index: number): string {
  return `${String(index + 1).padStart(2, '0')}.`;
}
