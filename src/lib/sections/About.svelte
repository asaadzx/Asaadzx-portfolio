<script lang="ts">
    // @ts-nocheck
    import Icon from "@iconify/svelte";
    import BlurFade from "$lib/Components/BlurFade.svelte";
    import LetterPullUp from "$lib/Components/LetterPullUp.svelte";
    import { siteConfig } from "$lib/config.js";
</script>

<section id="about" class="mt-20 sm:mt-40 mb-12 sm:mb-20">
    <BlurFade delay={0.15}>
        <LetterPullUp
            words="My Background"
            class="text-2xl font-bold tracking-tighter sm:text-5xl text-text mb-6 sm:mb-12 xl:text-6xl/none"
        />
    </BlurFade>

    <BlurFade delay={0.2}>
        <p
            class="text-text/80 text-lg leading-relaxed max-w-3xl mx-auto text-center"
        >
            {siteConfig.bio}
        </p>
    </BlurFade>

    {#if siteConfig.skills.length > 0}
        <BlurFade delay={0.25}>
            <div
                class="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-2xl mx-auto mt-12 sm:mt-16"
            >
                {#each siteConfig.skills as skill}
                    <div class="flex flex-col items-center gap-2 w-20 group">
                        <div
                            class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20 dark:group-hover:bg-accent/30 group-hover:shadow-lg"
                        >
                            <Icon
                                icon={skill.icon}
                                class="text-xl sm:text-2xl text-text transition-all duration-300 group-hover:scale-110"
                            />
                        </div>
                        <span
                            class="text-[10px] sm:text-xs text-text/70 text-center font-medium leading-tight transition-colors duration-300 group-hover:text-text"
                            >{skill.name}</span
                        >
                    </div>
                {/each}
            </div>
        </BlurFade>
    {/if}

    {#if siteConfig.cvUrl}
        <BlurFade delay={0.3}>
            <div class="flex justify-center mt-12 sm:mt-16">
                <a
                    href={siteConfig.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-rose-300 text-background font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                    <i
                        class="fa-solid fa-file-lines transition-all duration-300 group-hover:scale-110"
                    ></i>
                    <span
                        class="transition-all duration-300 group-hover:tracking-wider"
                        >View CV</span
                    >
                </a>
            </div>
        </BlurFade>
    {/if}
</section>
