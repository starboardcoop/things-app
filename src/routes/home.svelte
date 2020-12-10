<script>
    import { onMount } from "svelte";
    import shuffle from "../lib/shuffle";
    import Heading from "../components/Heading.svelte";
    import Subheading from "../components/Subheading.svelte";
    import Container from "../components/Container.svelte";
    import Session from "../session";
    import Scroller from "../components/Scroller.svelte";

    let name;
    let data = [];
    let diyThings = [];

    thingify();

    onMount(() => {
        const session = Session.json();
        console.log(session);
        name = session.name;
    });

    async function thingify() {
        const result = await fetch(`/.netlify/functions/things`);
        data = await result.json();
        data.things = shuffle(data.things);

        diyThings = data.things.filter(thing => thing.category === 'DIY');
    }
</script>

<main class="bg-indigo-300 w-screen h-screen font-mono">
    <div>
        <div class="w-full flex flex-col justify-center items-center p-8 bg-bg relative">
            <Heading color="white">Hi, {name}!</Heading>
            <input
                placeholder="Search..."
                class="px-4 py-2 border-2 border-black solid rounded-md outline-none transform hover:scale-105 duration-200 absolute -bottom-6" />
        </div>
        <div class="mt-10">
            {#await data}
                loading...
            {:then}
                <div>
                    <Container>
                        <Subheading>Recommended Things:</Subheading>
                    </Container>
                    <Scroller things={data.things} />
                </div>
                <div>
                    <Container>
                        <Subheading>DIY Things:</Subheading>
                    </Container>
                    <Scroller things={diyThings} />
                </div>
            {:catch error}
                whoops!: {error}
            {/await}
        </div>
    </div>
</main>

<style>
    .solid {
        box-shadow: 2px 2px 0 #000000;
    }

    .solid:focus,
    .solid:hover {
        box-shadow: 4px 4px 0 #000000;
    }
</style>