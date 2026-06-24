<script lang="ts">
    import { cn } from "../utils.js";
    let _class: string = "";
    export { _class as class };
    export let text: string = "Button";
    export let icon_class = "";
    let icon = icon_class + " text-2xl"; 
    export let href: string = "#";
</script>
  
<a
    class={cn(
      "group relative w-11 h-12 sm:w-32 cursor-pointer overflow-hidden rounded-full border bg-background p-1.5 sm:p-2 text-center font-semibold",
      _class
    )}
    href={href}
    {...$$restProps}
>
    <span
      class="relative translate-x-1 transition-all duration-300 hidden sm:inline-block group-hover:translate-x-12 group-hover:opacity-0"
    >
      {text}
    </span>
    <div
      class="absolute top-0 z-10 flex h-full w-full items-center justify-center gap-2 text-text sm:translate-x-12 sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover:-translate-x-1 sm:group-hover:opacity-100"
    >
      <span class="hidden sm:relative">{text}</span>
      <i class={icon}></i>
      <i class="fa-solid fa-arrow-right hidden relative w-0.5 sm:inline-block translate-x-1 transition-all duration-300"></i>
    </div>
</a>
  