<script>
    export let caps = false;
    export let bold = false;
    export let italic = false;
    export let center = false;
    export let color = "inherit";
</script>

<h2
    class:caps
    class:bold
    class:italic
    class:center   
    class={`text-2xl md:text-3xl text-${color}`}
>
    <slot />
</h2>

<style>
    .caps {
        @apply uppercase;
    }

    .bold {
        @apply font-bold;
    }

    .center {
        @apply text-center;
    }
</style>