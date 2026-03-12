/**
 * ROBOTS.TXT ENDPOINT
 * ===================
 * 
 * URL: https://asaadzx.is-a.dev/robots.txt
 * 
 * What it does:
 * - Tells search engine crawlers which pages to index
 * - Controls crawl rate (how often bots visit)
 * - Directs bots to sitemap
 * 
 * WHY IT MATTERS:
 * - Improves SEO by controlling how search engines crawl your site
 * - Can save bandwidth by preventing crawl of unimportant pages
 * - Standard file that search engines look for
 * 
 * HOW TO UPDATE:
 * - Add "Disallow: /path" to block specific routes
 * - Adjust Crawl-delay for performance
 * - Update Sitemap URL if domain changes
 * 
 * EXAMPLE:
 * - Disallow: /admin/  → blocks admin pages
 * - Disallow: /private/ → blocks private pages
 * - Allow: /          → allows everything (default)
 */

import type { RequestHandler } from './$types.js';

/**
 * GET handler - serves robots.txt content
 * Called when visiting /robots.txt
 * 
 * @returns Text file with crawl instructions for search engines
 */
export const GET: RequestHandler = async () => {
  // Robots.txt content - controls search engine crawling
  const robots = `# Robots.txt for Asaadzx Portfolio
# Last Updated: ${new Date().toISOString()}
# 
# All search engines allowed to crawl and index
# 

# Default rules for all search engines
User-agent: *
Allow: /
# Block sensitive directories
Disallow: /admin/
Disallow: /_app/
Disallow: /_routes/

# Crawl delay - how long to wait between requests
# 1 second = reasonable for small sites
Crawl-delay: 1

# IMPORTANT: Submit the sitemap URL to Google Search Console
# This tells search engines where to find all your pages
Sitemap: https://asaadzx.is-a.dev/sitemap.xml

# Google Bot specific (can crawl faster)
User-agent: Googlebot
Allow: /
Crawl-delay: 0

# Bing Bot specific
User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Bad bots - block these
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /
`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
};
