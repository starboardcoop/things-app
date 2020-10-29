<script>
    export let center = false;
    export let italic = false;
    export let large = false;
    export let subtle = false;
</script>

<div
    class:center 
    class:italic 
    class:large 
    class:subtle 
    class="text-md text-gray-800"
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

    div.subtle {
        @apply text-gray-500;
    }
</style>