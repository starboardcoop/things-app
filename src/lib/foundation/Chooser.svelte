<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { defaultFilterCategory } from "../filters"

    export let options = [];

    let chosenOption = defaultFilterCategory;
    let dropdownHidden = true;

    const dispatch = createEventDispatcher();

    const toggleDropdown = () => {
        dropdownHidden = !dropdownHidden;
    }

    const optionChosen = (option) => {
        chosenOption = option;
        toggleDropdown();
        dispatch("chosen", option);
    }
</script>

<svelte:window on:click={() => dropdownHidden = true} />

<div class="relative h-11" on:click|stopPropagation={() => {}} on:keypress={() => {}}>
    <button on:click={toggleDropdown} class="{ dropdownHidden ? 'bg-indigo-100 hover:bg-indigo-50' : 'bg-primary' } px-3 py-1 h-full w-44 rounded brutal hovers font-bold font-display text-left outline-none">
        <span class="mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="inline"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </span>
        <span>{chosenOption}</span>
    </button>
    <div class:dropdownHidden class="fixed top-0 left-0 w-full h-full overflow-y-scroll md:h-fit md:absolute md:top-14 bg-indigo-50 md:brutal md:hovers-static p-4 md:rounded-md flex flex-col gap-y-4 md:gap-y-2 z-50">
        <div class="text-xl font-bold md:hidden">Choose a category&colon;</div>
            <button on:click={() => optionChosen(defaultFilterCategory)} class="text-2xl md:text-lg text-left active:underline hover:underline hover:underline-offset-2 hover:decoration-2">{defaultFilterCategory}</button>
        {#each options as option}
            <button on:click={() => optionChosen(option)} class="text-2xl md:text-lg text-left active:underline hover:underline hover:underline-offset-2 hover:decoration-2">{option}</button>
        {/each}
    </div>
</div>

<style lang="postcss">
    .dropdownHidden {
        @apply hidden;
    }
</style>