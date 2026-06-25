<script>
// @ts-nocheck
  import { ChevronLeft } from "lucide-svelte";
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { page } from '$app/stores';

  import BlurFade from "$lib/Components/BlurFade.svelte";
  import LetterPullUp from "$lib/Components/LetterPullUp.svelte";
  import CoolMode from "$lib/Components/CoolMode.svelte";
  import InteractiveHover from "$lib/Components/InteractiveHover.svelte";
  import SparklesText from "$lib/Components/SparklesText.svelte";
  import AnimatedButton from "$lib/Components/AnimatedButton.svelte";

  import { siteConfig } from "$lib/config.js";

  function goHome() {
    setTimeout(() => { goto(base || '/'); }, 800);
  }

  function goBack() {
    setTimeout(() => { window.history.back(); }, 800);
  }

  let currentPage = $page;
  let error = $derived(currentPage.error);
  let status = $derived(currentPage.status);
  let statusText = $derived(status === 404 ? "Not Found" : status === 500 ? "Internal Server Error" : "Error");
</script>

<div class="flex items-center justify-center p-4 sm:p-20 md:p-40 min-h-screen">
  <div class="w-full max-w-4xl text-center">
    <BlurFade delay={0.1}>
      <SparklesText
        text={status?.toString() || "404"}
        class="text-8xl md:text-9xl font-bold text-text mb-8"
        colors={{ first: "#869ce9", second: "#213169" }}
        sparklesCount={15}
      />
    </BlurFade>

    <BlurFade delay={0.2}>
      <LetterPullUp
        words={statusText || "Oops! Page Not Found"}
        class="text-3xl font-bold tracking-tighter sm:text-5xl text-text mb-6 xl:text-6xl/none"
      />
    </BlurFade>

    {#if error}
      <BlurFade delay={0.25}>
        <div class="bg-background/80 dark:bg-background/20 p-6 rounded-lg max-w-2xl mx-auto mb-8">
          <h3 class="text-xl font-bold text-text mb-3">Error Details:</h3>
          <p class="text-text text-sm font-mono break-words">
            {error.message || error.toString()}
          </p>
          {#if error && 'stack' in error && error.stack}
            <details class="mt-4">
              <summary class="cursor-pointer text-text text-sm font-semibold">Stack Trace</summary>
              <pre class="text-xs text-text mt-2 text-left overflow-auto max-h-32">{error.stack}</pre>
            </details>
          {/if}
        </div>
      </BlurFade>
    {/if}

    <BlurFade delay={0.3}>
      <p class="text-xl text-text mb-12 max-w-2xl mx-auto">
        {#if status === 404}
          The page you're looking for seems to have wandered off into the digital void. Don't worry, even the best explorers get lost sometimes! 🗺️
        {:else if status >= 500}
          Something went wrong on our end. We're working to fix it! 🔧
        {:else}
          Something unexpected happened. Let's get you back on track! 🚀
        {/if}
      </p>
    </BlurFade>

    <BlurFade delay={0.4}>
      <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
        <CoolMode options={{ particleCount: 8 }}>
          <AnimatedButton
            buttonColor="#213169"
            buttonTextColor="#f4f6fb"
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

        <CoolMode options={{ particleCount: 6 }}>
          <AnimatedButton
            buttonColor="#162b79"
            buttonTextColor="#f4f6fb"
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

    <BlurFade delay={0.5}>
      <div class="flex justify-center gap-8 mb-8">
        {#each siteConfig.socialLinks.slice(0, 3) as link}
          <InteractiveHover
            text={link.label}
            icon_class={link.icon}
            class="text-text"
            href={link.url}
          />
        {/each}
      </div>
    </BlurFade>

    <BlurFade delay={0.6}>
      <div class="bg-background/80 mb-48 dark:bg-background/20 p-6 rounded-lg max-w-md mx-auto">
        <p class="text-text text-sm">
          {#if status === 404}
            "Not all those who wander are lost." - J.R.R. Tolkien (but you might be) 😔
          {:else}
            "The best way to find yourself is to lose yourself in the service of others." - Mahatma Gandhi (or maybe just click one of the buttons above) 🆙
          {/if}
        </p>
      </div>
    </BlurFade>
  </div>

</div>

<style>
  :global(body) {
    overflow-x: hidden;
  }
</style>
