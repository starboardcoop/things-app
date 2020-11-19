<script>
    export let center = false;
    export let italic = false;
    export let bold = false;
    export let small = false;
    export let large = false;
    export let dark = false;
</script>

<div
    class:center 
    class:italic
    class:small
    class:bold
    class:large 
    class:dark 
    class="text-md text-gray-300"
>
    <slot />
</div>

<style>
    div.center {
        @apply text-center;
    }

    div.italic {
        @apply italic;
    }

    div.bold {
        @apply font-bold;
    }

    div.small {
        @apply text-xs;
    }

    div.large {
        @apply text-2xl;
    }

    div.dark {
        @apply text-gray-800;
    }
</style>