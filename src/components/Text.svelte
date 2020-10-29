<script>
    export let center = false;
    export let italic = false;
    export let large = false;
    export let dark = false;
</script>

<div
    class:center 
    class:italic 
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

    div.large {
        @apply text-2xl;
    }

    div.dark {
        @apply text-gray-800;
    }
</style>