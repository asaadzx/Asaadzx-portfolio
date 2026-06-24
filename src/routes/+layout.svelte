<script lang="ts">
    import "../app.css";
    import ThemeToggle from "$lib/Components/ThemeToggle.svelte";
    let { children } = $props();
</script>

<ThemeToggle />
{@render children()}
