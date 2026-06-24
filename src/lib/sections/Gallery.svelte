<script lang="ts">
// @ts-nocheck
  import { ChevronLeft, ChevronRight } from "lucide-svelte";
  import BlurFade from "$lib/Components/BlurFade.svelte";
  import LetterPullUp from "$lib/Components/LetterPullUp.svelte";
  import { base } from "$app/paths";
  import { siteConfig } from "$lib/config.js";

  let currentSlide = $state(0);
</script>

<section id="gallery" class="mt-20 sm:mt-40 mb-12 sm:mb-20">
  <BlurFade delay={0.15}>
    <LetterPullUp
      words="Gallery"
      class="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-text mb-4 sm:mb-6 xl:text-6xl/none"
    />
  </BlurFade>

  <BlurFade delay={0.03 * 6}>
      <div class="h-[250px] sm:h-[400px] w-full relative group">
      <div class="absolute inset-0 items-center overflow-hidden rounded-2xl w-full">
        <div
          class="flex transition-transform duration-400 ease-in-out h-full w-full"
          style="transform: translateX(-{currentSlide * 100}%)"
        >
          {#each siteConfig.projects as project}
            {#if project.page}
              <a href="{base}/projects/{project.slug}" class="h-full w-full min-w-full block">
                <img
                  src={project.image}
                  loading="lazy"
                  class="h-full w-full object-cover"
                  alt={project.name}
                />
              </a>
            {:else}
              <img
                src={project.image}
                loading="lazy"
                class="h-full w-full min-w-full object-cover"
                alt={project.name}
              />
            {/if}
          {/each}
        </div>
      </div>

      <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center space-x-2">
        {#each siteConfig.projects as _, i}
          <div
            class="w-1.5 h-1.5 rounded-full transition-all {currentSlide === i
              ? 'bg-text'
              : 'bg-text/30 scale-75'}"
          ></div>
        {/each}
      </div>

      <button
        onclick={() =>
          (currentSlide =
            (currentSlide - 1 + siteConfig.projects.length) %
            siteConfig.projects.length)}
        class="absolute opacity-40 group-hover:opacity-100 cursor-pointer transition left-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-background/80 flex items-center justify-center"
      >
        <ChevronLeft class="h-4.5 w-3.5 text-text" />
      </button>

      <button
        onclick={() =>
          (currentSlide =
            (currentSlide + 1) % siteConfig.projects.length)}
        class="absolute opacity-40 group-hover:opacity-100 cursor-pointer transition right-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-background/80 flex items-center justify-center"
      >
        <ChevronRight class="h-3.5 w-3.5 text-text" />
      </button>
    </div>
  </BlurFade>
</section>
