import "server-only";

export const apiConfig = {
  baseUrl: process.env.API_BASE_URL ?? "",
  apiKey: process.env.API_KEY ?? "",
};
