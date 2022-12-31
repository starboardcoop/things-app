<script lang="ts">
    import Thing from "./Thing.svelte";

    export let wrap = false;
    const wrapStyle = wrap ? "flex-wrap" : "flex-row lg:flex-wrap";

    export let things = [];
    things = things.sort((a, b) => b.stock - a.stock);
</script>

<div class="flex overflow-auto pl-4 py-7 {wrapStyle}">
    {#each things as thing}
        <Thing {thing} class="pr-3 lg:pr-6 mb-6" />
    {/each}
</div>