<script>
  // Original imports Svelte Magic UI components
  import BlurFade from "$lib/Components/BlurFade.svelte";
  import Dock from "$lib/Components/Dock.svelte";
  import DockIcon from "$lib/Components/DockIcon.svelte";
  import FlickeringGrid from "$lib/Components/FlickeringGrid.svelte";
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
class="flex p-4 sm:p-20 md:p-40 min-h-screen w-screen max-h-full max-w-full not-dark:bg-amber-600 dark:bg-amber-900"
>
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
  <div class="w-full flex flex-col items-center gap-8">
    <section id="header" class="z-50 mt-10 text-4xl">
        <BlurFade delay={0.5}>
          <div class="happy-monkey-regular text-4xl flex items-center">
            <LatterPullUp
              class="text-black dark:text-white dark:text-orange-200 w-full text-2xl sm:text-4xl md:text-3xl"
              words="About Me (Asaadzx)"
              />
            <p class="absolute mt-48 text-2xl dark:text-orange-200">I am 14 Years old Boy </p>
            </div>
        </BlurFade>
    </section>

    <FlickeringGrid
      class="z-0 [mask:radial-gradient(circle_at_center,#fff_200px,transparent_0)]"
      squareSize={4}
      gridGap={6}
      color="#171B22"
      maxOpacity={0.5}
      flickerChance={0.1}
      height={400}
      width={250}
    />
  </div>
</div>
