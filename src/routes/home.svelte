<script>
    import { onMount } from "svelte";
    import Card from "../components/Card.svelte";
    import Container from "../components/Container.svelte";
    import Session from "../session";

    let name;
    let data = thingify();

    let cards = new Array(20).fill("card");

    onMount(() => {
        const session = Session.json();
        console.log(session);
        name = session.name;
    });

    async function thingify() {
        const result = await fetch(`/.netlify/functions/things`);
        data = await result.json();
        console.log(data);
        return data;
    }
</script>

<main class="bg-indigo-300 w-screen h-screen font-mono">
    <div>
        <div class="w-full flex flex-col justify-center items-center p-8 overflow-hidden">
            <h1>Hi, {name}!</h1>
        </div>
        <h2>Recommended Things:</h2>
        <div class="flex flex-row gap-3 overflow-scroll px-8 py-7">
            {#await data}
                loading...
            {:then things}
                {#each data.things as thing}
                <Card>
                    <Container>
                        <img src={thing.img} alt="a thing"/>
                        {thing.name}
                    </Container>
                </Card>
                {/each}
            {:catch error}
                whoops!: {error}
            {/await}
        </div>
    </div>
</main>