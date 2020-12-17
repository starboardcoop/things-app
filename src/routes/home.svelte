<script>
    import { onMount } from "svelte";
    import shuffle from "../lib/shuffle";
    import Heading from "../components/Heading.svelte";
    import Subheading from "../components/Subheading.svelte";
    import Container from "../components/Container.svelte";
    import Session from "../session";
    import Scroller from "../components/Scroller.svelte";

    let name;
    let data = {};
    let categories = [];

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

        categories = data.categories;
        console.log(categories);
    }

    function filterThings(category) {
        return data.things.filter(thing => thing.category === category);
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
                class="px-4 py-2 brutal hovers outline-none absolute -bottom-6" />
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
                    {#each categories as category}
                    <div>
                        <Container>
                            <Subheading>{category}:</Subheading>
                        </Container>
                        <Scroller things={filterThings(category)} />
                    </div>
                    {/each}
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