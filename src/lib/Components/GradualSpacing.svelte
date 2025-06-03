<script lang="ts">
    import { cn } from "../utils.js";
    import { AnimatePresence, Motion } from "svelte-motion";
    import { onMount } from "svelte";
    import gsap from "gsap";
  
    let className: any = "Gradual Spacing";
    export { className as class };
  
    export let words = "Gradual Spacing";
    export let emojie = "👋";
    export let duration = 0.5;
    export let delayMultiple = 0.04;
    export let framerProps = {
      hidden: { opacity: 0, x: -20, y: 0, scale: 1 },
      visible: { opacity: 1, x: 0, y: 0, scale: 1 }
    } as {
      hidden: { opacity: number; x: number; y: number; scale: number };
      visible: { opacity: number; x: number; y: number; scale: number; transition?: any };
    };
    let wordsspilit = words.split("");
    let isAnimating = false;
    let container: HTMLElement;
    let emojiElement: HTMLElement;

    function animateEmoji() {
      if (emojiElement) {
        gsap.to(emojiElement, {
          rotation: 15,
          duration: 0.9,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1
        });
      }
    }

    
    onMount(() => {
      if (container) {
        animateEmoji();
      }
    });
</script>
  
<div 
  bind:this={container}
  class="flex justify-center space-x-[0.05rem] cursor-pointer touch-manipulation select-none max-w-fit mx-auto"
  on:touchstart={animateEmoji}
  on:keydown={(e) => e.key === 'Enter' && animateEmoji()}
  role="button"
  tabindex="0"
>
  <AnimatePresence let:item list={[{ key: wordsspilit }]}>
    {#each wordsspilit as char, i}
      <Motion
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={framerProps}
        transition={{
          duration: duration,
          delay: i * delayMultiple,
        }}
        let:motion
      >
        <span use:motion class={cn("drop-shadow-sm text-sm sm:text-base md:text-lg tracking-[-0.05em]", className)}>
          {#if char === " "}
            <span>&nbsp;</span>
          {:else}
            {char}
          {/if}
        </span>
      </Motion>
    {/each}
    <span bind:this={emojiElement} class="text-sm w-2 sm:text-lg md:text-lg inline-block">{emojie}</span>
  </AnimatePresence>
</div>

<style>
  .touch-manipulation {
    touch-action: manipulation;
  }
</style>
  