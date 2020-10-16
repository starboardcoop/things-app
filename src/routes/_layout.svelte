<script>
	import { MaterialApp, Footer } from 'svelte-materialify/src';
</script>

<MaterialApp>
	<slot></slot>
	<Footer padless class="yellow darken-1 theme--dark justify-center">
		<div class="pa-2 black-text text-center" style="width:100%">
			2020 <b>Providence Library of Things</b>
		</div>
	</Footer>
</MaterialApp>