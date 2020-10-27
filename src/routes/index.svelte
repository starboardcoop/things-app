<script context="module">
	export async function preload() {
	   	const res = await this.fetch(`https://starboardcoop-things-api.glitch.me/things`);
		const data = await res.json();

		return data;
	}
</script>

<script>
	export let things = [];
</script>

<svelte:head>
	<title>Providence Library of Things</title>
</svelte:head>

<section class="pa-8 grey darken-4 white-text" style="min-height: 100vh;">
	<div class="text-center">
		<h1 class="text-6xl">pvd<span class="yellow-text text-darken-1">:</span><a href="/#things" class="text-decoration-none white-text">things</a></h1>
		<div class="pa-8 mt-8" style="max-width: 36rem;">
			<h3 class="mb-8 font-weight-bold">Own Things Together!</h3>
			<p>
				<span class="font-weight-bold">For those things you only need once in a while, why not share them?</span>
				As a member of the Providence Library of Things, you will have access to loads of useful things without ever paying the full price.
			</p>
	</div>
</div>
</section>

<section class="pa-8 yellow darken-1 black-text">
	<div style="max-width: 36rem;">
		<h2>Use Things when you need them.</h2>
		<p class="mt-8">Become a co-owning member and never pay to use a Thing.</p>
	</div>
</section>

<section id="things" class="pa-8 grey darken-1 black-text">
	<div style="max-width: 36rem;">
		{#each things as thing}
		<div style="max-width:350px; overflow:hidden;">
			<img style="max-width:350px; object-fit:cover;" src={thing.img} alt={thing.name}/>
			<div>{thing.name}</div>
			<div>{thing.description}</div>
		</div>
		{/each}
	</div>
</section>

<section class="pa-8 yellow darken-1 black-text">
	<div style="max-width: 36rem;">
		<h2>Let's keep in touch.</h2>
		<p class="mt-8">The Library of Things hasn't launched yet, but it will soon. Sign up to stay notified.</p>
		<form name="signup">
			<input type="text"/>
			<input type="text"/>
			<input type="checkbox"/>
			<button>Sign up</button>
		</form>
	</div>
</section>