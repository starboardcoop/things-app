<script>
	import Layout from "../components/Layout.svelte";
	import Footer from "../components/Footer.svelte";
</script>

<Layout>
	<slot />
	<Footer />
</Layout>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:root {
		font-family: 'Roboto Mono', monospace;
	}
</style>