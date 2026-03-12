/**
 * SEO SETUP GUIDE & MAINTENANCE MANUAL
 * =====================================
 * 
 * This guide explains all the SEO changes made to your Svelte portfolio
 * and how to update them as your site grows.
 * 
 * SECTION 1: FILES CREATED & MODIFIED
 * =====================================
 * 
 * NEW FILES CREATED:
 * ------------------
 * 1. src/lib/seo.ts
 *    - Core SEO utility module
 *    - Contains all SEO functions and schemas
 *    - Update DEFAULT_SEO here for global changes
 * 
 * 2. src/lib/Components/SEOHead.svelte
 *    - Renders meta tags in page <head>
 *    - Included on all pages automatically
 *    - Handles Open Graph, Twitter, JSON-LD
 * 
 * 3. src/routes/sitemap.xml/+server.ts
 *    - Generates sitemap.xml for search engines
 *    - Update routes array when adding new pages
 *    - Submitted to Google Search Console
 * 
 * 4. src/routes/robots.txt/+server.ts
 *    - Controls search engine crawling
 *    - Tells bots which pages to crawl
 *    - UPDATE: Change blocked paths as needed
 * 
 * MODIFIED FILES:
 * ---------------
 * 1. src/routes/+layout.server.ts
 *    - Passes global data to all pages
 *    - UPDATE: Change baseUrl if domain changes
 * 
 * 2. src/routes/+page.server.ts (home)
 *    - Fetches data and generates SEO
 *    - UPDATE: home page title/description
 * 
 * 3. src/routes/about/+page.server.ts
 *    - About page SEO
 *    - UPDATE: about page title/description
 * 
 * 4. src/routes/projects/+page.server.ts
 *    - Projects page SEO
 *    - UPDATE: projects page title/description
 * 
 * 5. src/routes/thanks/+page.server.ts
 *    - Thank you page SEO
 *    - UPDATE: thanks page title/description
 * 
 * 
 * SECTION 2: HOW TO ADD SEO TO NEW PAGES
 * ========================================
 * 
 * When you add a new route, follow these steps:
 * 
 * STEP 1: Create +page.server.ts
 * ------
 * File: src/routes/mypage/+page.server.ts
 * 
 * Content:
 * ```typescript\n * import type { PageServerLoad } from './$types.js';\n * import { generateSEO } from '../../lib/seo.js';\n * \n * export const load: PageServerLoad = async () => {\n *   return {\n *     seo: generateSEO({\n *       title: 'My Page Title - Asaadzx',\n *       description: 'Description for Google search results (150-160 chars)',\n *       canonical: 'https://asaadzx.is-a.dev/mypage'\n *     })\n *   };\n * };\n * ```\n * \n * STEP 2: Use SEOHead in +page.svelte\n * -----\n * Content:\n * ```svelte\n * <script>\n *   let { data } = $props();\n * </script>\n * \n * <SEOHead seo={data.seo} pageType=\"mypage\" />\n * \n * <!-- Your page content -->\n * ```\n * \n * STEP 3: Add to sitemap.xml\n * ---\n * Edit: src/routes/sitemap.xml/+server.ts\n * Add to routes array:\n * ```typescript\n * {\n *   path: 'mypage',\n *   lastmod: new Date().toISOString().split('T')[0],\n *   changefreq: 'monthly',\n *   priority: '0.7'\n * }\n * ```\n * \n * \n * SECTION 3: SEO BEST PRACTICES TO FOLLOW\n * ========================================\n * \n * 1. TITLES\n *    - Keep 50-60 characters\n *    - Include main keyword first\n *    - Include brand name (Asaadzx)\n *    - Format: \"Keyword - Asaadzx\"\n *    - GOOD: \"Projects - Asaadzx | Open Source & ML Projects\"\n *    - BAD: \"My Projects\"\n * \n * 2. DESCRIPTIONS\n *    - Keep 150-160 characters (Google shows this many)\n *    - Include relevant keywords\n *    - Write like a sales pitch\n *    - GOOD: \"Explore Asaadzx's portfolio of projects including...\"\n *    - BAD: \"This is my projects page\"\n * \n * 3. KEYWORDS\n *    - Include 5-10 per page\n *    - Use exact terms people search for\n *    - Mix broad and specific keywords\n * \n * 4. IMAGES\n *    - Use descriptive alt text\n *    - Optimize file size (< 100KB for web)\n *    - Use proper aspect ratio (1200x630 for social)\n * \n * 5. LINKS\n *    - Use descriptive anchor text\n *    - Link to relevant pages\n *    - Keep internal links under 3 clicks from home\n * \n * 6. CONTENT\n *    - Use headings (H1, H2, H3) properly\n *    - One H1 per page\n *    - Keep paragraphs short (3-4 sentences)\n *    - Use lists for scanability\n * \n * \n * SECTION 4: SEO MONITORING & SUBMISSION\n * =======================================\n * \n * STEP 1: Submit Sitemap to Google\n * ---------------------------------\n * 1. Go to google.com/webmasters\n * 2. Select your site\n * 3. Go to Sitemaps menu\n * 4. Submit: https://asaadzx.is-a.dev/sitemap.xml\n * 5. Wait 24-48 hours for indexing\n * \n * STEP 2: Submit to Bing\n * ----------------------\n * 1. Go to bing.com/webmasters\n * 2. Add your site\n * 3. Submit sitemap in same way\n * \n * STEP 3: Monitor Rankings\n * -------------------------\n * Use free tools:\n * - Google Search Console (free)\n * - Google Analytics (free)\n * - Ubersuggest (free tier)\n * - SE Ranking (free tier)\n * \n * STEP 4: Fix Issues\n * ------------------\n * Google Search Console will show:\n * - Coverage issues (pages not indexed)\n * - Mobile usability issues\n * - Security issues\n * - Rich results errors\n * \n * Fix these as they appear!\n * \n * \n * SECTION 5: COMMON UPDATES\n * =========================\n * \n * UPDATE 1: Change Domain\n * -----------------------\n * Files to update:\n * - src/routes/+layout.server.ts (baseUrl)\n * - src/routes/sitemap.xml/+server.ts (baseUrl)\n * - src/routes/robots.txt/+server.ts (Sitemap URL)\n * - src/lib/seo.ts (canonical URLs, image URLs)\n * - src/lib/Components/SEOHead.svelte (canonical fallbacks)\n * - All +page.server.ts files (canonical URLs)\n * - Google Search Console (resubmit)\n * - Bing Webmaster Tools (resubmit)\n * \n * UPDATE 2: Update Social Media Links\n * -----------------------------------\n * File: src/lib/seo.ts\n * Function: generatePersonSchema()\n * Update sameAs array with your actual profiles:\n * - GitHub\n * - Twitter/X\n * - LinkedIn\n * - Instagram\n * \n * UPDATE 3: Add New Skills\n * -------------------------\n * File: src/lib/seo.ts\n * Function: generatePersonSchema()\n * Update knowsAbout array with new technologies\n * \n * UPDATE 4: Update Keywords\n * -------------------------\n * File: src/lib/seo.ts\n * Constant: DEFAULT_SEO\n * Update keywords array with your focus areas\n * \n * UPDATE 5: Update Google Verification\n * ------------------------------------\n * File: src/lib/Components/SEOHead.svelte\n * Search for \"google-site-verification\"\n * Replace with new code from Google Search Console\n * \n * \n * SECTION 6: TESTING YOUR SEO\n * ============================\n * \n * Before deploying:\n * \n * 1. Test Meta Tags\n *    - Right-click > Inspect > search <head>\n *    - Verify <title>, <meta name=\"description\">\n *    - Check all<meta property=\"og:*\"> tags\n * \n * 2. Test JSON-LD\n *    - Use Google's Rich Results Test\n *    - paste your URL: https://search.google.com/test/rich-results\n *    - Should show no errors\n * \n * 3. Test Mobile\n *    - Use Mobile Friendly Test\n *    - https://search.google.com/test/mobile-friendly\n *    - Should pass all tests\n * \n * 4. Test Accessibility\n *    - Use WAVE accessibility tool\n *    - https://wave.webaim.org/\n *    - Fix color contrast, alt text issues\n * \n * 5. Test Open Graph\n *    - Facebook Sharing Debugger\n *    - https://developers.facebook.com/tools/debug/\n *    - Paste URL, should show correct title/image\n * \n * 6. Check Sitemap\n *    - Visit: https://yourdomain.com/sitemap.xml\n *    - Should show XML with all your pages\n * \n * 7. Check Robots.txt\n *    - Visit: https://yourdomain.com/robots.txt\n *    - Should show crawl rules\n * \n * \n * SECTION 7: SEO CHECKLIST FOR LAUNCH\n * ====================================\n * \n * [ ] All pages have unique titles (50-60 chars)\n * [ ] All pages have descriptions (150-160 chars)\n * [ ] Home page has priority 1.0 in sitemap\n * [ ] Each page has correct canonical URL\n * [ ] Social media links updated in seo.ts\n * [ ] Google verification code in SEOHead.svelte\n * [ ] Sitemap submitted to Google Search Console\n * [ ] Sitemap submitted to Bing Webmaster Tools\n * [ ] robots.txt allows all crawlers\n * [ ] No broken links (test with link checker)\n * [ ] Images have alt text\n * [ ] Mobile responsive design tested\n * [ ] Page load speed < 3 seconds\n * [ ] All internal links work\n * [ ] No duplicate content warnings\n * [ ] Google Rich Results Test passes\n * [ ] Mobile Friendly Test passes\n * \n * \n * SECTION 8: PERFORMANCE & OPTIMIZATION\n * ======================================\n * \n * To improve your SEO rankings:\n * \n * 1. Page Speed\n *    - Minimize CSS/JavaScript\n *    - Optimize images (use WebP format)\n *    - Use lazy loading for images below fold\n *    - Remove unused dependencies\n * \n * 2. User Experience (Core Web Vitals)\n *    - Largest Contentful Paint (LCP) < 2.5s\n *    - First Input Delay (FID) < 100ms\n *    - Cumulative Layout Shift (CLS) < 0.1\n *    Test: https://pagespeed.web.dev/\n * \n * 3. Accessibility\n *    - Use semantic HTML (h1, h2, nav, etc)\n *    - Add alt text to all images\n *    - Use good color contrast ratios\n *    - Support keyboard navigation\n * \n * 4. Mobile Optimization\n *    - Responsive design (rig image above)\n *    - Touch-friendly buttons (48x48px minimum)\n *    - Readable font size (16px minimum)\n *    - No horizontal scrolling\n * \n * 5. Content Quality\n *    - Original, high-quality content\n *    - Regular updates (add new projects, blog posts)\n *    - Longer content for important pages\n *    - Internal links to related content\n * \n * \n * DEBUGGING COMMON ISSUES\n * =======================\n * \n * ISSUE: Pages not showing in Google search\n * SOLUTION:\n * 1. Submit URL to Google Search Console\n * 2. Wait 2-4 weeks for indexing\n * 3. Check for robots.txt/meta noindex blocking\n * 4. Ensure site is mobile-friendly\n * 5. Check for crawl errors in Search Console\n * \n * ISSUE: Wrong title/description in search snippets\n * SOLUTION:\n * 1. Check SEOHead.svelte renders correctly\n * 2. Verify +page.server.ts passes seo prop\n * 3. Clear Google Search Console cache\n * 4. Request \"Update for inspection\" in Search Console\n * \n * ISSUE: Rich snippet not showing\n * SOLUTION:\n * 1. Run Google Rich Results Test\n * 2. Fix JSON-LD errors shown\n * 3. Re-request indexing in Search Console\n * 4. Wait 2-4 days for update\n * \n * ISSUE: Sitemap not found\n * SOLUTION:\n * 1. Check site is deployed\n * 2. Visit https://yourdomain.com/sitemap.xml\n * 3. Check for 404 errors in logs\n * 4. Ensure SvelteKit endpoints are compiled\n * 5. Check build output has routes directory\n * \n * ISSUE: Rankings worse than before\n * SOLUTION:\n * 1. Check for manual penalties in Search Console\n * 2. Verify no accidental noindex tags added\n * 3. Check site speed hasn't degraded\n * 4. Verify no content duplicated\n * 5. Review recent changes for SEO issues\n * 
 * \n * NEXT STEPS\n * ==========\n * \n * 1. Test everything above in TESTING section\n * 2. Deploy to production\n * 3. Submit sitemap to Search Console\n * 4. Monitor indexing for 1 week\n * 5. Check Search Console for issues\n * 6. Fix any errors that appear\n * 7. Monitor rankings after 4 weeks\n * 8. Continue adding new content\n * 9. Review and update old content annually\n * 10. Track metrics with Google Analytics\n * \n * \n * CONTACTS & RESOURCES\n * ====================\n * - SEO Checklist: https://developers.google.com/search/docs/beginner/seo-starter-guide\n * - Canonical URLs: https://developers.google.com/search/docs/crawling-indexing/canonicalization\n * - Structured Data: https://schema.org/\n * - JSON-LD: https://json-ld.org/\n * - Google Search Central: https://developers.google.com/search\n * - Bing Webmaster: https://www.bing.com/webmasters\n * \n * \n * Version: 1.0\n * Last Updated: March 2026\n * Author: AI Assistant\n */\n