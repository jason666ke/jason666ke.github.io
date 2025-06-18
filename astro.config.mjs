// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://jason666ke.github.io',
	base: '/blue-belt',
	integrations: [mdx(), sitemap()],
});
