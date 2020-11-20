<script>
	import Layout from "../components/Layout.svelte";
	import Text from "../components/Text.svelte";
</script>

<Layout>
	<slot></slot>
	<footer class="bg-primary justify-center">
		<Text dark center>
			2020 <b>Providence Library of Things</b>
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