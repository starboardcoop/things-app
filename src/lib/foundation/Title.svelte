<script>
    export let color = "white";
    export let bold = false;
    export let caps = false;
</script>

<h1 class:bold class:caps class="text-3xl md:text-4xl text-{color} text-center max-w-max px-2 py-1 brutal bg-indigo-500 bg-opacity-75">
    <slot />
</h1>

<style lang="postcss">
    .bold {
        @apply font-bold;
    }

    .caps {
        @apply uppercase;
    }
</style>