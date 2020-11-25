<script>
	import Layout from "../components/Layout.svelte";
	import Text from "../components/Text.svelte";
	import Footer from "../components/Footer.svelte";
</script>

<Layout>
	<slot></slot>
	<Footer>
		<Text light center>
			A project by <a href="https://starboard.coop" target="_blank"><b>Starboard Co-op</b></a>
	   </Text>
	</Footer>
</Layout>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:root {
		font-family: 'Roboto Mono', monospace;
	}
</style>