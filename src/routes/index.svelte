<script context="module">
	export async function preload() {
		const res = await this.fetch(
			`https://starboardcoop-things-api.glitch.me/things`
		);
		const data = await res.json();

		return data;
	}
</script>

<script>
	import Typewriter from "svelte-typewriter";
	import Section from "../components/Section.svelte";
	import Head from "../components/Head.svelte";
	import Card from "../components/Card.svelte";
	import Image from "../components/Image.svelte";
	import Title from "../components/Title.svelte";
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
	import Link from "../components/Link.svelte";

	export let things = [];
</script>

<Head
	title="Providence Library of Things"
	description="A member-owned co-op for sharing those things you need once in a while."
	keywords="things, tools, tool rentals, equipment, cooperative, Providence, Rhode Island"
	image="https://pvdthings.netlify.app/pvd-pixels.jpg"
	twitterHandle="@pvdthings"
	url="https://pvdthings.netlify.app" 
/>

<Column spacing="0">
	<Section bg="bg">
		<Title>pvd<span class="text-primary">:</span>things</Title>
		<a href="/routes" hidden>Routes</a>
	</Section>
	<Section bg="bg">
		<Spanner>
			<Heading color="primary">Own Things<br /><span class="text-6xl">Together!</span></Heading>
			<Column>
				<Text light bold>
					For those things you only need once in a while, why not share them?
				</Text>
				<Text light>
					As a member of the <span class="text-indigo-400">Providence Library of Things</span>, you will have
					access to loads of useful things without ever paying the full price.
				</Text>
			</Column>
		</Spanner>
	</Section>
	<Section bg="primary">
		<Column>
			<Row>
				<Heading bold>&gt;</Heading>
				<Heading italic bold>
					<Typewriter interval={50} loop>
						<div>The best things in life are Things.</div>
						<div>Audio Equipment</div>
						<div>Cleaning Tools</div>
						<div>Musical Instruments</div>
						<div>Cooking Supplies</div>
						<div>Any Thing.</div>
					</Typewriter>
				</Heading>
			</Row>
			<Text>
				Become a co-owning member and never pay rent to use Things like <span class="font-bold italic">these:</span>
			</Text>
			<Grid>
				{#each things as thing}
					<Card>
						<Image src={thing.img} alt={thing.name} />
						<Container>
							<Subheading caps bold>{thing.name}</Subheading>
							<Text small>{thing.category}</Text>
						</Container>
						<div class="flex flex-col space-y-5" slot="modal">
							<Subheading bold>pvd<span class="text-indigo-600">:</span>thing</Subheading>
							<Heading bold>{thing.name}</Heading>
							<span>
								<Text small>Available:</Text>
								<Text>Coming Soon!</Text>
							</span>
							<span>
								<Text small>Typical out-of-pocket cost:</Text>
								<Text>{thing.price}</Text>
							</span>
							<Text small>{thing.category}</Text>
						</div>
					</Card>
				{/each}
			</Grid>
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
			<Heading bold>But we need your help to make this happen.</Heading>
			<Text large><Link to="https://starboard.coop">Starboard Co-op</Link> is currently developing the <b>web app</b> to support the Library of Things.</Text>
			<Text large>Meanwhile, a <b>steering committee</b> of volunteers is working diligently to get the Library off the ground.</Text>
			<Text>Though not everyone can serve on the steering committee, everyone else who joins now will be encouraged to help in any way they can, such as <Link to="/donations">donating Things</Link> to the Library or just getting the word out.</Text>
			<Text large>Plus, everyone who signs up before our launch will be a <b>founding member</b> of Rhode Island's first cooperative Library of Things!</Text>
		</Column>
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
