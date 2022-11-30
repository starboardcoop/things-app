<script>
    import { filter } from "$lib/filters";
    import Header from "$lib/Header.svelte";
    import Things from "$lib/things/Things.svelte";
    import { TextInput } from "$lib/foundation";
    import LoadingIndicator from "$lib/LoadingIndicator.svelte";

    export let data;

    let shownThings = data.things;
    let searchText = "";
    let showWantedThings = false;

    const buttonStyle = 'px-3 py-1 rounded brutal hovers font-bold font-display outline-none';

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