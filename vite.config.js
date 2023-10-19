import path from "node:path";
import process from "node:process";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: "index.html",
    port: 4000,
  },
  root: "src",
  publicDir: "../public",
  build: {
    server: {
      port: 4000,
    },
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: "src/index.html",
        gallery: "src/test-galerie.html",
      },
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(1);
          // console.log(assetInfo.name.split(".").at(2));
          // console.log(path);
          // let extType2 = assetInfo.name.split(".").at(2);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            // extType2 = assetInfo.name.split(".").at(2);
            return `assets/img/[name][extname]`;
            // if (extType2) {
            // }
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
