<script>
	import { onMount } from "svelte";
    import { defaultFilterCategory, filter } from "$lib/filters";
    import Things from "$lib/things/Things.svelte";
    import { Button, TextInput } from "$lib/Foundation.svelte";
    import { ButtonTheme } from "$lib/foundation/button";
    import LoadingIndicator from "$lib/LoadingIndicator.svelte";
	import Chooser from "$lib/foundation/Chooser.svelte";
    import EyeOffIcon from "$lib/icons/eye-off.svg";
    import EyeIcon from "$lib/icons/eye.svg";
    import { t } from "$lib/language/translate";
    import { goto } from '$app/navigation';

    export let data;

    let shownThings = data.things;
    let shownCategory = defaultFilterCategory;
    let searchText = "";
    let showingOnlyWishList = false;

    onMount(() => {
        const urlParams = new URLSearchParams(window.location.search);
        showingOnlyWishList = urlParams.get('showWishList') === 'true';
        filterThings();
     });

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
        goto(`?showWishList=${showingOnlyWishList}`);
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
                    <Button
                        icon={EyeOffIcon} 
                        selectedIcon={EyeIcon} 
                        on:click={toggleWishList} 
                        theme={ButtonTheme.default} 
                        text={$t("Button.WishList")}
                        selected={showingOnlyWishList}>
                        {$t("Button.WishList")}
                    </Button>
                {/key}
            </div>
            <TextInput
                bind:value={searchText}
                on:input={filterThings}
                placeholder={$t("Input.Search")}
            />
        </div>
        <div class="mb-8">
            {#if shownThings.length > 0}
                <Things things={shownThings} categories={data.categories} {shownCategory} />
            {:else}
                <div class="text-lg text-center font-bold uppercase">{$t("No Results")}</div>
            {/if}
        </div>
    {/if}
</div>