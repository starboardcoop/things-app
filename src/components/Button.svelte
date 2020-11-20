<script>
    export let primary = false;
</script>

<button class:primary class="uppercase cursor-pointer bg-white font-bold px-4 py-2 rounded border-2 border-black solid transform hover:scale-105 duration-200">
    <slot />
</button>

<style>
    button.primary {
        @apply bg-primary;
    }

    .solid {
        box-shadow: 2px 2px 0 #000000;
    }

    .solid:hover {
        box-shadow: 4px 4px 0 #000000;
    }
</style>