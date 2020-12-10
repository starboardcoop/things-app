<script>
    import { onMount } from "svelte";
    import Container from "../components/Container.svelte";
    import Session from "../session";
    import Scroller from "../components/Scroller.svelte";

    let name;
    let data = thingify();

    onMount(() => {
        const session = Session.json();
        console.log(session);
        name = session.name;
    });

    async function thingify() {
        const result = await fetch(`/.netlify/functions/things`);
        data = await result.json();
        data.things = shuffle(data.things);
        console.log(data);
        return data;
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
        return array;
    }
</script>

<main class="bg-indigo-300 w-screen h-screen font-mono">
    <div>
        <div class="w-full flex flex-col justify-center items-center p-8 overflow-hidden">
            <h1>Hi, {name}!</h1>
        </div>
        <Container>
            <h2>Recommended Things:</h2>
        </Container>
        {#await data}
            loading...
        {:then}
            <Scroller things={data.things} />
        {:catch error}
            whoops!: {error}
        {/await}
    </div>
</main>