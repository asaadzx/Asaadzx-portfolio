/**
 * SITEMAP.XML ENDPOINT
 * ====================
 * 
 * URL: https://asaadzx.is-a.dev/sitemap.xml
 * 
 * What it does:
 * - Tells search engines about all pages on your site
 * - Specifies how often each page changes
 * - Indicates page importance (priority)
 * - Auto-generates from this file on each request
 * 
 * WHY IT MATTERS:
 * - Search engines use this to discover and index pages
 * - Helps with crawl efficiency
 * - Shows update frequency to search engines
 * 
 * HOW TO UPDATE:
 * - Add new routes to the 'routes' array below
 * - Change changefreq (daily/weekly/monthly/yearly)
 * - Change priority (0.0-1.0, higher = more important)
 * 
 * IMPORTANT:
 * - Submit this to Google Search Console
 * - Submit to Bing Webmaster Tools
 * - Update when adding new pages
 */

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types.js';

/**
 * Define all routes on your website
 * 
 * Properties:
 * - path: Route path (relative, without leading slash)
 * - lastmod: Last modification date (YYYY-MM-DD)
 * - changefreq: How often the page changes
 *   Values: always, hourly, daily, weekly, monthly, yearly, never
 * - priority: How important (0.0-1.0)
 *   Home = 1.0, important pages = 0.8-0.9, less important = 0.5
 */
const routes = [
  // Add new routes here in the same format
  {
    path: '',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '1.0'
  },
  {
    path: 'about',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    path: 'projects',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    path: 'thanks',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.5'
  }
];

/**
 * GET handler - generates XML sitemap
 * Called when visiting /sitemap.xml
 * 
 * @returns XML sitemap for search engines
 */
export const GET: RequestHandler = async () => {
  // Base URL - UPDATE if deploying to new domain
  const baseUrl = 'https://asaadzx.is-a.dev';

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${routes
    .map(
      (route) => `  <url>
    <loc>${baseUrl}${route.path ? '/' + route.path : ''}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join('\n')}
</urlset>`;

  // Return XML with proper content type
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
};
