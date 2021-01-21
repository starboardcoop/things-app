<script>
    export let primary = false;
    export let small = false;
</script>

<button on:click class:primary class:small class="uppercase cursor-pointer bg-indigo-100 font-bold px-4 py-2 brutal hovers">
    <slot />
</button>

<style>
    button.primary {
        @apply bg-primary;
    }

    button.small {
        @apply text-sm;
    }
</style>