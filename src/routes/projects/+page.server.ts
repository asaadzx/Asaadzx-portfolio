/**
 * PROJECTS PAGE SERVER-SIDE LOAD
 * ===============================
 * Generates SEO metadata for the Projects page.
 * 
 * TO UPDATE:
 * - Change title, description for this specific page
 * - Add specific project keywords if needed
 * - Update canonical URL if page structure changes
 */

import type { PageServerLoad } from './$types.js';
import { generateSEO } from '../../lib/seo.js';

export const load: PageServerLoad = async () => {
  return {
    seo: generateSEO({
      title: 'Projects - Asaadzx | Open Source & ML Projects',
      description:
        'Explore Asaadzx\'s portfolio of projects including AI chatbots, machine learning models, full-stack web applications, and open-source contributions.',
      canonical: 'https://asaadzx.is-a.dev/projects',
      ogTitle: 'My Projects',
      twitterTitle: 'Asaadzx Projects - Developer Portfolio'
    })
  };
};