<script lang="ts">
    // @ts-nocheck
    import BlurFade from "$lib/Components/BlurFade.svelte";
    import LetterPullUp from "$lib/Components/LetterPullUp.svelte";
    import SEOHead from "$lib/Components/SEOHead.svelte";
    import { base } from "$app/paths";
    import type { Project } from "$lib/config.js";

    let { data } = $props();
    let project: Project = data.project;
</script>

<SEOHead seo={data.seo} />

<div class="min-h-screen p-6 sm:p-20 md:p-40">
    <div class="max-w-3xl mx-auto">
        <a
            href="{base}/#gallery"
            class="inline-flex items-center gap-1 text-text/60 hover:text-text mb-8 text-xl transition-colors"
        >
            <i class="fa-solid fa-arrow-left text-xs"></i>
            Back to Gallery
        </a>

        <BlurFade delay={0.05}>
            <img
                src={project.image}
                alt={project.name}
                class="w-full h-auto rounded-2xl mb-10 shadow-lg"
            />
        </BlurFade>

        <BlurFade delay={0.1}>
            <LetterPullUp
                words={project.name}
                class="text-2xl sm:text-4xl font-bold tracking-tighter text-text mb-4"
            />
        </BlurFade>

        <BlurFade delay={0.15}>
            <p class="text-text/80 text-lg leading-relaxed mb-3">
                {project.description}
            </p>
        </BlurFade>

        {#if project.longDescription}
            <BlurFade delay={0.2}>
                <p class="text-text/70 leading-relaxed mb-8">
                    {project.longDescription}
                </p>
            </BlurFade>
        {/if}

        {#if project.tags.length > 0}
            <BlurFade delay={0.25}>
                <div class="flex flex-wrap gap-3 mb-8">
                    {#each project.tags as tag}
                        <span
                            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border border-primary/30 text-text/70 hover:text-text hover:border-primary hover:bg-primary/5 transition-all duration-300"
                        >
                            <i class="fa-solid fa-tag text-[10px] opacity-60"></i>
                            {tag}
                        </span>
                    {/each}
                </div>
            </BlurFade>
        {/if}

        {#if project.links.length > 0}
            <BlurFade delay={0.3}>
                <div class="flex flex-wrap gap-4">
                    {#each project.links as link}
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-secondary/40 text-text font-semibold text-sm transition-all duration-300 hover:border-secondary hover:bg-secondary/10 hover:scale-105 hover:shadow-lg"
                        >
                            {link.label}
                            <i
                                class="fa-solid fa-arrow-up-right-from-square text-sm transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            ></i>
                        </a>
                    {/each}
                </div>
            </BlurFade>
        {/if}
    </div>
</div>
