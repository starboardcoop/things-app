<script>
    export let center = false
    export let italic = false
    export let bold = false
    export let small = false
    export let smallauto = false
    export let large = false
    export let light = false
    export let display = false
    export let body = true

    if (display) body = false
</script>

<div
    class:center 
    class:italic
    class:small
    class:smallauto
    class:bold
    class:large 
    class:light
    class:display
    class:body
    class="text-lg text-gray-800"
>
    <slot />
</div>

<style lang="postcss">
    div.center {
        @apply text-center;
    }

    div.bold {
        @apply font-bold;
    }

    div.small {
        @apply text-xs;
    }
    
    div.smallauto {
        @apply text-sm;
        @apply lg:text-lg;
    }

    div.large {
        @apply text-2xl;
    }

    div.light {
        @apply text-gray-200;
    }

    div.display {
        @apply font-display;
    }

    div.body {
        @apply font-body;
    }
</style>