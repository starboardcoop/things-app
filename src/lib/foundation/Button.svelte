<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { ButtonSize, ButtonTheme } from './button';

    export let text: string = 'Button';
    export let icon: string = null;
    export let selectedIcon: string = null;
    export let selected: boolean = false;
    export let theme: ButtonTheme = ButtonTheme.default;
    export let size: ButtonSize = ButtonSize.normal;
    export let flat: boolean = false;

    const padding = size === ButtonSize.normal ? 'px-3 py-1' : 'px-2';

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
    class:primary={theme === ButtonTheme.primary}
    class:primaryToggled={isToggled(ButtonTheme.primary)}
    class="{padding} rounded brutal {!flat && 'hovers'} font-bold font-display outline-none">
        {#if icon && !selected}
            <img class="icon" src={icon} alt={text} />
        {/if}
        {#if selectedIcon && selected}
            <img class="icon" src={selectedIcon} alt={text} />
        {/if}
        <slot />
</button>

<style lang="postcss">
    button.default {
        @apply bg-indigo-100;
    }

    button.defaultToggled {
        @apply bg-primary !important;
    }

    button.primary {
        @apply bg-primary;
    }

    button.primaryToggled {
        @apply bg-primary;
    }

    img.icon {
        @apply inline h-5 w-5 mr-1;
    }
</style>