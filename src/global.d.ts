declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_KEY: string
      REACT_APP_AMADEUS_TOKEN_BASE_URL: string
      REACT_APP_AMADEUS_API_KEY: string
      REACT_APP_AMADEUS_API_SECRET: string
      REACT_APP_AMADEUS_FLIGHTS_BASE_URL: string
    }
  }
}

export {}
