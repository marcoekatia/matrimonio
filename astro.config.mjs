import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://gioeleber.github.io",
  base: "matrimoniomarcoekatia",
  integrations: [tailwind()]
});