<script>
  import { CheckIcon, ChevronRightIcon } from "lucide-svelte";
  import { goto } from '$app/navigation';

  import BlurFade from "$lib/Components/BlurFade.svelte";
  import LatterPullUp from "$lib/Components/LetterPullUp.svelte";
  import SparklesText from "$lib/Components/SparklesText.svelte";
  import AnimatedButton from "$lib/Components/AnimatedButton.svelte";
  import SmoothCursor from "$lib/Components/SmoothCursor.svelte";

  function delayedGoHome() {
    setTimeout(() => {
      goto('/');
    }, 800);
  }
</script>






<!-- Thank You Message Section -->
<BlurFade delay={0.05 * 9}>
<section class="flex flex-col items-center justify-center w-full mt-20 mb-16">
<LatterPullUp
words="Thank You!"
class="text-3xl font-bold tracking-tighter happy-monkey-regular sm:text-5xl text-black dark:text-orange-200 mb-9 mt-10 xl:text-6xl/none"
/>
<BlurFade delay={0.25 * 2}>
<span
  class="text-black dark:text-orange-200 mb-9 mt-10 text-xl happy-monkey-regular tracking-tighter sm:text-3xl xl:text-4xl/none text-center"
>
  For contacting me! 🎉
</span>
</BlurFade>
</section>
</BlurFade>

<BlurFade delay={0.05 * 10}>
<SparklesText
text="I will reply as soon as possible!"
class="text-center text-xl happy-monkey-regular mt-16 text-black dark:text-orange-100 sm:text-2xl md:text-4xl md:leading-[3rem]"
/>
</BlurFade>

<BlurFade delay={0.05 * 11}>
<div class="flex justify-center w-full mt-16">
<AnimatedButton
  buttonColor="#000"
  buttonTextColor="#ffffff"
  subscribeStatus={false}
  on:click={delayedGoHome}
>
  <span slot="initialText" class="group inline-flex items-center">
    <span>Back to Home</span>
    <ChevronRightIcon
      class="ml-1 mt-0.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
    />
  </span>
  <span slot="changeText" class="group inline-flex items-center">
    <CheckIcon class="mr-2 mt-0.5 h-4 w-4" />
    Thank You{" "}
  </span>
</AnimatedButton>
</div>
</BlurFade>


<BlurFade delay={0.05 * 13}>
<div class="text-center mt-16 mb-20">
<LatterPullUp
words="Made with ❤️ by Asaad Zein"
class="text-2xl font-bold tracking-tighter text-black dark:text-orange-200 happy-monkey-regular"
/>
</div>
</BlurFade>

<SmoothCursor></SmoothCursor>