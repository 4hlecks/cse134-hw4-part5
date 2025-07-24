// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
    assetsInclude: ['media/*.svg'], // Adjust path if needed
  },
});
