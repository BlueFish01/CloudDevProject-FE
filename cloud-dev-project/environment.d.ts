declare global {
    namespace NodeJS {
      interface ProcessEnv {
        AUTH_URL: string;
        API_URL: string;
      }
    }
  }
  