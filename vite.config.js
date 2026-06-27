import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) {
            return "vendor-react";
          }
          if (id.includes("node_modules/react-router")) {
            return "vendor-router";
          }
          if (id.includes("node_modules/i18next") || id.includes("node_modules/react-i18next") || id.includes("node_modules/i18next-browser-languagedetector")) {
            return "vendor-i18n";
          }
          if (id.includes("node_modules/react-icons") || id.includes("node_modules/lucide-react")) {
            return "vendor-ui";
          }
          if (id.includes("node_modules/@emailjs")) {
            return "vendor-emailjs";
          }
          if (id.includes("node_modules/radix-ui") || id.includes("node_modules/@radix-ui")) {
            return "vendor-radix";
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
