import { siteConfig, type SocialLink } from '$lib/config.js';

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

const DEFAULT_SEO: SEOMetadata = {
	title: siteConfig.seo.title,
	description: siteConfig.seo.description,
	ogImage: siteConfig.seo.ogImage || undefined,
	twitterImage: siteConfig.seo.ogImage || undefined,
	author: siteConfig.seo.author,
	keywords: siteConfig.seo.keywords
};

export function generateSEO(custom: Partial<SEOMetadata> = {}): SEOMetadata {
	return {
		...DEFAULT_SEO,
		...custom,
		ogTitle: custom.ogTitle || custom.title || DEFAULT_SEO.title,
		ogDescription: custom.ogDescription || custom.description || DEFAULT_SEO.description,
		ogImage: custom.ogImage || DEFAULT_SEO.ogImage,
		twitterTitle: custom.twitterTitle || custom.title || DEFAULT_SEO.title,
		twitterDescription: custom.twitterDescription || custom.description || DEFAULT_SEO.description,
		twitterImage: custom.twitterImage || DEFAULT_SEO.twitterImage
	};
}

export function generatePersonSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: siteConfig.name,
		alternateName: siteConfig.username,
		url: siteConfig.seo.canonical,
		image: siteConfig.seo.ogImage || undefined,
		description: siteConfig.seo.description,
		sameAs: siteConfig.socialLinks.map((l: SocialLink) => l.url),
		jobTitle: siteConfig.title,
		knowsAbout: siteConfig.skills
	};
}

export function generateWebPageSchema(seo: SEOMetadata) {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: seo.title,
		description: seo.description,
		url: siteConfig.seo.canonical,
		mainEntity: {
			'@type': 'Person',
			name: siteConfig.name
		},
		datePublished: seo.publishedDate,
		dateModified: seo.modifiedDate || new Date().toISOString()
	};
}

export function generatePortfolioSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: `${siteConfig.name} Portfolio`,
		url: siteConfig.seo.canonical,
		potentialAction: {
			'@type': 'SearchAction',
			target: {
				'@type': 'EntryPoint',
				urlTemplate: `${siteConfig.seo.canonical}?q={search_term_string}`
			}
		}
	};
}
