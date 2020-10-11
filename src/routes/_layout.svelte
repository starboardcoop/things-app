<script>
	import { MaterialApp, Footer } from 'svelte-materialify/src';
</script>

<MaterialApp>
	<slot></slot>
	<Footer padless class="deep-purple theme--dark justify-center">
		<div class="pa-2 text-center" style="width:100%">
			<b>PVD Library of Things</b>
		</div>
	</Footer>
</MaterialApp>