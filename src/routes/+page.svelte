<script lang="ts">
    import SEOHead from "$lib/Components/SEOHead.svelte";
    import Hero from "$lib/sections/Hero.svelte";
    import About from "$lib/sections/About.svelte";
    import Gallery from "$lib/sections/Gallery.svelte";
    import Contact from "$lib/sections/Contact.svelte";

    let { data } = $props();
</script>

<SEOHead seo={data.seo} />

<div class="flex items-center justify-center p-6 sm:p-20 md:p-40 min-h-screen">
    <div class="w-full max-w-4xl">
        <Hero />
        <About />
        <Gallery />
        <Contact />
    </div>
</div>
