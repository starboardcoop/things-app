<main>
	<slot></slot>
	<footer class="bg-yellow-300 justify-center">
		<div class="pa-2 black-text text-center" style="width:100%">
			2020 <b>Providence Library of Things</b>
		</div>
	</footer>
</main>

<style global lang="postcss">

	/* only apply purgecss on utilities, per Tailwind docs */
	/* purgecss start ignore */
	@tailwind base;
	@tailwind components;
	/* purgecss end ignore */
  
	@tailwind utilities;
  
  </style>
  