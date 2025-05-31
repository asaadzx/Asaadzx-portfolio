<script>
    // Original imports
    import RainbowButton from "$lib/Components/RainbowButton.svelte";
    import CoolMode from "../lib/Components/CoolMode.svelte";
    import GradualSpacing from "../lib/Components/GradualSpacing.svelte";
    import InteractiveHover from "../lib/Components/InteractiveHover.svelte";
    import SparklesText from "../lib/Components/SparklesText.svelte";
    import Dock from "$lib/Components/Dock.svelte";
    import DockIcon from "$lib/Components/DockIcon.svelte";
    

    let links = [
        {
            text: "Contact Me",
            icon_class: "fa-solid fa-envelope",
            href: "mailto:asaad.work2010@gmail.com"
        },
        {
            icon_class: "fa-brands fa-github",
            text: "Github",
            href: "https://github.com/asaadzx"
        },
        {
            icon_class: "fa-brands fa-square-x-twitter",
            text: "Twitter",
            href: "https://x.com/Asaad123TY"
        },
        {
            icon_class: "fa-brands fa-linkedin",
            text: "Linked in",
            href: "https://linkedin.com/in/asaad-zx"
        }
    ];

</script>

<head>
    <title>Asaad Zein</title>
</head>

<div class="flex items-center justify-center p-4 sm:p-20 md:p-40 min-h-screen">

    <div class="fixed top-0 left-0 right-0 flex items-center justify-center z-10 bg-background">
        <Dock
          let:magnification
          let:distance
          let:mouseX
          magnification={60}
          distance={110}
          direction="bottom"
        >
          <DockIcon
            {magnification}
            {distance}
            {mouseX}
            
            class="bg-black/10 dark:bg-white/5 p-3"
          >
          <a href="/" aria-label="Home">
            <i class="fa-solid fa-house text-xl"></i>
          </a>
          </DockIcon>
          <DockIcon
            {magnification}
            {distance}
            {mouseX}
            class="bg-black/10 dark:bg-white/5 p-3"
          >
          <a href="/about" aria-label="aboutme">
            <i class="fa-solid fa-address-card text-xl"></i>
          </a>
          </DockIcon>
          <DockIcon
            {magnification}
            {distance}
            {mouseX}
            class="bg-black/10 dark:bg-white/5 p-3"
          >
          <a href="/projects" aria-label="projects">
            <i class="fa-solid fa-briefcase text-xl"></i>
          </a>
          </DockIcon>
          <DockIcon
            {magnification}
            {distance}
            {mouseX}
            class="bg-black/10 dark:bg-white/5 p-3"
          >
          <a href="https://edition.cnn.com/interactive/2019/06/us/dad-joke-generator-trnd/" aria-label="jokes">
            <i class="fa-solid fa-face-laugh-wink text-xl"></i>
          </a>
          </DockIcon>
        </Dock>
    </div>

    <div class="happy-monkey-regular w-full max-w-4xl">
        
        <GradualSpacing
            class="text-3xl tracking-[-0.1em] h-auto mb-16 text-black dark:text-white sm:text-4xl md:text-7xl md:leading-[5rem]"
            words="Hi There, I am Asaad Zein"
            emojie="👋"
        />

        <div class="flex justify-center mx-auto space-x-10">
            {#each links as link}
                <InteractiveHover text={link.text} icon_class={link.icon_class} class="happy-monkey-regular text-black dark:text-white" href={link.href}/>
            {/each}
        </div>
        
        <SparklesText 
            text="I am a AI Engineer And 3D Artist" 
            class="text-center text-xl happy-monkey-regular mt-32 text-black dark:text-white sm:text-2xl md:text-7xl md:leading-[5rem]"
        />

        <div class="flex justify-center mt-16">
            <CoolMode options={{ particleCount: 5 }}>
                <RainbowButton>
                    <span>Gallary (Click me)</span>
                </RainbowButton>
            </CoolMode>
            
        </div>

    </div>
</div>