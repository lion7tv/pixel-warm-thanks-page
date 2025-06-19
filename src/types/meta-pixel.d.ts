
declare global {
  interface Window {
    fbq: (action: string, event: string, data?: any) => void;
  }
}

export {};
