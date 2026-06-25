<script lang="ts">
    // @ts-nocheck
    import BlurFade from "$lib/Components/BlurFade.svelte";
    import { siteConfig } from "$lib/config.js";
</script>

<section id="contact" class="mt-20 sm:mt-40 mb-24 sm:mb-36">
    <BlurFade delay={0.2}>
        <h2 class="text-3xl font-bold text-center text-text mb-8">
            Get In Touch
        </h2>
        <p class="text-center text-text mb-8 text-lg">
            Feel free to reach out!
        </p>
        <div class="flex justify-center">
            <a
                href="mailto:{siteConfig.email}"
                class="inline-flex items-center gap-2 px-4 sm:px-6 py-3 rounded-lg bg-secondary hover:bg-rose-300 text-text font-semibold shadow-md transition-all duration-200 text-sm sm:text-base"
            >
                <i class="fa-solid fa-envelope"></i>
                <span class="truncate max-w-[200px] sm:max-w-none"
                    >{siteConfig.email}</span
                >
            </a>
        </div>
    </BlurFade>
</section>

<footer class="text-center py-8 border-t border-text/10">
    <BlurFade delay={0.3}>
        <p class="text-sm text-text">
            Built with <span class="text-accent">❤</span> using SvelteKit
        </p>
        <a
            href="https://github.com/asaadzx/Portfolio-Template"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-accent transition-colors text-4xl">source</a
        >
    </BlurFade>
</footer>
