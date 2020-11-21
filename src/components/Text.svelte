<script>
    export let center = false;
    export let italic = false;
    export let bold = false;
    export let large = false;
    export let light = false;
</script>

<div
    class:center 
    class:italic
    class:bold
    class:large 
    class:light 
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

    div.bold {
        @apply font-bold;
    }

    div.large {
        @apply text-2xl;
    }

    div.light {
        @apply text-gray-200;
    }
</style>