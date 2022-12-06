<script>
    import { filter } from "$lib/filters";
    import Things from "$lib/things/Things.svelte";
    import { Button, ButtonTheme, TextInput } from "$lib/Foundation.svelte";
    import LoadingIndicator from "$lib/LoadingIndicator.svelte";
	import Chooser from "$lib/foundation/Chooser.svelte";

    export let data;

    let shownThings = data.things;
    let shownCategory = "DIY";
    let searchText = "";
    let showingOnlyWishList = false;

    const filterThings = () => {
        shownThings = filter(data.things, {
            keyword: searchText,
            onlyWishList: showingOnlyWishList,
            category: shownCategory
        });
    }

    const filterThingsByCategory = (event) => {
        shownCategory = event.detail;
        filterThings();
    }
</script>

<div class="pt-4 lg:w-3/4 mx-auto">
    {#if !data}
        <LoadingIndicator />
    {:else}
        <div class="flex flex-col-reverse md:h-11 md:flex-row px-4 mb-8 gap-4">
            <Chooser on:chosen={filterThingsByCategory} options={data.categories} />
            <TextInput
                bind:value={searchText}
                on:input={filterThings}
                placeholder="Search..."
            />
        </div>
        <Things things={shownThings} categories={data.categories} />
    {/if}
</div>