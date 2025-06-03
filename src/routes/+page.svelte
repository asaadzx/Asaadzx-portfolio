<script>
  // Imports Coastal UI
  import { ChevronLeft, ChevronRight } from "lucide-svelte";
  import { Newspaper } from 'lucide-svelte';

  // Original imports Svelte Magic UI components
  import LatterPullUp from "$lib/Components/LetterPullUp.svelte";
  import RainbowButton from "$lib/Components/RainbowButton.svelte";
  import CoolMode from "../lib/Components/CoolMode.svelte";
  import GradualSpacing from "../lib/Components/GradualSpacing.svelte";
  import InteractiveHover from "../lib/Components/InteractiveHover.svelte";
  import SparklesText from "../lib/Components/SparklesText.svelte";
  import Dock from "$lib/Components/Dock.svelte";
  import DockIcon from "$lib/Components/DockIcon.svelte";

  
  function openCV() {
    window.open("Asaad Resume.pdf", "_blank");
  }


  let currentGallerySlide = $state(0);

  const galleryImages = [
    "images/dIo_qrgq.jpg",
    "images/fJoRbhJR.jpg",
    "images/💖 (@twaniimals) on X.jpg",
  ];

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
    },
    {
      text: "Contact Me",
      icon_class: "fa-solid fa-envelope",
      href: "mailto:asaad.work2010@gmail.com",
    },
    {
      icon_class: "fa-brands fa-github",
      text: "Github",
      href: "https://github.com/asaadzx",
    },
    {
      icon_class: "fa-brands fa-square-x-twitter",
      text: "Twitter",
      href: "https://x.com/Asaad123TY",
    },
    {
      icon_class: "fa-brands fa-linkedin",
      text: "Linked in",
      href: "https://linkedin.com/in/asaad-zx",
    },
  ];

  // Separate navigation and social links
  let navLinks = links.slice(0, 4);
  let socialLinks = links.slice(4);
</script>

<head>
  <title>Asaad Zein</title>
</head>

<div
  class="flex items-center justify-center p-4 sm:p-20 md:p-40 min-h-screen not-dark:bg-amber-600 dark:bg-amber-900"
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

  <div class="happy-monkey-regular w-full max-w-4xl">
    <div
      class="rounded-lg overflow-hidden p-2 flex items-center justify-center"
    >
      <img
        src="https://github.com/asaadzx.png"
        alt="Profile avatar"
        class="h-44 w-44 rounded-full object-cover"
      />
      <div class="flex flex-col justify-start ml-2">
        <div class="text-[#EEEEE4] font-medium text-3xl">Asaad Zein</div>
        <div class="text-zinc-500 -mt- text-2xl">@Asaadzx</div>
      </div>
    </div>

    <GradualSpacing
      class="text-3xl tracking-[-0.1em] h-auto mb-16 text-black dark:text-white dark:text-orange-200 sm:text-4xl md:text-7xl md:leading-[5rem]"
      words="Hi There, I am Asaad Zein"
      emojie="👋"
    />
    <div class="flex justify-center mx-auto space-x-10">
      {#each socialLinks as link}
      <InteractiveHover
      text={link.text}
      icon_class={link.icon_class}
          class="happy-monkey-regular text-black dark:text-white"
          href={link.href}
        />
        {/each}
    </div>

    <SparklesText
      text="I am a AI Engineer And 3D Artist"
      class="text-center text-xl happy-monkey-regular mt-32 text-black dark:text-orange-100 sm:text-2xl md:text-7xl md:leading-[5rem]"
    />

    <div class="grid justify-center not-dark:text-amber-400 w-full mt-28">
      <div class="flex justify-center w-full h-40">
        <CoolMode options={{ particleCount: 5 }}>
          <RainbowButton>
            <span>Gallary (Click me)</span>
          </RainbowButton>
        </CoolMode>
      </div>
      <div class="h-[400px] w-[320px] relative group bp">
        <div
        class="absolute inset-0 items-center overflow-hidden rounded-2xl w-full"
        >
        <div
        class="flex transition-transform duration-400 ease-in-out h-full w-full"
        style="transform: translateX(-{currentGallerySlide * 100}%)"
          >
          {#each galleryImages as image}
              <img
              src={image}
                aria-hidden="true"
                class="h-full w-full min-w-full object-cover"
                alt="Gallery Image"
              />
            {/each}
          </div>
        </div>
        
        <div
          class="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center space-x-2"
        >
          {#each galleryImages as _, i}
          <div
          class="w-1.5 h-1.5 rounded-full transition-all {currentGallerySlide ===
              i
                ? 'bg-white'
                : 'bg-zinc-300 scale-75'}"
            ></div>
            {/each}
          </div>
          
          <button
          onclick={() =>
            (currentGallerySlide =
            (currentGallerySlide - 1 + galleryImages.length) %
            galleryImages.length)}
          class="absolute opacity-0 group-hover:opacity-100 cursor-pointer transition left-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-zinc-950 flex items-center justify-center"
          >
          <ChevronLeft class="h-3.5 w-3.5 text-white" />
        </button>

        <button
          onclick={() =>
            (currentGallerySlide =
              (currentGallerySlide + 1) % galleryImages.length)}
          class="absolute opacity-0 group-hover:opacity-100 cursor-pointer transition right-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-zinc-950 flex items-center justify-center"
        >
          <ChevronRight class="h-3.5 w-3.5 text-white" />
        </button>
      </div>
    </div>
    <LatterPullUp
      class="text-black dark:text-white dark:text-orange-200 text-2xl mb-9 mt-10 "
      words="Download MY CV"
      />
    <button onclick={openCV} aria-label="Download CV" class="mx-auto flex items-center justify-center group px-4 py-2 bg-amber-800 text-white rounded-lg relative overflow-hidden cursor-pointer">
      <div class="absolute inset-0 bg-amber-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      <Newspaper class="relative z-10" />
    </button>
  </div>
</div>
