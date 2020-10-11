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

<div class="pa-8 deep-purple white-text">
	<Container class="text-center">
		<div class="text-subtitle-1">Providence</div>
		<h1 class="text-h1">Library of Things</h1>
	</Container>
</div>
<div class="pa-8 grey lighten-4" style="min-height: 90vh;">
	<Container class="d-flex flex-column align-center justify-center">
		<Card class="mb-8" style="max-width: 32rem; overflow: hidden;">
			<img src="/downtown.jpg" alt="Providence, Rhode Island" />
			<CardText>
				<div class="text--primary text-h5 mb-4">We want to launch Rhode Island's first Library of Things.</div>
				<div class="text--primary text-body-1">
					A <strong>Library of Things</strong> is just like a regular library, but for everything else.
					Ladders, power tools, board games, cooking supplies, you name it.
				</div>
			</CardText>
			<CardActions>
				<a href="https://en.wikipedia.org/wiki/Library_of_Things" target="_blank"><Button text class="deep-purple-text">Wikipedia</Button></a>
			</CardActions>
		</Card>
		<Card style="max-width: 32rem;">
			<CardText>
				<div class="text--primary text-h5 mb-4">As a member of the Library, you co-own the Things.</div>
				<div class="text--primary text-body-1">
					The <strong>Providence Library of Things</strong> will be a cooperative (co-op), 
					meaning that the members are the owners. This means that if you join, you have a stake in its success. 
					It also means you never pay rent to borrow anything. 
					You're splitting the cost of ownership with all the members.
				</div>
			</CardText>
			<CardActions>
				<Button text on:click={openDialog} class="deep-purple-text">Stay Informed</Button>
				<Button text disabled>Join the Co-op</Button>
			</CardActions>
			<Dialog bind:active={dialogOpen}>
				<div class="pa-4">Hi, neighbor!</div>
			</Dialog>
		</Card>
	</Container>
</div>