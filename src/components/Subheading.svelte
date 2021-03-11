<script>
    export let caps = false;
    export let center = false;
    export let large = false;
    export let color = "inherit";

    let size = large ? "text-3xl" : "text-xl";
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