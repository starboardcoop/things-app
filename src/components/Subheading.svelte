<script>
    export let caps = false;
    export let center = false;
    export let oversized = false;
    export let color = "inherit";

    let size = oversized ? "text-6xl" : "text-xl md:text-2xl lg:text-3xl";
</script>

<h3 class:caps class:center class="{size} font-bold text-{color}">
    <slot />
</h3>

<style>
    .caps {
        @apply uppercase;
    }

    h3.center {
        @apply text-center;
    }
</style>