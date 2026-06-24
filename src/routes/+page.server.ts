import type { PageServerLoad } from './$types.js';
import { generateSEO } from '../lib/seo.js';
import { siteConfig } from '$lib/config.js';

export const load: PageServerLoad = async () => {
  return {
    seo: generateSEO({
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      canonical: siteConfig.seo.canonical
    })
  };
};
