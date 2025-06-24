<script lang="ts">
	import '../app.css';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit'
	let { children } = $props();
	injectAnalytics({
		mode: dev ? 'development' : 'production',
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap"
		rel="stylesheet"
	/>
	<script src="https://kit.fontawesome.com/459c8dee73.js" crossorigin="anonymous"></script>
</svelte:head>

{@render children()}
