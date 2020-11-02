<script context="module">
	export async function preload() {
	   	const res = await this.fetch(`https://starboardcoop-things-api.glitch.me/things`);
		const data = await res.json();

		return data;
	}
</script>

<script>
	import Card from "../components/Card.svelte"
	import Image from "../components/Image.svelte"
	import Title from "../components/Title.svelte"
	import Subtitle from "../components/Subtitle.svelte"
	import Column from "../components/Column.svelte";
	import Container from "../components/Container.svelte";
	import Grid from "../components/Grid.svelte";
	import Text from "../components/Text.svelte";
	import Button from "../components/Button.svelte";

	export let things = [];
</script>

<svelte:head>
	<title>Providence Library of Things</title>
</svelte:head>

<Column>
	<Container>
		<h1 class="text-6xl text-white">pvd<span class="text-primary">:</span>things</h1>
	</Container>
	<Container>
		<Title center color="primary">Own Things Together!</Title>
		<Text center>
			<span class="font-bold">For those things you only need once in a while, why not share them?</span>
			<br />
			As a member of the Providence Library of Things, you will have access to loads of useful things without ever paying the full price.
		</Text>
	</Container>
	<Container bg="primary">
		<Title italic>The best things in life are Things.</Title>
		<Text dark>Become a co-owning member and never pay to use a Thing.</Text>
	</Container>
	<Container>
		<Grid>
			{#each things as thing}
				<Card>
					<Image src={thing.img} alt={thing.name}/>
					<Container>
						<Title bold>{thing.name}</Title>
						<Subtitle>{thing.description}</Subtitle>
					</Container>
				</Card>
			{/each}
		</Grid>
	</Container>
	<Container>
		<Title center color="primary">Ready to co-own Things?</Title>
		<Text center>The Providence Library of Things hasn't launched just yet, but it will soon.<br>Join our waiting list and help us start up!</Text>
		<Button primary>
			<a href="https://docs.google.com/forms/d/e/1FAIpQLSdfEBlxZzN-MR7IoxKO4cxJ_-QqTMjlOQsssmYYdYfyjwH8NQ/viewform?usp=sf_link" target="__blank" rel="nofollow">Join</a>
		</Button>
	</Container>
</Column>