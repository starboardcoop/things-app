<script context="module">
	export async function preload() {
	   	const res = await this.fetch(`https://starboardcoop-things-api.glitch.me/things`);
		const data = await res.json();

		return data;
	}
</script>

<script>
	import Typewriter from 'svelte-typewriter'
	import Head from "../components/Head.svelte";
	import Card from "../components/Card.svelte"
	import Image from "../components/Image.svelte"
	import Title from "../components/Title.svelte";
	import Heading from "../components/Heading.svelte"
	import Column from "../components/Column.svelte";
	import Container from "../components/Container.svelte";
	import Grid from "../components/Grid.svelte";
	import Text from "../components/Text.svelte";
	import Button from "../components/Button.svelte";
	import Spacer from "../components/Spacer.svelte";

	export let things = [];

</script>

<Head 
	title="Providence Library of Things"
	description="A member-owned co-op for sharing those things you need once in a while."
	keywords="things, tools, tool rentals, equipment, cooperative, Providence, Rhode Island"
	twitterHandle="@pvdthings"
	url="https://pvdthings.coop"
/>

<Container>
	<Column>
		<Title>
			<span class="text-primary">pvd<span class="text-white">:</span>things</span><Spacer/>
				<Typewriter loop>
					{#each things as thing}
						<Text>{thing.name.toLowerCase()}</Text>
					{/each}
				</Typewriter>
		</Title>
		<Spacer/>
		<div>
			<Heading center color="primary">Own Things Together!</Heading>
			<Spacer/>
			<Text center>
				<span class="font-bold">For those things you only need once in a while, why not share them?</span>
				<br />
				As a member of the Providence Library of Things, you will have access to loads of useful things without ever paying the full price.
			</Text>
		</div>
		<Spacer/>
		<Container bg="primary">
			<Heading italic>The best things in life are Things.</Heading>
			<Text dark>Become a co-owning member and never pay to use a Thing.</Text>
		</Container>
		<Grid>
			{#each things as thing}
				<Card>
					<Image src={thing.img} alt={thing.name}/>
					<Container>
						<Heading bold>{thing.name}</Heading>
						<Text dark>{thing.description}</Text>
					</Container>
				</Card>
			{/each}
		</Grid>
		<Spacer/>
		<div class="text-center">
			<Heading center color="primary">Ready to co-own Things?</Heading>
			<Text center>The Providence Library of Things hasn't launched just yet, but it will soon.<br>Join our waiting list and help us start up!</Text>
			<Spacer/>
			<Button primary>
				<a href="https://docs.google.com/forms/d/e/1FAIpQLSdfEBlxZzN-MR7IoxKO4cxJ_-QqTMjlOQsssmYYdYfyjwH8NQ/viewform?usp=sf_link" target="__blank" rel="nofollow">Join us!</a>
			</Button>
		</div>
		<Spacer/>
	</Column>
</Container>
