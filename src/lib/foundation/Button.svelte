<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import ButtonTheme from './buttonTheme';

    export let text: string = 'Button';
    export let icon: string = null;
    export let selectedIcon: string = null;
    export let selected: boolean = false;
    export let theme: ButtonTheme = ButtonTheme.default;

    const isToggled = (providedTheme: ButtonTheme) => theme === providedTheme && selected;

    const dispatch = createEventDispatcher();

    const onClick = () => {
        dispatch('click', `"${text}" Button clicked`);
    }
</script>

<button
    on:click={onClick}
    class:default={theme === ButtonTheme.default}
    class:defaultToggled={isToggled(ButtonTheme.default)}
    class:alert={theme === ButtonTheme.alert}
    class:alertToggled={isToggled(ButtonTheme.alert)}
    class="px-3 py-1 rounded brutal hovers font-bold font-display outline-none">
        {#if icon && !selected}
            <img class="icon" src={icon} alt={text} />
        {/if}
        {#if selectedIcon && selected}
            <img class="icon" src={selectedIcon} alt={text} />
        {/if}
        {text}
</button>

<style lang="postcss">
    button.default {
        @apply bg-indigo-100;
    }

    button.defaultToggled {
        @apply bg-primary !important;
    }

    button.alert {
        @apply bg-red-100;
    }

    button.alertToggled {
        @apply bg-red-300 !important;
    }

    img.icon {
        @apply inline h-5 w-5 mr-1;
    }
</style>