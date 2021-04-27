<script>
    export let hovers = true
    export let style = "h-auto w-auto"
</script>

<div class={style}>
    <div class:hovers class="h-full bg-white brutal overflow-hidden">
        <slot />
    </div>
</div>