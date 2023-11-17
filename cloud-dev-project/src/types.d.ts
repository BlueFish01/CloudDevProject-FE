// src/types.d.ts

// Extend the Headers type definition
declare global {
  namespace NodeJS {
    interface Headers {
      cookie?: string;
    }
  }
}
