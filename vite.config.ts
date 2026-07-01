import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/home-service/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "집수리 바로매칭",
        short_name: "집수리",
        start_url: "/home-service/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icons: [
          {
            src: "icon192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "icon512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ]
});