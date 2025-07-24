// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
    assetsInclude: [
      'media/*.svg',
      'media/*.png',
      'media/*.jpg',
      'media/*.jpeg',
      'media/*.webp'
    ],
  },
});
