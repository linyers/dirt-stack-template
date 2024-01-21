import { resolve } from "path";
import react from "@vitejs/plugin-react";

module.exports = {
  plugins: [
    react({
      include: "**/*.disabled",
    }),
  ],
  root: resolve("./client"),
  base: "/static/",
  server: {
    host: "127.0.0.1",
    port: 5173,
    open: false,
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "@": resolve("./client/src/"),
    },
  },
  build: {
    outDir: resolve("./client/dist"),
    assetsDir: "",
    manifest: true,
    emptyOutDir: true,
    target: "es2015",
    rollupOptions: {
      input: {
        main: resolve("./client/src/main.jsx"), // <- renamed from main.js
      },
      output: {
        chunkFileNames: undefined,
      },
    },
  },
};
