<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let options = [];

    let chosenOption = options[0];
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

<div class="relative h-full" on:click|stopPropagation={() => {}} on:keypress={() => {}}>
    <button on:click={toggleDropdown} class="bg-indigo-100 hover:bg-indigo-50 px-3 py-1 h-full w-40 rounded brutal hovers font-bold font-display text-left outline-none">🛠 {chosenOption}</button>
    <div class:dropdownHidden class="absolute top-14 bg-indigo-50 brutal p-4 rounded-md flex flex-col gap-y-2 z-50">
        {#each options as option}
            <button on:click={() => optionChosen(option)} class="text-lg text-left hover:underline hover:underline-offset-2 hover:decoration-2">{option}</button>
        {/each}
    </div>
</div>

<style lang="postcss">
    .dropdownHidden {
        @apply hidden;
    }
</style>