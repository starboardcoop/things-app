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

	export let things = [];
</script>

<svelte:head>
	<title>Providence Library of Things</title>
</svelte:head>

<Column>
	<Container>
		<h1 class="text-4xl text-white">pvd<span class="text-primary">:</span>things</h1>
	</Container>
	<Container>
		<Grid>
			<!-- {#each things as thing}
				<Card>
					<Image src={thing.img} alt={thing.name}/>
					<Container>
						<Title>{thing.name}</Title>
						<Subtitle>{thing.description}</Subtitle>
					</Container>
				</Card>
			{/each} -->
			<Card>
				<!-- <Image src={thing.img} alt={thing.name}/> -->
				<Container>
					<Title>bsbsbs</Title>
					<Subtitle>bsbsbs</Subtitle>
				</Container>
			</Card>
			<Card>
				<!-- <Image src={thing.img} alt={thing.name}/> -->
				<Container>
					<Title>bsbsbs</Title>
					<Subtitle>bsbsbs</Subtitle>
				</Container>
			</Card>
			<Card>
				<!-- <Image src={thing.img} alt={thing.name}/> -->
				<Container>
					<Title>bsbsbs</Title>
					<Subtitle>bsbsbs</Subtitle>
				</Container>
			</Card>
		</Grid>
	</Container>
</Column>