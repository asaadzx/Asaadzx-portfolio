<script lang="ts">
  import type { PageData } from './$types.js';
  import type { Project } from '$lib/projects.js';
  
  // Components
  import BlurFade from "$lib/Components/BlurFade.svelte";
  import Dock from "$lib/Components/Dock.svelte";
  import DockIcon from "$lib/Components/DockIcon.svelte";
  import LetterPullUp from "$lib/Components/LetterPullUp.svelte";
  import SmoothCursor from "$lib/Components/SmoothCursor.svelte";
  import SEOHead from "$lib/Components/SEOHead.svelte";

  type ProjectCategory = "AI" | "Software" | "Systems" | "Web";

  interface NavLink {
    text: string;
    icon_class: string;
    href: string;
  }

  const NAV_LINKS: NavLink[] = [
    { text: "Home", icon_class: "fa-solid fa-house", href: "/" },
    { text: "About", icon_class: "fa-solid fa-address-card", href: "/about" },
    { text: "Projects", icon_class: "fa-solid fa-briefcase", href: "/projects" }
  ];

  const CATEGORIES: { label: string; value: ProjectCategory }[] = [
    { label: "AI", value: "AI" },
    { label: "Software", value: "Software" },
    { label: "Systems", value: "Systems" },
    { label: "Web", value: "Web" }
  ];

  let { data }: { data: PageData } = $props();

  let projects: Project[] = $derived(data.projects || []);
  let selectedCategory: ProjectCategory | "" = $state("");

  let filteredProjects: Project[] = $derived(
    selectedCategory
      ? projects.filter(p => p.category === selectedCategory)
      : projects
  );
</script>

<SEOHead seo={data.seo} pageType="projects" />

<SmoothCursor />

<div
  class="flex flex-col items-center p-4 sm:p-8 md:p-12 min-h-screen w-full max-h-full max-w-full not-dark:bg-amber-600 dark:bg-amber-900"
>
  <section id="header" class="z-50 mt-10 text-4xl text-center mb-8">
    <BlurFade delay={0.15}>
      <LetterPullUp
        class="text-black dark:text-orange-200 w-full text-3xl sm:text-4xl md:text-5xl"
        words="My Amazing Projects"
      />
    </BlurFade>
  </section>

  <!-- Tag Filter Section -->
  <BlurFade delay={0.25}>
    <div class="z-50 mt-8 flex flex-wrap justify-center gap-3 max-w-4xl px-4 mb-12">
      <button
        onclick={() => (selectedCategory = "")}
        class="px-4 py-2 rounded-full transition-all duration-300 {selectedCategory === ""
          ? "bg-orange-500 dark:bg-orange-400 text-white font-semibold"
          : "bg-white/20 dark:bg-black/30 text-black dark:text-gray-300 hover:bg-white/30 dark:hover:bg-black/40"}"
      >
        All Projects
      </button>
      {#each CATEGORIES as cat}
        <button
          onclick={() => (selectedCategory = cat.value)}
          class="px-4 py-2 rounded-full transition-all duration-300 {selectedCategory === cat.value
            ? "bg-orange-500 dark:bg-orange-400 text-white font-semibold"
            : "bg-white/20 dark:bg-black/30 text-black dark:text-gray-300 hover:bg-white/30 dark:hover:bg-black/40"}"
        >
          {cat.label}
        </button>
      {/each}
    </div>
  </BlurFade>

  <!-- Projects Grid -->
  <section class="z-50 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-4 mb-40">
    {#each filteredProjects as project, i}
      <BlurFade delay={0.15 + i * 0.1}>
        <a href={project.url} target="_blank" rel="noopener noreferrer" class="block h-full group">
          <div class="bg-white/20 dark:bg-black/30 rounded-2xl overflow-hidden shadow-lg h-full flex flex-col hover:shadow-2xl transition-all duration-300 hover:bg-white/30 dark:hover:bg-black/40 hover:-translate-y-2">
            
            <!-- Project Preview Image -->
            {#if project.preview}
              <div class="relative w-full h-48 overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600">
                <img
                  src={project.preview}
                  alt={project.name}
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {#if project.featured}
                  <div class="absolute top-3 right-3 bg-yellow-400 dark:bg-yellow-300 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <i class="fa-solid fa-star"></i>
                    Featured
                  </div>
                {/if}
              </div>
            {:else}
              <div class="relative w-full h-32 overflow-hidden bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 dark:from-orange-600 dark:via-orange-500 dark:to-yellow-500 flex items-center justify-center">
                <div class="absolute inset-0 opacity-30 dark:opacity-20" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px);"></div>
                <div class="relative z-10 text-center">
                  <i class="fa-solid fa-lightbulb text-4xl text-white opacity-70 mb-2"></i>
                </div>
                {#if project.featured}
                  <div class="absolute top-3 right-3 bg-yellow-400 dark:bg-yellow-300 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 z-20">
                    <i class="fa-solid fa-star"></i>
                    Featured
                  </div>
                {/if}
              </div>
            {/if}

            <!-- Project Content -->
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold dark:text-orange-200 text-black mb-2">{project.name}</h3>
              
              <p class="text-sm text-black dark:text-gray-300 flex-grow mb-4">
                {project.description}
              </p>

              <!-- Tags -->
              {#if project.tags && project.tags.length > 0}
                <div class="flex flex-wrap gap-2 mb-4">
                  {#each project.tags.slice(0, 3) as tag}
                    <span class="text-xs bg-orange-200/50 dark:bg-orange-800/30 text-black dark:text-orange-200 px-2.5 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  {/each}
                  {#if project.tags.length > 3}
                    <span class="text-xs text-gray-500 dark:text-gray-400 px-2.5 py-1">
                      +{project.tags.length - 3} more
                    </span>
                  {/if}
                </div>
              {/if}

              <!-- Language/Tech Stack -->
              <p class="text-xs text-black dark:text-gray-400 font-mono border-t border-white/10 dark:border-black/20 pt-3">
                <i class="fa-solid fa-code text-orange-500 mr-2"></i>{project.language}
              </p>
            </div>

            <!-- CTA Link -->
            <div class="px-6 pb-6">
              <div class="flex items-center justify-between group/link">
                <span class="text-sm font-semibold text-black dark:text-orange-300">Visit Project</span>
                <i class="fa-solid fa-arrow-right text-black dark:text-orange-300 group-hover/link:translate-x-1 transition-transform"></i>
              </div>
            </div>
          </div>
        </a>
      </BlurFade>
    {/each}
  </section>

  <!-- No Results Message -->
  {#if filteredProjects.length === 0}
    <div class="z-50 mt-12 text-center">
      <p class="text-2xl text-black dark:text-orange-200 font-semibold mb-2">No projects found</p>
      <p class="text-black dark:text-gray-300">Try selecting a different tag</p>
    </div>
  {/if}

  <!-- Bottom Navigation -->
  <div
    class="fixed bottom-0 left-0 right-0 flex items-center justify-center z-50 bg-background/80 backdrop-blur-sm py-2"
  >
    <Dock
      let:magnification
      let:distance
      let:mouseX
      magnification={60}
      distance={110}
      direction="bottom"
      class="max-w-fit"
    >
      {#each NAV_LINKS as link}
        <DockIcon
          {magnification}
          {distance}
          {mouseX}
          class="bg-black/10 dark:bg-amber-50 dark:opacity-45 p-3"
        >
          <a href={link.href} aria-label={link.text}>
            <i class="{link.icon_class} text-2xl"></i>
          </a>
        </DockIcon>
      {/each}
    </Dock>
  </div>
</div>
