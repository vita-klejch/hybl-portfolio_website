import path from "node:path";
import process from "node:process";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: "index.html",
    port: 4000,
  },
  root: "src",
  base: "/hybl-portfolio_website/", // THIS MUST BE SET WHEN deploying on GITHUB PAGES, not for LOCAL TESTING
  publicDir: "../public",
  build: {
    // server: {
    //   port: 4000,
    // },
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: "src/index.html",
        gallery: "src/test-galerie.html",
        info: "src/info.html",
      },
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/img/[name][extname]`;
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
  resolve: {
    alias: { "/src": path.resolve(process.cwd(), "src") },
  },
});
