<script>
    import { onMount } from "svelte";
    import shuffle from "../lib/shuffle";
    import Header from "../components/Header.svelte";
    import Subheading from "../components/Subheading.svelte";
    import Container from "../components/Container.svelte";
    import Scroller from "../components/Scroller.svelte";
    import TextInput from "../components/TextInput.svelte";

    let data;
    let searchResults = [];
    let searchText = "";

    onMount(() => {
        let now = new Date();

        let previousRefresh = new Date(sessionStorage.getItem("previousRefresh"));
        if (Math.abs(now - previousRefresh) > 120000) {
            thingify();
            sessionStorage.setItem("previousRefresh", now.toUTCString());
        } else {
            data = JSON.parse(sessionStorage.getItem("data"));
            data.things = shuffle(data.things);

            console.log('Previous data refreshed.');
        }
    });

    async function thingify() {
        const result = await fetch(`/.netlify/functions/things`);
        data = await result.json();
        sessionStorage.setItem("data", JSON.stringify(data))
        data.things = shuffle(data.things);

        console.log('Refreshed data from API.');
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

<Header> 
    <TextInput
        bind:value={searchText}
        on:input={search}
        placeholder="Search..."
    />
</Header>
<div class="mt-10">
    {#if !data}
        loading...
    {:else}
        {#if searchResults.length === 0}
            {#each data.categories as category}
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
    {/if}
</div>
