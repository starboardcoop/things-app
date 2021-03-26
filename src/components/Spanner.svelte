<script>
    export let gap = "4";
    export let center = false;
</script>

<div class:center class="grid gap-{gap} grid-flow-row md:grid-flow-col">
    <slot />
</div>

<style>
    .center {
        @apply text-center;
    }
</style>