
<script>
    // Original imports Svelte Magic UI components
    import BlurFade from "$lib/Components/BlurFade.svelte";
    import Dock from "$lib/Components/Dock.svelte";
    import DockIcon from "$lib/Components/DockIcon.svelte";
    import LatterPullUp from "$lib/Components/LetterPullUp.svelte";

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

<div
class="flex p-4 sm:p-20 md:p-40 min-h-screen not-dark:bg-amber-600 dark:bg-amber-900"
>
<section id="header" class="mx-auto w-full">
    <BlurFade delay={0.25}>
        <h2
        class="text-3xl font-bold tracking-tighter sm:text-5xl text-black  dark:text-orange-200 mb-9 mt-10 xl:text-6xl/none"
        >
        Hello World 👋
        </h2>
    </BlurFade>
    <BlurFade delay={0.25 * 2}>
        <span
        class="text-black dark:text-orange-200 mb-9 mt-10 text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none"
        >
        Nice to meet you
        </span>
    </BlurFade>
</section>
  <div
    class="fixed bottom-0 left-0 right-0 flex items-center justify-center z-10 bg-background/80 backdrop-blur-sm py-2"
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
  <div class="happy-monkey-regular flex items-center">
    <LatterPullUp
      class="text-black dark:text-white dark:text-orange-200 text-2xl "
      words="I am Asaad Zein a 14 year old AI Engineer and 3D Artist"
      />
    </div>
</div>
