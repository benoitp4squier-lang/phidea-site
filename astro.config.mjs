import { defineConfig } from "astro/config";

// Phidea marketing site — static output, deployed to phidea.eu via GitHub Pages.
export default defineConfig({
  site: "https://phidea.eu",
  output: "static",
  trailingSlash: "ignore",
  build: {
    format: "file", // emit /distribution.html not /distribution/index.html
  },
  server: {
    port: 4321,
    host: true,
  },
});
