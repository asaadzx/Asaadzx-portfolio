<script>
  // Svelte Magic UI components
  import BlurFade from "$lib/Components/BlurFade.svelte";
  import Dock from "$lib/Components/Dock.svelte";
  import DockIcon from "$lib/Components/DockIcon.svelte";
  import LatterPullUp from "$lib/Components/LetterPullUp.svelte";
  import SmoothCursor from "$lib/Components/SmoothCursor.svelte";
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

let projects = [
    {
        name: "Gemini_CLI",
        description: "A multimodal CLI chatbot with Google's Generative AI. Features live responses and a sleek Rich UI.",
        language: "Python",
        url: "https://github.com/asaadzx/Gemini_CLI"
    },
    {
        name: "Epyac_AI",
        description: "An AI Model made with PyTorch and Transformers.",
        language: "Python",
        url: "https://github.com/asaadzx/Epyac_AI"
    },
    {
        name: "AI-Linux-APP",
        description: "Electron-based desktop applications for various AI chat platforms.",
        language: "JavaScript",
        url: "https://github.com/asaadzx/AI-Linux-APP"
    },
    {
        name: "Epyac_TTS_CLI",
        description: "A customizable Text-to-speech AI model and CLI tool.",
        language: "Python",
        url: "https://github.com/asaadzx/Epyac_TTS_CLI"
    },
    {
        name: "Epmail",
        description: "A Gmail client built with Tauri.",
        language: "Rust, JS",
        url: "https://github.com/asaadzx/Epmail"
    },
    {
        name: "Zenshell",
        description: "A C++ based shell with Lua plugins.",
        language: "Makefile, C++, Lua",
        url: "https://github.com/GhostFreakOS/Zenshell"
    }
];

</script>

<div
class="flex flex-col items-center p-4 sm:p-8 md:p-12 min-h-screen w-full max-h-full max-w-full not-dark:bg-amber-600 dark:bg-amber-900"
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

  <section id="header" class="z-50 mt-10 text-4xl text-center">
    <BlurFade delay={0.25}>
      <LatterPullUp
        class="text-black dark:text-white dark:text-orange-200 w-full text-3xl sm:text-4xl md:text-5xl"
        words="My Cool Projects"
      />
    </BlurFade>
  </section>

  <section class="z-50 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl p-14">
    {#each projects as project, i}
      <BlurFade delay={0.35 + i * 0.1}>
        <a href={project.url} target="_blank" rel="noopener noreferrer" class="block h-full">
          <div class="bg-white/20 dark:bg-black/30 p-6 rounded-lg shadow-lg h-full flex flex-col hover:bg-white/30 dark:hover:bg-black/40 transition-colors duration-300">
            <h3 class="text-xl font-bold dark:text-orange-200 mb-2">{project.name}</h3>
            <p class="text-black dark:text-gray-300 flex-grow">{project.description}</p>
            <p class="text-sm text-black dark:text-gray-400 mt-4 font-mono">Language: {project.language}</p>
          </div>
        </a>
      </BlurFade>
    {/each}
  </section>
  <SmoothCursor></SmoothCursor>
</div>
