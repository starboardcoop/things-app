<script>
    export let value = "";
    export let invalid = false;
</script>

<input
    {...$$props}
    bind:value
    on:input
    on:change
    class:invalid
    class="px-4 py-2 brutal hovers outline-none" />

<style>
    .invalid {
        @apply bg-red-200;
    }
</style>