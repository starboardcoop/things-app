<script>
    export let caps = false;
    export let bold = false;
    export let center = false;
    export let color = "inherit";
</script>

<h3 class:caps class:bold class:center class={`text-xl font-bold text-${color}`}>
    <slot />
</h3>

<style>
    .caps {
        @apply uppercase;
    }

    .bold {
        @apply font-bold;
    }

    h3.center {
        @apply text-center;
    }
</style>