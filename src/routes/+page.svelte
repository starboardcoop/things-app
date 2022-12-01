<script>
    import { filter } from "$lib/filters";
    import Things from "$lib/things/Things.svelte";
    import { Button, ButtonTheme, TextInput } from "$lib/Foundation.svelte";
    import LoadingIndicator from "$lib/LoadingIndicator.svelte";

    export let data;

    let shownThings = data.things;
    let searchText = "";
    let showingOnlyWishList = false;

    const filterThings = () => {
        shownThings = filter(data.things, {
            keyword: searchText,
            showWantedThings: showingOnlyWishList
        });
    }

    const showAll = () => {
        showingOnlyWishList = false;
        filterThings();
    }

    const showOnlyWishList = () => {
        showingOnlyWishList = true;
        filterThings();
    }
</script>

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
                {#key showingOnlyWishList}
                    <Button on:click={showAll} theme={ButtonTheme.default} text="All" selected={!showingOnlyWishList} />
                    <Button on:click={showOnlyWishList} theme={ButtonTheme.alert} text="Wish List" selected={showingOnlyWishList} />
                {/key}
            </div>
        </div>
        <Things things={shownThings} categories={data.categories} />
    {/if}
</div>