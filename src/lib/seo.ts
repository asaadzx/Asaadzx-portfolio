/**
 * SEO OPTIMIZATION MODULE
 * ========================
 * IMPORTANT: This is the core module for all SEO functionality
 * 
 * What it does:
 * - Manages meta tags (title, description, keywords)
 * - Handles Open Graph tags (for Facebook/LinkedIn/etc sharing)
 * - Manages Twitter Card tags (for Twitter sharing)
 * - Generates JSON-LD structured data (for Google rich snippets)
 * 
 * FILES THAT DEPEND ON THIS:
 * - src/lib/Components/SEOHead.svelte - renders all meta tags
 * - src/routes/+page.server.ts - home page
 * - src/routes/about/+page.server.ts - about page
 * - src/routes/projects/+page.server.ts - projects page
 * - src/routes/thanks/+page.server.ts - thank you page
 * 
 * TO UPDATE: Edit DEFAULT_SEO below or override in specific page's +page.server.ts
 * TO ADD NEW PAGE: Create +page.server.ts, call generateSEO(), return seo prop
 */

/**
 * SEOMetadata Interface - Defines all possible SEO properties
 * 
 * Each property controls a specific aspect of SEO:
 * - title: Shown in browser tab + Google search results (50-60 chars ideal)
 * - description: Shown under title in search results (150-160 chars ideal)
 * - canonical: Prevents duplicate content in search engines
 * - ogTitle/ogDescription/ogImage: Social media sharing preview
 * - twitterTitle/twitterDescription/twitterImage: Twitter-specific
 * - keywords: Array of searchable terms
 * - author: Content creator name
 * - publishedDate/modifiedDate: For news/blog content
 * - schema: Custom structured data
 */
export interface SEOMetadata {
	title: string;
	description: string;
	canonical?: string;
	ogTitle?: string;
	ogDescription?: string;
	ogImage?: string;
	twitterTitle?: string;
	twitterDescription?: string;
	twitterImage?: string;
	keywords?: string[];
	author?: string;
	publishedDate?: string;
	modifiedDate?: string;
	schema?: Record<string, unknown>;
}

/**
 * DEFAULT_SEO - Global fallback values for all pages
 * 
 * UPDATE THESE TO CHANGE SITE-WIDE DEFAULTS
 * Specific pages can override these by passing custom values to generateSEO()
 * 
 * IMPORTANT:
 * - Update image URLs if moving to different domain
 * - Add more keywords relevant to your skills
 * - Keep description under 160 characters for Google
 */
const DEFAULT_SEO: SEOMetadata = {
	title: 'Asaadzx - Open Source Developer, ML Explorer, Full Stack',
	description:
		'Asaadzx (Asaad Zein) - 14-year-old open-source developer, full stack web & mobile developer, and machine learning explorer. Explore my projects, skills, and journey!',
	ogImage: 'https://asaadzx.is-a.dev/me.png',
	twitterImage: 'https://asaadzx.is-a.dev/me.png',
	author: 'Asaad Zein',
	keywords: [
		'Asaadzx',
		'Asaad Zein',
		'open source',
		'developer',
		'machine learning',
		'full stack',
		'portfolio',
		'Egypt',
		'Linux',
		'Python',
		'C++',
		'Flutter',
		'web development',
		'mobile development'
	]
};

/**
 * generateSEO - Main function to generate SEO metadata
 * 
 * Merges custom page SEO with global defaults.
 * ALWAYS CALL THIS in your +page.server.ts files
 * 
 * Smart fallbacks:
 * - If no ogTitle provided, uses title
 * - If no ogImage provided, uses default image
 * - Same logic for Twitter tags
 * 
 * USAGE IN +page.server.ts:
 * ```typescript
 * export const load: PageServerLoad = async () => {
 *   return {
 *     seo: generateSEO({
 *       title: 'About Me',
 *       description: 'Learn about my experience and skills',
 *       canonical: 'https://asaadzx.is-a.dev/about'
 *     })
 *   };
 * };
 * ```
 * 
 * @param custom - Partial metadata to override defaults
 * @returns Complete SEO metadata object ready for SEOHead component
 */
export function generateSEO(custom: Partial<SEOMetadata> = {}): SEOMetadata {
	return {
		...DEFAULT_SEO,
		...custom,
		// Intelligent fallbacks
		ogTitle: custom.ogTitle || custom.title || DEFAULT_SEO.title,
		ogDescription: custom.ogDescription || custom.description || DEFAULT_SEO.description,
		ogImage: custom.ogImage || DEFAULT_SEO.ogImage,
		twitterTitle: custom.twitterTitle || custom.title || DEFAULT_SEO.title,
		twitterDescription: custom.twitterDescription || custom.description || DEFAULT_SEO.description,
		twitterImage: custom.twitterImage || DEFAULT_SEO.twitterImage
	};
}

/**
 * generatePersonSchema - Creates JSON-LD Person structured data
 * 
 * This tells search engines about YOU as a person/developer.
 * Results in rich snippets and knowledge cards in search results.
 * 
 * UPDATE THESE DETAILS:
 * - sameAs: Your social media profile URLs
 * - jobTitle: Your current role/profession
 * - knowsAbout: Your skills/expertise
 * 
 * Called by: SEOHead.svelte (included on all pages in <script> tag)
 * 
 * @returns JSON-LD Person schema object
 */
export function generatePersonSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Asaad Zein',
		alternateName: 'Asaadzx',
		url: 'https://asaadzx.is-a.dev',
		image: 'https://asaadzx.is-a.dev/me.png',
		description: 'Open-source developer, full-stack web & mobile developer, ML explorer',
		// UPDATE: Add your social media URLs here
		sameAs: [
			'https://github.com/asaadzx',
			'https://twitter.com/asaadzx',
			'https://linkedin.com/in/asaad-zein',
			'https://instagram.com/asaadzx'
		],
		jobTitle: 'Full Stack Developer',
		worksFor: {
			'@type': 'Organization',
			name: 'Freelance'
		},
		// UPDATE: Add skills you want to highlight
		knowsAbout: [
			'JavaScript',
			'TypeScript',
			'Python',
			'C++',
			'Flutter',
			'React',
			'Svelte',
			'Machine Learning',
			'Web Development',
			'Mobile Development',
			'Open Source'
		]
	};
}

/**
 * generateWebPageSchema - Creates JSON-LD WebPage structured data
 * 
 * Describes individual pages to search engines.
 * Helps with understanding page purpose and content.
 * 
 * Called by: SEOHead.svelte (included on all pages)
 * 
 * @param seo - SEOMetadata object from generateSEO()
 * @returns JSON-LD WebPage schema object
 */
export function generateWebPageSchema(seo: SEOMetadata) {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: seo.title,
		description: seo.description,
		url: 'https://asaadzx.is-a.dev',
		mainEntity: {
			'@type': 'Person',
			name: 'Asaad Zein'
		},
		datePublished: seo.publishedDate,
		dateModified: seo.modifiedDate || new Date().toISOString()
	};
}

/**
 * generatePortfolioSchema - Creates JSON-LD Website structured data
 * 
 * Describes the entire website to search engines.
 * Helps categorize your site as a portfolio.
 * Also enables site search in Google search box.
 * 
 * Called by: SEOHead.svelte (included on all pages)
 * 
 * @returns JSON-LD Website schema object
 */
export function generatePortfolioSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'Asaadzx Portfolio',
		url: 'https://asaadzx.is-a.dev',
		// Enables "Search Site" feature in Google knowledge card
		potentialAction: {
			'@type': 'SearchAction',
			target: {
				'@type': 'EntryPoint',
				urlTemplate: 'https://asaadzx.is-a.dev?q={search_term_string}'
			}
		}
	};
}

/**
 * generateBreadcrumbSchema - Creates JSON-LD Breadcrumb structured data
 * 
 * Shows navigation path in search results.
 * Improves UX and helps users navigate.
 * 
 * USAGE:
 * ```typescript
 * generateBreadcrumbSchema([
 *   { name: 'Home', url: 'https://asaadzx.is-a.dev' },
 *   { name: 'Projects', url: 'https://asaadzx.is-a.dev/projects' }
 * ])
 * ```
 * 
 * Currently not used but available for future implementation.
 * 
 * @param breadcrumbs - Array of breadcrumb objects with name + url
 * @returns JSON-LD BreadcrumbList schema object
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: breadcrumbs.map((crumb, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: crumb.name,
			item: crumb.url
		}))
	};
}
