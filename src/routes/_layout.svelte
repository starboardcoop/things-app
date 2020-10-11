<script>
	import { MaterialApp, Footer } from 'svelte-materialify/src';
</script>

<MaterialApp>
	<slot></slot>
	<Footer padless class="cyan lighten-3 theme--dark justify-center">
		<div class="pa-2 cyan-text text-darken-4 text-center" style="width:100%">
			2020 <b>Providence Library of Things</b>
		</div>
	</Footer>
</MaterialApp>