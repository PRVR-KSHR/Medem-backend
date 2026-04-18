export function getEnv() {
  return {
    port: process.env.PORT ? Number(process.env.PORT) : 5000,
    corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173'
  }
}
