<script context="module">
	export async function preload() {
	   	const res = await this.fetch(`https://starboardcoop-things-api.glitch.me/things`);
		const data = await res.json();

		return data;
	}
</script>

<script>
	import { 
		Container,
		Card,
		CardTitle,
		TextField,
		Checkbox,
		Button
	} from 'svelte-materialify/src';

	export let things = [];
</script>

<svelte:head>
	<title>Providence Library of Things</title>
</svelte:head>

<section class="pa-8 grey darken-4 white-text" style="min-height: 100vh;">
	<Container class="text-center">
		<h1 class="font-weight-bold">pvd<span class="yellow-text text-darken-1">:</span>things</h1>
		<Container class="pa-8 mt-8" style="max-width: 36rem;">
			<h3 class="mb-8 font-weight-bold">Own Things Together!</h3>
			<p>
				<span class="font-weight-bold">For those things you only need once in a while, why not share them?</span>
				As a member of the Providence Library of Things, you will have access to loads of useful things without ever paying the full price.
			</p>
		</Container>
	</Container>
</section>

<section class="pa-8 yellow darken-1 black-text">
	<Container style="max-width: 36rem;">
		<h2>Use Things when you need them.</h2>
		<p class="mt-8">Become a co-owning member and never pay to use a Thing.</p>
	</Container>
</section>

<section class="pa-8 grey darken-1 black-text">
	<Container style="max-width: 36rem;">
		{#each things as thing}
			<Card>
				<CardTitle>{thing.name}</CardTitle>
			</Card>		
		{/each}
	</Container>
</section>

<section class="pa-8 yellow darken-1 black-text">
	<Container style="max-width: 36rem;">
		<h2>Let's keep in touch.</h2>
		<p class="mt-8">The Library of Things hasn't launched yet, but it will soon. Sign up to stay notified.</p>
		<form name="signup">
			<TextField dense outlined>First Name</TextField>
			<TextField dense outlined>Email</TextField>
			<Checkbox>Volunteer?</Checkbox>
			<Button>Sign up</Button>
		</form>
	</Container>
</section>