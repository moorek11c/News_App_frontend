import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/News_App_frontend/",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
