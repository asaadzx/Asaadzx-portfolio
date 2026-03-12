/**
 * THANK YOU PAGE SERVER-SIDE LOAD
 * ================================
 * Generates SEO metadata for the Thank You page (shown after contact form submission).
 * 
 * TO UPDATE:
 * - Change title, description if you want different message
 * - This page is less important for SEO but still included for completeness
 */

import type { PageServerLoad } from './$types.js';
import { generateSEO } from '../../lib/seo.js';

export const load: PageServerLoad = async () => {
  return {
    seo: generateSEO({
      title: 'Thank You - Asaadzx',
      description: 'Thank you for reaching out! I will get back to you as soon as possible.',
      canonical: 'https://asaadzx.is-a.dev/thanks',
      ogTitle: 'Thank You for Contacting',
      twitterTitle: 'Thanks - Asaadzx'
    })
  };
};