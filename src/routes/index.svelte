<script>
	import Section from "../components/Section.svelte";
	import Head from "../components/Head.svelte";
	import Card from "../components/Card.svelte";
	import Image from "../components/Image.svelte";
	import Heading from "../components/Heading.svelte";
	import Subheading from "../components/Subheading.svelte";
	import Column from "../components/Column.svelte";
	import Container from "../components/Container.svelte";
	import Grid from "../components/Grid.svelte";
	import Text from "../components/Text.svelte";
	import Button from "../components/Button.svelte";
	import Spacer from "../components/Spacer.svelte";
	import Row from "../components/Row.svelte";
	import Spanner from "../components/Spanner.svelte";
	import Terminal from "../components/Terminal.svelte";
	import { onMount } from "svelte";

	export let things;

	onMount(async () => {
		const res = await fetch('/.netlify/functions/things');
		const data = await res.json();
		things = data.things.slice(0, 6);
	});
</script>

<Head
	title="PVD Things"
	description="A non-profit co-op for sharing those things you sometimes need."
	keywords="things, tools, tool rentals, equipment, cooperative, Providence, Rhode Island"
	image="https://pvdthings.coop/PVD_Things_Twitter_Header.png"
	twitterHandle="@pvdthings"
	url="https://pvdthings.coop"
/>

<Column spacing="0">
	<Section bg="purple-city">
		<Row center>
			<img src="/PVD_Things_Logo_White.png" alt="PVD Things logo" class="h-36 lg:h-64"/>
			<h1 hidden>PVD Things</h1>
		</Row>
	</Section>
	<Section bg="bg">
		<Spanner>
			<Heading color="primary">Own Things<br /><span class="text-6xl">Together!</span></Heading>
			<Column>
				<Text light bold>
					For those things you only sometimes need, why not share them?
				</Text>
				<Text light>
					As a member of the <span class="text-indigo-400">Providence Library of Things</span>, you will have
					access to loads of useful things without ever paying the full price.
				</Text>
			</Column>
		</Spanner>
	</Section>
	<Section bg="primary">
		<Column spacing="10">
			<Terminal>
				<span>Audio Equipment</span>
				<span>Cleaning Tools</span>
				<span>Musical Instruments</span>
				<span>Cooking Supplies</span>
				<span>Any Thing.</span>
			</Terminal>
			<Text><span class="font-bold">The best things in life are Things.</span> Become a co-op member and never pay rent to use Things like <span class="font-bold italic">these:</span></Text>
			<Grid>
				{#if things}
					{#each things as thing}
						<Card>
							<Image src={thing.image} alt={thing.name} />
							<Container>
								<Subheading caps>{thing.name}</Subheading>
								<Text small>{thing.categories[0]}</Text>
							</Container>
						</Card>
					{/each}
				{/if}
			</Grid>
			<Row center>
				<Button><a href="/browse">Browse the Collection</a></Button>
			</Row>
		</Column>
	</Section>
	<Section bg="indigo-100">
		<Column>
			<Heading italic bold center>How will the Library work?</Heading>
			<Spanner>
				<div class="flex flex-col items-center">
					<img src="/join.png" alt="Become a member" class="h-48 w-48" />
					<Subheading color="indigo-600" center>Join and reserve</Subheading>
					<Text center>Become a dues-paying member and reserve a Thing from our app.</Text>
				</div>
				<div class="flex flex-col items-center">
					<img src="/maintenance.png" alt="People using tools" class="h-48" />
					<Subheading color="indigo-600" center>Use and return</Subheading>
					<Text center>Pick up the Thing you reserved and bring it back when you're done with it.</Text>
				</div>
				<div class="flex flex-col items-center">
					<img src="/collaboration.png" alt="Get involved" class="h-48" />
					<Subheading color="indigo-600" center>Get involved!</Subheading>
					<Text center>Elect the Board of Directors, participate in Library meetings, and vote on the Things we share.</Text>
				</div>
			</Spanner>
		</Column>
	</Section>
	<Section>
		<Column spacing="16">
			<Heading bold>But we need your help.</Heading>
			<div>
				<Subheading>Location.</Subheading>
				<Text>Location for tool libraries is always the biggest hurdle. Rent, especially in and around a city, is -- let's face it -- absurd. If you know of any low-cost opportunities in PVD, please don't hesitate to <a href="mailto: hello@starboard.coop" class="underline font-bold">let us know.</a> We're open to storefront space, a warehouse, or even an open field.</Text>
			</div>
			<div>
				<Subheading>Things.</Subheading>
				<Text>Though we will be purchasing new Things for the library, <a href="/donations" class="underline font-bold">donations</a> will go a long way toward getting us to financial sustainability while offering every Thing the co-op members may need.</Text>
			</div>
			<div>
				<Subheading>Spreading the word.</Subheading>
				<Text>More members means a stronger cooperative! The more who join, the faster we'll have a thriving community and lots of Things to use.</Text>
			</div>
		</Column>
	</Section>
	<Section bg="bg">
		<Spanner center gap="12">
			<Column spacing="2">
				<Subheading oversized color="indigo-300">150+</Subheading>
				<Text light small>prospective members</Text>
			</Column>
			<Column spacing="2">
				<Subheading oversized color="indigo-300">15+</Subheading>
				<Text light small>things donated</Text>
			</Column>
		</Spanner>
	</Section>
	<Section bg="indigo-400">
		<Heading italic bold center>Ready to co-own Things?</Heading>
		<Text center>
			The Providence Library of Things hasn't launched yet, but you
			can help make it happen. Join our waiting list to help us start up!
		</Text>
		<Spacer />
		<Row center>
			<Button primary>
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSdfEBlxZzN-MR7IoxKO4cxJ_-QqTMjlOQsssmYYdYfyjwH8NQ/viewform?usp=sf_link"
					target="__blank"
					rel="nofollow">Join us!</a>
			</Button>
		</Row>
		<Spacer />
		<Row center>
			<Button small>
				<a href="https://discord.gg/DbYtbFYkJD" target="_blank" rel="nofollow">Join us on Discord</a>
			</Button>
		</Row>
	</Section>
</Column>
