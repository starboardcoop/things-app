<script>
    export let bold = false;
    export let italic = false;
    export let center = false;
    export let color = "inherit";
</script>

<h2 
    class:bold
    class:italic
    class:center   
    class={`text-2xl text-${color}`}
>
    <slot />
</h2>

<style>
    .bold {
        @apply font-bold;
    }

    .italic {
        @apply italic;
    }

    .center {
        @apply text-center;
    }
</style>