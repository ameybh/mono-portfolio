import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import favicons from 'astro-favicons';

export default defineConfig({
  integrations: [
    mdx(), 
    react(),
    favicons({
      name: "Amey Bhavsar - Portfolio",
      short_name: "Amey Bhavsar",
      description: "Software Development Engineer II specializing in AI/ML systems",
      input: {
        favicons: "public/android-chrome-512x512.png",
      },
      theme_color: "#111111",
      background_color: "#111111",
      manifest: {
        display: "standalone",
        start_url: "/",
        scope: "/",
      },
      icons: {
        favicons: true,
        android: true,
        appleIcon: true,
        appleStartup: false,
        windows: true,
        yandex: true,
      },
      output: {
        images: true,
        files: true,
        html: true,
      },
    }),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
