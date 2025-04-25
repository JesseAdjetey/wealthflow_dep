interface Window {
  ethereum?: {
    isMetaMask?: boolean;
    request?: (...args: unknown[]) => Promise<unknown>;
  };
}
