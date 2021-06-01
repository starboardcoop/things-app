<script>
    import { onMount } from "svelte";
    import things from "./_api/things.js"
    import Header from "../components/Header.svelte";
    import Scroller from "../components/Scroller.svelte";
    import TextInput from "../components/TextInput.svelte";

    let data;
    let searchResults = [];
    let searchText = "";

    onMount(async () => {
        data = await things.getAll();
    });

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
<div class="pt-4">
    {#if !data}
        loading...
    {:else}
        {#if searchResults.length === 0}
            {#each data.categories as category}
                <div>
                    <div class="pl-4 text-4xl lg:text-5xl font-display text-primary" style="text-shadow:2px 2px #000000">{category}</div>
                    <Scroller things={filterThings(category)} />
                </div>
            {/each}
        {:else}
            <div>
                <Scroller things={searchResults} />
            </div>
        {/if}
    {/if}
</div>
