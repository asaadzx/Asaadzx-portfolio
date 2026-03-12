<!--
  SEOHead Component
  =================
  
  This component renders all SEO-related meta tags in the page <head>.
  It handles:
  - Page title, description, keywords
  - Open Graph tags (for Facebook/LinkedIn/etc)
  - Twitter Card tags (for Twitter sharing)
  - JSON-LD structured data (for Google rich snippets)
  - Canonical URLs (for duplicate content prevention)
  
  HOW TO USE:
  ===========
  In any +page.svelte file:
  
  <script>
    let { data } = $props();
  </script>
  
  <SEOHead seo={data.seo} pageType="mypage" />
  
  The 'seo' prop comes from your +page.server.ts file's load function.
  
  IMPORTANT: This component is included on EVERY page via the layout.
  It uses props passed from +page.server.ts to customize each page's SEO.
-->

<script lang="ts">
  import type { SEOMetadata } from '$lib/seo.js';
  import { generatePersonSchema, generateWebPageSchema, generatePortfolioSchema } from '$lib/seo.js';

  /**
   * Props for SEOHead component
   * - seo: SEOMetadata object from generateSEO()
   * - pageType: Optional page identifier (for future customization)
   */
  interface Props {
    seo: SEOMetadata;
    pageType?: 'home' | 'about' | 'projects' | 'thanks';
  }

  let { seo, pageType = 'home' }: Props = $props();

  // Generate JSON-LD schemas for this page
  // These help search engines understand page content
  const personSchema = generatePersonSchema();
  const webPageSchema = generateWebPageSchema(seo);
  const portfolioSchema = generatePortfolioSchema();
</script>

<!--
  svelte:head renders all meta tags into the page's <head> section
  This is processed by SvelteKit before sending HTML to browser
  Search engines and social media sites see these tags
-->
<svelte:head>
  <!-- 
    ====== PRIMARY META TAGS ======
    These appear in Google search results and browser favorites
  -->
  <title>{seo.title}</title>
  <meta name="title" content={seo.title} />
  <meta name="description" content={seo.description} />
  <meta name="author" content={seo.author || 'Asaad Zein'} />
  
  <!-- Keywords - helps search engines understand page topic -->
  {#if seo.keywords?.length}
    <meta name="keywords" content={seo.keywords.join(', ')} />
  {/if}

  <!-- 
    ====== CANONICAL URL ======
    Tells search engines this is the main URL for this content
    Prevents duplicate content penalties
    IMPORTANT: Always have one canonical URL per page
  -->
  {#if seo.canonical}
    <link rel="canonical" href={seo.canonical} />
  {/if}

  <!-- 
    ====== OPEN GRAPH TAGS ======
    Controls how page appears when shared on Facebook, LinkedIn, Pinterest, etc
    Images should be at least 1200x630px for best results
  -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={seo.canonical || 'https://asaadzx.is-a.dev'} />
  <meta property="og:title" content={seo.ogTitle || seo.title} />
  <meta property="og:description" content={seo.ogDescription || seo.description} />
  <meta property="og:image" content={seo.ogImage || 'https://asaadzx.is-a.dev/me.png'} />
  <meta property="og:site_name" content="Asaadzx Portfolio" />

  <!-- 
    ====== TWITTER CARD TAGS ======
    Controls how page appears when shared on Twitter/X
    summary_large_image = shows large image preview
  -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={seo.canonical || 'https://asaadzx.is-a.dev'} />
  <meta property="twitter:title" content={seo.twitterTitle || seo.title} />
  <meta property="twitter:description" content={seo.twitterDescription || seo.description} />
  <meta property="twitter:image" content={seo.twitterImage || 'https://asaadzx.is-a.dev/me.png'} />
  <!-- UPDATE: Change to your Twitter handle -->
  <meta name="twitter:creator" content="@asaadzx" />

  <!-- 
    ====== ADDITIONAL SEO SETTINGS ======
  -->
  <!-- Canonical (second declaration for compatibility) -->
  <link rel="canonical" href={seo.canonical || 'https://asaadzx.is-a.dev'} />
  
  <!-- Tell search engines to index and follow links -->
  <meta name="robots" content="index, follow" />
  
  <!-- Page language -->
  <meta name="language" content="English" />
  
  <!-- Locale for international SEO -->
  <meta property="og:locale" content="en_US" />

  <!-- 
    ====== GOOGLE VERIFICATION ======
    UPDATE: Replace with your own from Google Search Console
    1. Go to google.com/webmasters
    2. Add your site
    3. Choose "HTML tag" verification method
    4. Copy the content value
    5. Paste it below to replace the existing value
  -->
  <meta name="google-site-verification" content="x5DJcP372SlUo0j_btZ7xjQxzc16Ko6LReY6-dAMCAg" />

  <!-- 
    ====== JSON-LD STRUCTURED DATA ======
    Search engines use this to create rich snippets (cards with extra info)
    These are hidden in page source but processed by search engines
    
    Types included:
    - Person: Information about you as developer
    - WebPage: Information about this specific page
    - Website: Information about your entire site
  -->
  
  <!-- Person schema - appears as knowledge card in search results -->
  <script type="application/ld+json">
    {JSON.stringify(personSchema)}
  </script>
  
  <!-- WebPage schema - helps understand page purpose -->
  <script type="application/ld+json">
    {JSON.stringify(webPageSchema)}
  </script>
  
  <!-- Website schema - identifies your site as a portfolio -->
  <script type="application/ld+json">
    {JSON.stringify(portfolioSchema)}
  </script>

  <!-- 
    ====== ARTICLE METADATA (OPTIONAL) ======
    Used if this page is a blog post or article
    Currently only shown if seo.publishedDate is set
  -->
  {#if seo.publishedDate}
    <meta property="article:published_time" content={seo.publishedDate} />
  {/if}
  {#if seo.modifiedDate}
    <meta property="article:modified_time" content={seo.modifiedDate} />
  {/if}
</svelte:head>
