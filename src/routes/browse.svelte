<script>
    import { onMount } from "svelte";
    import Header from "../components/Header.svelte";
    import Subheading from "../components/Subheading.svelte";
    import Container from "../components/Container.svelte";
    import Scroller from "../components/Scroller.svelte";
    import Text from "../components/Text.svelte";
    import TextInput from "../components/TextInput.svelte";

    let data;
    let searchResults = [];
    let searchText = "";

    onMount(() => {
        let now = new Date();

        let previousRefresh = new Date(localStorage.getItem("previousRefresh"));
        if (Math.abs(now - previousRefresh) > 120000) {
            thingify();
            localStorage.setItem("previousRefresh", now.toUTCString());
        } else {
            data = JSON.parse(localStorage.getItem("data"));

            console.log('Previous data refreshed.');
        }
    });

    async function thingify() {
        const result = await fetch(`/.netlify/functions/things`);
        data = await result.json();
        localStorage.setItem("data", JSON.stringify(data));

        console.log('Refreshed data from API.');
    }

    function filterThings(category) {
        return data.things.filter(thing => thing.categories.includes(category));
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
<div>
    {#if !data}
        loading...
    {:else}
        <div>
            <Container bg="indigo-600">
                <Text light>Pictured are all the Things we have or plan on having in the PVD Things collection. <br><a href="/donate" class="underline font-bold">Click here</a> to donate!</Text>
            </Container>
        </div>
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
