<script lang="ts">
  let isDark = $state(false);

  function toggle() {
    isDark = !isDark;
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  function init() {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      isDark = true;
      document.documentElement.classList.add("dark");
    }
  }

  $effect(() => {
    init();
  });
</script>

<button
  onclick={toggle}
  aria-label="Toggle dark mode"
  class="fixed top-4 right-4 z-50 w-14 h-7 rounded-full cursor-pointer transition-colors duration-300 {isDark ? 'bg-accent' : 'bg-primary/30'} shadow-lg hidden sm:block"
>
  <div
    class="w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 {isDark ? 'translate-x-8' : 'translate-x-1'}"
  >
    {#if isDark}
      <i class="fa-solid fa-moon text-[10px]" style="color: #04060b"></i>
    {:else}
      <i class="fa-solid fa-sun text-[10px]" style="color: #213169"></i>
    {/if}
  </div>
</button>
