import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/News_App_Frontend/",
  server: {
    port: 3000,
  },
});
