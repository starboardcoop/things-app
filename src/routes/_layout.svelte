<script>
	import Layout from "../components/Layout.svelte";
	import Text from "../components/Text.svelte";
</script>

<Layout>
	<slot></slot>
	<footer class="bg-bg justify-center py-2">
		<Text light center>
			 A project by <a href="https://starboard.coop" target="_blank"><b>Starboard Co-op</b></a>
		</Text>
	</footer>
</Layout>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:root {
		font-family: 'Roboto Mono', monospace;
	}
</style>