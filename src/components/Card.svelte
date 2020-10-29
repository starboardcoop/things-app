<script>
    export let featured = false;
</script>

<div class:featured class="overflow-hidden bg-white flex flex-col space-y-2 rounded-md shadow-md">
    <slot />
</div>

<style>
    div.featured {
        @apply rounded-b-md;
        @apply border-t-4;
        @apply border-primary;
    }
</style>