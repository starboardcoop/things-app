<script>
    export let columns = "2";
</script>

<div class={`grid gap-x-4 grid-cols-1 row-auto md:grid-cols-${columns}`}>
    <slot />
</div>