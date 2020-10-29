<script>
    export let columns = 2;
    export let rows = 2;
</script>

<div class={`grid grid-flow-col grid-cols-${columns} grid-rows-${rows} gap-4`}>
    <slot />
</div>