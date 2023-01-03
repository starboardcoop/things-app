<script>
	import { onMount } from "svelte";
    import { filter } from "$lib/filters";
    import Things from "$lib/things/Things.svelte";
    import { Button, ButtonTheme, TextInput } from "$lib/Foundation.svelte";
    import LoadingIndicator from "$lib/LoadingIndicator.svelte";
	import Chooser from "$lib/foundation/Chooser.svelte";
    import EyeOffIcon from "$lib/icons/eye-off.svg";
    import EyeIcon from "$lib/icons/eye.svg";

    export let data;

    let shownThings = data.things;
    let shownCategory = "DIY";
    let searchText = "";
    let showingOnlyWishList = false;

    onMount(() => filterThings());

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

    const toggleWishList = () => {
        showingOnlyWishList = !showingOnlyWishList;
        filterThings();
    }
</script>

<div class="mx-3 lg:mx-auto lg:w-3/4">
    {#if !data}
        <LoadingIndicator />
    {:else}
        <div class="flex flex-col-reverse mb-8 gap-3 md:h-11 md:w-full md:flex-row md:justify-between">
            <div class="flex flex-row gap-4 justify-between md:justify-start">
                <Chooser on:chosen={filterThingsByCategory} options={data.categories} />
                {#key showingOnlyWishList}
                    <Button icon={EyeOffIcon} selectedIcon={EyeIcon} on:click={toggleWishList} theme={ButtonTheme.default} text="Wish List" selected={showingOnlyWishList} />
                {/key}
            </div>
            <TextInput
                bind:value={searchText}
                on:input={filterThings}
                placeholder="Search..."
            />
        </div>
        <div class="mb-8">
            <Things things={shownThings} categories={data.categories} {shownCategory} />
        </div>
    {/if}
</div>