<script>
    export let primary = false;
    export let small = false;
    export let cancel = false;
</script>

<button on:click class:primary class:cancel class:small class="uppercase cursor-pointer bg-indigo-100 font-bold px-4 py-2 brutal hovers">
    <slot />
</button>

<style>
    button.primary {
        @apply bg-primary;
    }

    button.cancel {
        @apply bg-gray-800;
        @apply text-white;
    }

    button.small {
        @apply text-sm;
    }
</style>