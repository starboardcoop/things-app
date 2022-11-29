<script>
    import { onMount } from "svelte";
    import * as things from '../lib/things';
    import { filter } from '../lib/filters';
    import Header from "../components/Header.svelte";
    import Things from '../components/Things';
    import TextInput from "../components/TextInput.svelte";
    import LoadingIndicator from "../components/LoadingIndicator.svelte";

    let data;
    let shownThings;
    let searchText = "";
    let showWantedThings = false;

    const buttonStyle = 'px-3 py-1 rounded brutal hovers font-bold font-display outline-none';

    onMount(async () => {
        data = await things.getAll();
        shownThings = data.things;
    });

    const filterThings = () => {
        shownThings = filter(data.things, {
            keyword: searchText,
            showWantedThings: showWantedThings
        });
    }

    const showAll = () => {
        showWantedThings = false;
        filterThings();
    }

    const showWanted = () => {
        showWantedThings = true;
        filterThings();
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
                on:input={filterThings}
                placeholder="Search..."
            />
            <div class="flex flex-row flex-wrap gap-4">
                <button on:click={showAll} class:selected={!showWantedThings} class="bg-indigo-100 {buttonStyle}">All</button>
                <button on:click={showWanted} class:toggled={showWantedThings} class="bg-red-100 {buttonStyle}">Wanted</button>
            </div>
        </div>
        <Things things={shownThings} categories={data.categories} />
    {/if}
</div>

<style lang="postcss">
    button.selected {
        @apply bg-green-300;
    }

    button.toggled {
        @apply bg-red-300;
    }
</style>