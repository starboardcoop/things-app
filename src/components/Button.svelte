<script>
    export let primary = false;
</script>

<button class:primary class="cursor-pointer bg-white font-bold px-4 py-2 rounded-sm shadow-md hover:shadow-lg transform hover:scale-105 duration-200">
    <slot />
</button>

<style>
    button.primary {
        @apply bg-primary;
    }
</style>