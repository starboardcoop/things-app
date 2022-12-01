<script>
    import { filter } from "$lib/filters";
    import Header from "$lib/Header.svelte";
    import Things from "$lib/things/Things.svelte";
    import { Button, ButtonTheme, TextInput } from "$lib/Foundation.svelte";
    import LoadingIndicator from "$lib/LoadingIndicator.svelte";

    export let data;

    let shownThings = data.things;
    let searchText = "";
    let showWantedThings = false;

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
                {#key showWantedThings}
                    <Button on:click={showAll} theme={ButtonTheme.default} text="All" selected={!showWantedThings} />
                    <Button on:click={showWanted} theme={ButtonTheme.alert} text="Wanted" selected={showWantedThings} />
                {/key}
            </div>
        </div>
        <Things things={shownThings} categories={data.categories} />
    {/if}
</div>