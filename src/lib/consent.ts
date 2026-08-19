const CONSENT_STORAGE_KEY = "santo-cookie-consent";

export type ConsentValue = "granted" | "denied";
export type ConsentStatus = "unknown" | "undecided" | ConsentValue;

let cached: ConsentStatus | null = null;
const listeners = new Set<() => void>();

function readFromStorage(): ConsentStatus {
  const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  return value === "granted" || value === "denied" ? value : "undecided";
}

function notify() {
  for (const listener of listeners) listener();
}

export function subscribeConsent(onChange: () => void) {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

export function getConsentSnapshot(): ConsentStatus {
  if (cached === null) cached = readFromStorage();
  return cached;
}

export function getServerConsentSnapshot(): ConsentStatus {
  return "unknown";
}

export function decideConsent(value: ConsentValue) {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  cached = value;
  notify();
}

export function openConsentSettings() {
  cached = "undecided";
  notify();
}
