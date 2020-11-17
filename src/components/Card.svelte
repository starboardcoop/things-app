<script>
    export let featured = false;
</script>

<div class:featured class="overflow-hidden bg-white flex flex-col space-y-2 rounded-sm shadow-md transform hover:scale-105 duration-200">
    <slot />
</div>

<style>
    div.featured {
        @apply rounded-b-md;
        @apply border-t-4;
        @apply border-primary;
    }
</style>