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
    let cleaningThings = [];

    let searchResults = [];
    let searchText = "";

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
        cleaningThings = data.things.filter(thing => thing.category === 'Cleaning');
    }

    function search() {
        if (searchText.length === 0) {
            searchResults = [];
            return;
        }

        const filtered = data.things.filter(thing => thing.name.toLowerCase().includes(searchText.toLowerCase()));

        if (filtered.length > 0)
            searchResults = filtered;
    }
</script>

<main class="bg-indigo-300 w-screen min-h-screen font-mono">
    <div>
        <div class="w-full flex flex-col justify-center items-center p-8 bg-bg relative">
            <Heading color="white">Hi, {name}!</Heading>
            <input
                bind:value={searchText}
                on:input={search}
                placeholder="Search..."
                class="px-4 py-2 border-2 border-black solid rounded-md outline-none transform hover:scale-105 duration-200 absolute -bottom-6" />
        </div>
        <div class="mt-10">
            {#await data}
                loading...
            {:then}
                {#if searchResults.length === 0}
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
                    <div>
                        <Container>
                            <Subheading>Cleaning Things:</Subheading>
                        </Container>
                        <Scroller things={cleaningThings} />
                    </div>
                {:else}
                    <div>
                        <Container>
                            <Subheading>Things:</Subheading>
                        </Container>
                        <Scroller things={searchResults} />
                    </div>
                {/if}
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