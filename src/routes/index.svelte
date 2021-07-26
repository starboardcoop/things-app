<script>
    import { onMount } from "svelte";
    import things from "./_api/things.js"
    import Header from "../components/Header.svelte";
    import Scroller from "../components/Scroller.svelte";
    import TextInput from "../components/TextInput.svelte";
    import LoadingIndicator from "../components/LoadingIndicator.svelte";

    let data;
    let shownThings;
    let shownLocation;
    let searchText = "";

    onMount(async () => {
        data = await things.getAll();
        shownThings = data.things;
    });

    function showAll() {
        shownLocation = null;
        shownThings = filtered();
    }

    function filterThings(category) {
        return shownThings.filter(thing => thing.categories.includes(category));
    }

    function filtered() {
        let filtered = data.things;
        if (shownLocation)
            filtered = filtered.filter(thing => thing.location === shownLocation);
        if (searchText.length > 0)
            filtered = filtered.filter(thing => thing.name.toLowerCase().includes(searchText.toLowerCase()));
        
        return filtered;
    }

    function filterByLocation(location) {
        shownLocation = location;
        shownThings = filtered();
    }
</script>

<Header />
<div class="pt-4 lg:w-3/4 mx-auto">
    {#if !data}
        <LoadingIndicator />
    {:else}
        <div class="flex flex-col md:flex-row flex-wrap px-4 mb-8 gap-4">
            <TextInput
                bind:value={searchText}
                on:input={() => shownThings = filtered()}
                placeholder="Search..."
            />
            <div class="flex flex-row flex-wrap gap-4">
                <button on:click={showAll} class:selected={shownLocation == null} class="bg-indigo-100 px-2 py-1 rounded brutal hovers font-bold outline-none">All</button>
                {#each data.locations as location}
                    <button on:click={() => filterByLocation(location)} class:selected={shownLocation === location} class="bg-indigo-100 px-2 py-1 rounded brutal hovers font-bold outline-none">{location}</button>
                {/each}
            </div>
        </div>
        {#key shownThings}
            {#each data.categories as category}
                {#if filterThings(category).length > 0}
                    <div>
                        <div class="pl-4 text-4xl lg:text-5xl font-display text-primary" style="text-shadow:2px 2px #000000">{category}</div>
                        <Scroller things={filterThings(category)} />
                    </div>
                {/if}
            {/each}
        {/key}
    {/if}
</div>

<style>
    button.selected {
        @apply bg-green-200;
    }
</style>