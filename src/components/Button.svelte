<script>
    export let primary = false;
</script>

<button class:primary class="uppercase cursor-pointer bg-white font-bold px-4 py-2 brutal hovers">
    <slot />
</button>

<style>
    button.primary {
        @apply bg-primary;
    }
</style>