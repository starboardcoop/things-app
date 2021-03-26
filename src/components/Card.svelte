<script>
    export let height = "auto";
    export let width = "auto";
    export let hovers = true;
</script>

<div class={`h-${height} w-${width}`}>
    <div class:hovers class="h-full bg-white brutal overflow-hidden">
        <slot />
    </div>
</div>