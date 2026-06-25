<script lang="ts">
  import type { SEOMetadata } from '$lib/seo.js';
  import { generatePersonSchema, generateWebPageSchema, generatePortfolioSchema } from '$lib/seo.js';
  import { siteConfig } from '$lib/config.js';

  interface Props {
    seo: SEOMetadata;
  }

  let { seo }: Props = $props();

  const personSchema = generatePersonSchema();
  const webPageSchema = generateWebPageSchema(seo);
  const portfolioSchema = generatePortfolioSchema();
</script>

<svelte:head>
  <title>{seo.title}</title>
  <meta name="title" content={seo.title} />
  <meta name="description" content={seo.description} />
  <meta name="author" content={seo.author || siteConfig.seo.author} />

  {#if seo.keywords?.length}
    <meta name="keywords" content={seo.keywords.join(', ')} />
  {/if}

  <meta property="og:type" content="website" />
  <meta property="og:url" content={seo.canonical || siteConfig.seo.canonical} />
  <meta property="og:title" content={seo.ogTitle || seo.title} />
  <meta property="og:description" content={seo.ogDescription || seo.description} />
  <meta property="og:image" content={seo.ogImage || siteConfig.seo.ogImage} />
  <meta property="og:site_name" content={siteConfig.name} />

  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={seo.canonical || siteConfig.seo.canonical} />
  <meta property="twitter:title" content={seo.twitterTitle || seo.title} />
  <meta property="twitter:description" content={seo.twitterDescription || seo.description} />
  <meta property="twitter:image" content={seo.twitterImage || siteConfig.seo.ogImage} />
  <meta name="twitter:creator" content={siteConfig.seo.twitterHandle} />

  <link rel="canonical" href={seo.canonical || siteConfig.seo.canonical} />
  <meta name="robots" content="index, follow" />
  <meta name="language" content="English" />
  <meta property="og:locale" content="en_US" />

  <script type="application/ld+json">
    {JSON.stringify(personSchema)}
  </script>

  <script type="application/ld+json">
    {JSON.stringify(webPageSchema)}
  </script>

  <script type="application/ld+json">
    {JSON.stringify(portfolioSchema)}
  </script>

  {#if seo.publishedDate}
    <meta property="article:published_time" content={seo.publishedDate} />
  {/if}
  {#if seo.modifiedDate}
    <meta property="article:modified_time" content={seo.modifiedDate} />
  {/if}
</svelte:head>
