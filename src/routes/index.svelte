<script>
	import { 
		Container, 
		Card, 
		CardText, 
		CardActions, 
		Button,
		Dialog
	} from 'svelte-materialify/src';

	let dialogOpen = false;

	function openDialog() {
		dialogOpen = true;
	}
</script>

<svelte:head>
	<title>Providence Library of Things</title>
</svelte:head>

<section class="pa-8 cyan lighten-3" style="min-height: 100vh;">
	<Container class="cyan-text text-darken-4 text-center">
		<h2 class="text-h4 white-text">Providence</h2>
		<h1 class="font-weight-bold white-text">Library of Things</h1>
		<Container class="pa-8 mt-8" style="max-width: 36rem;">
			<h3 class="mb-8 font-weight-bold white-text">Own Things Together!</h3>
			<p class="font-weight-bold">
				For those things you only need once in a while, why not share them?
				As a member of the Providence Library of Things, you will have access to loads of useful things without ever paying the full price.
			</p>
		</Container>
	</Container>
</section>