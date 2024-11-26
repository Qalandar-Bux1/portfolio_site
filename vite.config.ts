import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import gzipPlugin from "rollup-plugin-gzip";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export default defineConfig({
  base: '/portfolio_site/', // Base URL for deploying to a subdirectory
  plugins: [
    react(),
    gzipPlugin({
      filter: /\.(js|css|html|json|svg)$/,
      minSize: 1024,
    }),
  ],
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      plugins: [],
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "chunks/[name]-[hash].js",
        entryFileNames: "entry/[name]-[hash].js",
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    cors: true,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  envDir: "./env",
});
