<script>
    export let bold = false;
    export let italic = false;
    export let center = false;
    export let color = "inherit";
</script>

<div 
    class:bold
    class:italic
    class:center   
    class={`text-2xl text-${color}`}
>
    <slot />
</div>

<style>
    div.bold {
        @apply font-bold;
    }
    div.italic {
        @apply italic;
    }
    div.center {
        @apply text-center;
    }
</style>