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
            text: "Home",
            icon_class: "fa-solid fa-house",
            href: "/"
        },
        {
            text: "About",
            icon_class: "fa-solid fa-address-card",
            href: "/about"
        },
        {
            text: "Projects",
            icon_class: "fa-solid fa-briefcase",
            href: "/projects"
        },
        {
            text: "Jokes",
            icon_class: "fa-solid fa-face-laugh-wink",
            href: "https://edition.cnn.com/interactive/2019/06/us/dad-joke-generator-trnd/"
        },
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

    // Separate navigation and social links
    let navLinks = links.slice(0, 4);
    let socialLinks = links.slice(4);

</script>

<head>
    <title>Asaad Zein</title>
</head>

<div class="flex items-center justify-center p-4 sm:p-20 md:p-40 min-h-screen not-dark:bg-amber-600 dark:bg-amber-900">

    <div class="fixed bottom-0 left-0 right-0 flex items-center justify-center z-10 bg-background/80 backdrop-blur-sm py-2">
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

        <div class="flex justify-center mt-16 not-dark:text-amber-400">
            <CoolMode options={{ particleCount: 5 }}>
                <RainbowButton>
                    <span>Gallary (Click me)</span>
                </RainbowButton>
            </CoolMode>
            
        </div>

    </div>
</div>