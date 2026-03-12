import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import seoFiles from 'vite-plugin-seo-files';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		ViteImageOptimizer({
            png: { quality: 80 },
            jpeg: { quality: 75 },
            webp: { quality: 80 },
            avif: { quality: 70 },
            svg: {
                plugins: [
                    { name: 'removeViewBox'},
                    { name: 'sortAttrs' },
                ],
            },
        }),
        seoFiles({
            siteUrl: 'https://asaadzx.is-a.dev/', 
            generateSitemap: true,          // Optional: generate sitemap.xml (default: true)
            generateRobots: false,           // Optional: generate robots.txt (default: true)
        }),
		sveltekit()]
});
