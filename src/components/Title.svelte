<script>
    export let color = "white";
    export let bold = false;
    export let caps = false;
    export let backdrop = false;
</script>

<h1 class:bold class:caps class:backdrop class="text-3xl md:text-4xl text-{color} text-center max-w-max px-2">
    <slot />
</h1>

<style>
    .bold {
        @apply font-bold;
    }

    .caps {
        @apply uppercase;
    }

    .backdrop {
        @apply bg-indigo-700;
    }
</style>