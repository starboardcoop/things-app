<script>
    export let center = false;
</script>

<h3 class:center class="text-xl font-bold text-gray-500">
    <slot />
</h3>

<style>
    h3.center {
        @apply text-center;
    }
</style>