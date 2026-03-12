/**
 * ROOT LAYOUT SERVER-SIDE LOAD
 * =============================
 * This runs for EVERY page in your app.
 * Used to pass global data to all routes.
 * 
 * WHAT IT DOES:
 * - Passes current page path to all pages
 * - Passes baseUrl for canonical URLs
 * 
 * TO UPDATE:
 * - Change baseUrl here if deploying to new domain
 * - Add other global data as needed (language, theme, user info, etc)
 */

import type { LayoutServerLoad } from './$types.js';

/**
 * Load function - runs on server for all pages
 * @param url - The current URL object
 * @returns Global data available to all pages
 */
export const load: LayoutServerLoad = async ({ url }: { url: URL }) => {
  // Return data that's available to all pages
  return {
    // Current path (useful for navigation highlighting)
    currentPath: url.pathname,
    // Base URL - UPDATE THIS if deploying to new domain
    baseUrl: 'https://asaadzx.is-a.dev'
  };
};
