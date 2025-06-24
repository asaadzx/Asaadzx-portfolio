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

let technologies = [
    'Linux', 'Bash', 'Python', 'Flutter', 'C++', 'HTML5', 'CSS3', 'JavaScript', 
    'Deno', 'Fresh', 'PyTorch', 'GitHub', 'Android', 'VSCode', 'Godot', 'MySQL'
];

let interests = [
    'Artificial Intelligence and Machine Learning',
    'Full Stack Web Development',
    'Cross-platform Mobile Applications',
    'Open Source Contributions'
];
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
  <div class="w-full flex flex-col items-center gap-8 px-4">
    <section id="header" class="z-50 mt-10 text-4xl text-center">
        <BlurFade delay={0.5}>
          <div class="happy-monkey-regular text-4xl flex flex-col items-center">
            <LatterPullUp
              class="text-black dark:text-white dark:text-orange-200 w-full text-3xl sm:text-4xl md:text-5xl"
              words="About Me (Asaadzx)"
              />
            </div>
        </BlurFade>
    </section>

    <section class="z-50 text-center max-w-3xl">
        <BlurFade delay={0.7}>
            <p class="text-lg text-black dark:text-orange-200">
                I'm a 14-year-old passionate open-source developer and tech enthusiast from Egypt. 
                My journey is driven by curiosity and a desire to create meaningful solutions through open-source development. 
                I specialize in machine learning, web technologies, and mobile development, constantly exploring new tools and frameworks to expand my skills.
            </p>
        </BlurFade>
    </section>

    <section class="z-50 text-center">
        <BlurFade delay={0.8}>
            <h2 class="text-2xl font-bold dark:text-white mb-2">Current Status</h2>
            <p class="text-lg text-black dark:text-orange-200">
                I am currently in Preparatory 3 in school.
            </p>
        </BlurFade>
    </section>
    
    <section class="z-50 text-center">
        <BlurFade delay={0.9}>
            <h2 class="text-3xl font-bold dark:text-white mb-4">Technologies & Skills</h2>
            <div class="flex flex-wrap justify-center gap-2">
                {#each technologies as tech}
                    <span class="bg-gray-200 dark:bg-orange-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                        {tech}
                    </span>
                {/each}
            </div>
        </BlurFade>
    </section>

    <section class="z-50 text-center">
        <BlurFade delay={1.1}>
            <h2 class="text-3xl font-bold dark:text-white mb-4">My Interests</h2>
            <ul class="text-lg dark:text-orange-200 text-left inline-block">
                {#each interests as interest}
                <li class="mb-1">
                    - {interest}
                </li>
                {/each}
            </ul>
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
