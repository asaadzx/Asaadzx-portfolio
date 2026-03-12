/**
 * HOME PAGE SERVER-SIDE LOAD
 * ============================
 * This file runs on the server before the homepage renders.
 * It fetches data and SEO metadata for the home page.
 * 
 * WHAT IT DOES:
 * 1. Fetches messages from Supabase database
 * 2. Generates SEO metadata for this page
 * 3. Passes both to the page component
 * 
 * TO UPDATE:
 * - Change title/description in generateSEO() call
 * - Add/remove database queries as needed
 * - Never expose sensitive data here
 */

import type { PageServerLoad } from './$types.js';
import { supabase } from '../lib/Supabase.js';
import { generateSEO } from '../lib/seo.js';

// Type definition for messages from database
type Message = {
  id: number;
  created_at: string;
  Massage: string | null;
  Embeded_things: string | null;
};

/**
 * Load function - runs on server for SSR (Server-Side Rendering)
 * This ensures search engines see the meta tags and SEO data
 * 
 * @returns Object with messages and SEO data for template
 */
export const load: PageServerLoad = async () => {
  // Fetch messages from Supabase
  const { data, error } = await supabase
    .from('MePortfolio')
    .select<'MePortfolio', Message>();

  // Error handling - return empty if fetch fails
  if (error) {
    console.error('Error loading messages:', error.message);
    return { 
      messages: [],
      seo: generateSEO() // Use defaults if error
    };
  }

  // Return both messages and SEO data
  return {
    messages: data ?? [],
    // SEO metadata for this page - customize title/description below
    seo: generateSEO({
      title: 'Asaadzx - Open Source Developer & ML Explorer',
      description: 'Asaadzx (Asaad Zein) - 14-year-old open-source developer, full stack web & mobile developer, and machine learning explorer. Explore my projects, skills, and journey!',
      // IMPORTANT: Update canonical when deploying to new domain
      canonical: 'https://asaadzx.is-a.dev'
    })
  };
};
