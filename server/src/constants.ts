export const __prod__ = process.env.NODE_ENV === "production";
export const API_HOST =
  process.env.API_HOST ?? __prod__
"http://localhost:4000/";
