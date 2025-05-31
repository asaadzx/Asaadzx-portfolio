<script lang="ts">
    import { cn } from "../utils.js";
    import { AnimatePresence, Motion } from "svelte-motion";
    import { onMount } from "svelte";
  
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

    function handleTouchStart() {
      if (!isAnimating) {
        isAnimating = true;
        // First, clear the text with a fade out
        wordsspilit = [];
        
        // Add a small delay before starting the new animation
        setTimeout(() => {
          // Split the text and add some random initial positions for a more dynamic effect
          wordsspilit = words.split("");
          framerProps = {
            hidden: { 
              opacity: 0, 
              x: Math.random() > 0.5 ? -30 : 30,
              y: Math.random() > 0.5 ? -20 : 20,
              scale: 0.8
            },
            visible: { 
              opacity: 1, 
              x: 0,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 15
              }
            }
          };
          
          // Reset the animation state after all characters have animated
          setTimeout(() => {
            isAnimating = false;
            // Reset to default animation props
            framerProps = {
              hidden: { opacity: 0, x: -20, y: 0, scale: 1 },
              visible: { opacity: 1, x: 0, y: 0, scale: 1 }
            };
          }, duration * 1000 + wordsspilit.length * delayMultiple * 1000);
        }, 100);
      }
    }

    onMount(() => {
      if (container) {
        container.addEventListener('touchstart', handleTouchStart);
        return () => {
          container.removeEventListener('touchstart', handleTouchStart);
        };
      }
    });
</script>
  
<div 
  bind:this={container}
  class="flex justify-center space-x-[0.05rem] cursor-pointer touch-manipulation select-none max-w-fit mx-auto"
  on:keydown={(e) => e.key === 'Enter' && handleTouchStart()}
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
    <h1 class="text-lg w-2 sm:text-xl md:text-2xl">{emojie}</h1>
  </AnimatePresence>
</div>

<style>
  .touch-manipulation {
    touch-action: manipulation;
  }
</style>
  