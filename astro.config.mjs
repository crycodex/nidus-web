// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://nidu.app',
	trailingSlash: 'never',
	integrations: [
		react(),
		sitemap({
			changefreq: 'weekly',
			priority: 0.7,
			lastmod: new Date(),
			serialize(item) {
				if (item.url === 'https://nidu.app' || item.url === 'https://nidu.app/') {
					item.priority = 1;
					item.changefreq = 'weekly';
				}
				if (item.url.includes('/privacidad') || item.url.includes('/terminos')) {
					item.priority = 0.3;
					item.changefreq = 'yearly';
				}
				return item;
			},
		}),
	],
});
