<script lang="ts">
  import { cn } from "../utils.js";
  import { AnimatePresence, Motion } from "svelte-motion";

  export let words = "Letter Pull Up";
  export let delay = 0.12;
  let className: any = "";
  export { className as class };
  let pullupVariant = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay },
    }),
  };
  let letters = words.split("");
</script>

<div class="flex justify-center">
    <!-- <AnimatePresence let:item list={[{ key: words }]}> -->
  {#each letters as letter, i}
      <Motion
        variants={pullupVariant}
        initial="hidden"
        animate="visible"
        custom={i}
        let:motion
      >
        <h2
          class={cn(
            "font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-xl md:leading-[5rem]",
            className
          )}
          use:motion
        >
          {#if letter === " "}
            <span>&nbsp;</span>
          {:else}
            {letter}
          {/if}
        </h2>
      </Motion>
      {/each}
    <!-- </AnimatePresence> -->
</div>
