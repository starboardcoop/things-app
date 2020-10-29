<script>
    export let right = false;
</script>

<div class:right class="flex flex-row space-x-4">
    <slot />
</div>

<style>
    div.right {
        @apply justify-end;
    }
</style>