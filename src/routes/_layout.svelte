<script>
	import Layout from "../components/Layout.svelte";
	import Footer from "../components/Footer.svelte";
	import Menu from "../components/Menu.svelte";
</script>

<Layout>
	<Menu />
	<slot />
	<Footer />
</Layout>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@layer utilities {
		.brutal {
			@apply border-2 border-black rounded-md;
		}

		.hovers {
			box-shadow: 2px 2px 0 #000000;
			@apply transform duration-200;
		}

		.hovers:focus,
		.hovers:hover {
			box-shadow: 4px 4px 0 #000000;
			@apply scale-105;
		}
	}

	:root {
		font-family: 'Roboto Mono', monospace;
	}
</style>