<script>
	import Layout from "../components/Layout";
	import Head from "../components/Head.svelte";
</script>

<Head 
	title="PVD Things" 
	description="The app for Providence Library of Things."
	keywords="Providence, Library, Things, PVD, Tools, Rentals, Sharing"
	image="/PVD_Things_Twitter_Header.png"
	url="https://app.pvdthings.coop"
	twitterHandle="@pvdthings"
/>
<Layout>
	<slot />
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
			-webkit-box-shadow: 2px 2px 0px 0px #000000;
			@apply transform duration-200;
		}

		.hovers:focus,
		.hovers:hover {
			box-shadow: 4px 4px 0 #000000;
			-webkit-box-shadow: 4px 4px 0px 0px #000000;
			@apply scale-105;
		}
	}

	:root {
		font-family: 'Roboto Mono', monospace;
	}
</style>