<script lang="ts">
    // @ts-nocheck
    import BlurFade from "$lib/Components/BlurFade.svelte";
    import LetterPullUp from "$lib/Components/LetterPullUp.svelte";
    import InteractiveHover from "$lib/Components/InteractiveHover.svelte";
    import SparklesText from "$lib/Components/SparklesText.svelte";
    import { siteConfig } from "$lib/config.js";
</script>

<section id="hero">
    <BlurFade delay={0.02 * 1}>
        <div
            class="rounded-lg overflow-hidden p-2 flex items-center justify-center"
        >
            {#if siteConfig.avatarUrl}
                <img
                    src={siteConfig.avatarUrl}
                    alt={siteConfig.name}
                    class="h-44 w-44 rounded-full object-cover"
                />
            {/if}
            <div class="flex flex-col justify-start ml-2">
                <div class="text-text font-medium text-3xl">
                    {siteConfig.name}
                </div>
                <div class="text-text/60 text-2xl">{siteConfig.username}</div>
            </div>
        </div>
    </BlurFade>

    <section class="flex flex-col items-center justify-center w-full mb-8 sm:mb-16">
        <BlurFade delay={0.05}>
            <LetterPullUp
                words="Hi There,"
                class="text-3xl font-bold tracking-tighter sm:text-5xl text-text mb-4 mt-6 sm:mb-9 sm:mt-10 xl:text-6xl/none"
            />
            <LetterPullUp
                words="I am {siteConfig.name}"
                class="text-3xl font-bold tracking-tighter sm:text-5xl text-text mb-4 mt-6 sm:mb-9 sm:mt-10 xl:text-6xl/none"
            />
        </BlurFade>
        <BlurFade delay={0.15 * 1}>
            <span
                class="text-text mb-4 mt-6 sm:mb-9 sm:mt-10 text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none"
            >
                {siteConfig.tagline}
            </span>
        </BlurFade>
    </section>

    <BlurFade delay={0.03 * 3}>
        <div class="flex justify-center mx-auto space-x-10 flex-wrap gap-y-4">
            {#each siteConfig.socialLinks as link}
                <InteractiveHover
                    text={link.label}
                    icon_class={link.icon}
                    class="text-text"
                    href={link.url}
                />
            {/each}
        </div>
    </BlurFade>

    <BlurFade delay={0.03 * 3}>
        <SparklesText
            text={siteConfig.title}
            class="text-center text-xl mt-16 sm:mt-32 text-text sm:text-2xl md:text-7xl md:leading-[5rem]"
        />
    </BlurFade>
</section>
