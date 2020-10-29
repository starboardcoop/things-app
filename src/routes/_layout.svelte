<script>
	import Layout from "../components/Layout.svelte";
</script>

<Layout>
	<slot></slot>
	<footer class="bg-yellow-300 justify-center">
		<div class="text-gray-800 text-center" style="width:100%">
			2020 <b>Providence Library of Things</b>
		</div>
	</footer>
</Layout>

<style global lang="postcss">

	/* only apply purgecss on utilities, per Tailwind docs */
	/* purgecss start ignore */
	@tailwind base;
	@tailwind components;
	/* purgecss end ignore */
  
	@tailwind utilities;
  
  </style>
  