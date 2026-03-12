/**
 * ABOUT PAGE SERVER-SIDE LOAD
 * ============================
 * Generates SEO metadata for the About page.
 * 
 * TO UPDATE:
 * - Change title, description for this specific page
 * - Add ogTitle/twitterTitle for custom social sharing
 * - Add keywords relevant to this page's content
 */

import type { PageServerLoad } from './$types.js';
import { generateSEO } from '../../lib/seo.js';

export const load: PageServerLoad = async () => {
  return {
    seo: generateSEO({
      title: 'About Asaadzx - Developer, ML Explorer, Open Source Contributor',
      description:
        'Learn more about Asaadzx (Asaad Zein), a 14-year-old full-stack developer passionate about open source, machine learning, and web development.',
      canonical: 'https://asaadzx.is-a.dev/about',
      ogTitle: 'About Asaadzx',
      twitterTitle: 'About Asaadzx - Full Stack Developer'
    })
  };
};