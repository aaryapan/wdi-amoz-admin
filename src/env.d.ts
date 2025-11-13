/// <reference types="vite/client" />

// Extend ImportMeta types for Vite environment variables.
// Add additional VITE_ variables here as needed for your project.
declare global {
  interface ImportMetaEnv {
    readonly VITE_API_BASE?: string;
    // readonly VITE_OTHER_KEY?: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export {};
