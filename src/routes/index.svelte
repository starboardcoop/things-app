<script>
	import { 
		Container, 
		Card, 
		CardText, 
		CardActions, 
		Button
	} from 'svelte-materialify/src';
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
<div class="pa-8 deep-purple lighten-4" style="min-height: 90vh;">
	<Container class="d-flex justify-center">
		<Card style="max-width: 32rem;">
			<CardText>
				<div class="text--primary text-h5 mb-4">As a member of the Library, you co-own the Things.</div>
				<div class="text--primary">
					The <strong>Providence Library of Things</strong> will be a cooperative (co-op), 
					meaning that the members are the owners. This means that if you join, you have a stake in its success. 
					It also means you never pay rent to borrow anything. 
					You're splitting the cost of ownership with all the members.
				</div>
			</CardText>
			<CardActions>
				<Button text class="deep-purple-text">Join the Co-op</Button>
			</CardActions>
		</Card>
	</Container>
</div>