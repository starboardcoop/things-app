<script>
    import { onMount } from "svelte";
    import Card from "../components/Card.svelte";
    import Container from "../components/Container.svelte";
    import Session from "../session";

    let name;

    let cards = new Array(20).fill("card");

    onMount(() => {
        const session = Session.json();
        console.log(session);
        name = session.name;
    });

    async function thingify() {
        const result = await fetch(`/.netlify/functions/things`);
        const data = await result.json();
        console.log(data);
    }
</script>

<main class="bg-indigo-300 w-screen h-screen font-mono">
    <div class="w-full flex flex-col justify-center items-center p-8 overflow-hidden">
        <h1>Hi, {name}!</h1>
    </div>
    <div class="flex flex-row gap-3 overflow-scroll px-8 py-7">
        {#each cards as card}
        <Card>
            <Container><a href="/home/#" on:click={thingify}>{card}</a></Container>
        </Card>
        {/each}
    </div>
</main>