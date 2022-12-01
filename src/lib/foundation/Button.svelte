<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import ButtonTheme from './buttonTheme';

    export let text: string = 'Button';
    export let selected: boolean = false;
    export let theme: ButtonTheme = ButtonTheme.default;

    const isToggled = (providedTheme: ButtonTheme) => theme === providedTheme && selected;

    const dispatch = createEventDispatcher();

    const onClick = () => {
        if (selected) return;
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
        {text}
</button>

<style lang="postcss">
    button.default {
        @apply bg-indigo-100;
    }

    button.defaultToggled {
        @apply bg-green-300 !important;
    }

    button.alert {
        @apply bg-red-100;
    }

    button.alertToggled {
        @apply bg-red-300 !important;
    }
</style>