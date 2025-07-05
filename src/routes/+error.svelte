<script>
  // Imports Coastal UI - fixed icon names
  import { ChevronLeft, ChevronRight } from "lucide-svelte";
  import { Newspaper } from "lucide-svelte";
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  // Original imports Svelte Magic UI components
  import BlurFade from "$lib/Components/BlurFade.svelte";
  import SmoothCursor from "$lib/Components/SmoothCursor.svelte"
  import LatterPullUp from "$lib/Components/LetterPullUp.svelte";
  import RainbowButton from "$lib/Components/RainbowButton.svelte";
  import CoolMode from "../lib/Components/CoolMode.svelte";
  import InteractiveHover from "../lib/Components/InteractiveHover.svelte";
  import SparklesText from "../lib/Components/SparklesText.svelte";
  import Dock from "$lib/Components/Dock.svelte";
  import DockIcon from "$lib/Components/DockIcon.svelte";
  import AnimatedButton from "$lib/Components/AnimatedButton.svelte";

  function goHome() {
    setTimeout(() => {
      goto('/');
    }, 800)
  }

  function goBack() {
    setTimeout(() => {
      window.history.back();
    }, 800)
  }

  // Get error information from the page store
  $: error = $page.error;
  $: status = $page.status;
  $: statusText = status === 404 ? "Not Found" : status === 500 ? "Internal Server Error" : "Error";

  let links = [
    {
      text: "Home",
      icon_class: "fa-solid fa-house",
      href: "/",
    },
    {
      text: "About",
      icon_class: "fa-solid fa-address-card",
      href: "/about",
    },
    {
      text: "Projects",
      icon_class: "fa-solid fa-briefcase",
      href: "/projects",
    },
    {
      text: "Jokes",
      icon_class: "fa-solid fa-face-laugh-wink",
      href: "https://edition.cnn.com/interactive/2019/06/us/dad-joke-generator-trnd/",
    }
  ];

  let navLinks = links.slice(0, 4);
</script>

<div class="flex items-center justify-center p-4 sm:p-20 md:p-40 min-h-screen not-dark:bg-amber-600 dark:bg-amber-900">
  <!-- Navigation Dock -->
  <div class="fixed bottom-0 left-0 right-0 flex items-center justify-center z-10 bg-background/80 backdrop-blur-sm py-2">
    <Dock
      let:magnification
      let:distance
      let:mouseX
      magnification={60}
      distance={110}
      direction="bottom"
      class="max-w-fit"
    >
      {#each navLinks as link}
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

  <!-- Main Content -->
  <div class="w-full max-w-4xl text-center">
    <!-- Error Status with Sparkles -->
    <BlurFade delay={0.1}>
      <SparklesText
        text={status?.toString() || "404"}
        class="text-8xl md:text-9xl font-bold text-black dark:text-orange-200 mb-8"
        colors={{
          first: "#FF6B6B",
          second: "#4ECDC4"
        }}
        sparklesCount={15}
      />
    </BlurFade>

    <!-- Error Message -->
    <BlurFade delay={0.2}>
      <LatterPullUp
        words={statusText || "Oops! Page Not Found"}
        class="text-3xl font-bold tracking-tighter sm:text-5xl text-black dark:text-orange-200 mb-6 xl:text-6xl/none"
      />
    </BlurFade>

    <!-- Error Details -->
    {#if error}
      <BlurFade delay={0.25}>
        <div class="bg-white/20 dark:bg-black/30 p-6 rounded-lg max-w-2xl mx-auto mb-8">
          <h3 class="text-xl font-bold text-black dark:text-orange-200 mb-3">Error Details:</h3>
          <p class="text-black dark:text-orange-200 text-sm font-mono break-words">
            {error.message || error.toString()}
          </p>
          {#if error && 'stack' in error && error.stack}
            <details class="mt-4">
              <summary class="cursor-pointer text-black dark:text-orange-200 text-sm font-semibold">
                Stack Trace
              </summary>
              <pre class="text-xs text-black dark:text-orange-200 mt-2 text-left overflow-auto max-h-32">
                {error.stack}
              </pre>
            </details>
          {/if}
        </div>
      </BlurFade>
    {/if}

    <!-- Description -->
    <BlurFade delay={0.3}>
      <p class="text-xl text-black dark:text-orange-200 mb-12 max-w-2xl mx-auto">
        {#if status === 404}
          The page you're looking for seems to have wandered off into the digital void. 
          Don't worry, even the best explorers get lost sometimes! 🗺️
        {:else if status >= 500}
          Something went wrong on our end. We're working to fix it! 🔧
        {:else}
          Something unexpected happened. Let's get you back on track! 🚀
        {/if}
      </p>
    </BlurFade>

    <!-- Action Buttons -->
    <BlurFade delay={0.4}>
      <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
        <!-- Go Home Button -->
        <CoolMode options={{ particleCount: 8 }}>
          <AnimatedButton
            buttonColor="#FF6B6B"
            buttonTextColor="#ffffff"
            subscribeStatus={false}
            on:click={goHome}
          >
            <span slot="initialText" class="flex items-center gap-2">
              <i class="fa-solid fa-home"></i>
              Go Home
            </span>
            <span slot="changeText" class="flex items-center gap-2">
              <i class="fa-solid fa-check"></i>
              Going Home
            </span>
          </AnimatedButton>
        </CoolMode>

        <!-- Go Back Button -->
        <CoolMode options={{ particleCount: 6 }}>
          <AnimatedButton
            buttonColor="#4ECDC4"
            buttonTextColor="#ffffff"
            subscribeStatus={false}
            on:click={goBack}
          >
            <span slot="initialText" class="flex items-center gap-2">
              <ChevronLeft class="h-5 w-5" />
              Go Back
            </span>
            <span slot="changeText" class="flex items-center gap-2">
              <i class="fa-solid fa-arrow-left"></i>
              Going Back
            </span>
          </AnimatedButton>
        </CoolMode>
      </div>
    </BlurFade>

    <!-- Fun Interactive Elements -->
    <BlurFade delay={0.5}>
      <div class="flex justify-center gap-8 mb-8">
        <InteractiveHover
          text="Projects"
          icon_class="fa-solid fa-briefcase"
          class="text-black dark:text-white"
          href="/projects"
        />
        <InteractiveHover
          text="About"
          icon_class="fa-solid fa-address-card"
          class="text-black dark:text-white"
          href="/about"
        />
        <InteractiveHover
          text="Jokes"
          icon_class="fa-solid fa-face-laugh-wink"
          class="text-black dark:text-white"
          href="https://edition.cnn.com/interactive/2019/06/us/dad-joke-generator-trnd/"
        />
      </div>
    </BlurFade>

    <!-- Fun Message -->
    <BlurFade delay={0.6}>
      <div class="bg-white/20 mb-48 dark:bg-black/30 p-6 rounded-lg max-w-md mx-auto">
        <Newspaper class="h-8 w-8 mx-auto mb-3 text-black dark:text-orange-200" />
        <p class="text-black dark:text-orange-200 text-sm">
          {#if status === 404}
            "Not all those who wander are lost." - J.R.R. Tolkien (but you might be) 😔
          {:else}
            "The best way to find yourself is to lose yourself in the service of others." 
            - Mahatma Gandhi (or maybe just click one of the buttons above) 🆙
          {/if}
        </p>
      </div>
    </BlurFade>
  </div>

  <!-- Smooth Cursor -->
  <SmoothCursor />
</div>

<style>
  :global(body) {
    overflow-x: hidden;
  }
</style>

