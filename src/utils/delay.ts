
export const TIMEOUT = {
  short: 5000,
  default: 10000,
  long: 15000,
} as const;

export const waitForTimeout = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const delay = {
  short: () => waitForTimeout(TIMEOUT.short),
  default: () => waitForTimeout(TIMEOUT.default),
  long: () => waitForTimeout(TIMEOUT.long),
};