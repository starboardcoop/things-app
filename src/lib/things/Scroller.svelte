<script lang="ts">
    import Thing from "./Thing.svelte";

    export let wrap = false;
    const style = wrap ? "grid grid-cols-3 md:grid-cols-5 gap-4 place-content-between" : "flex flex-row overflow-auto";

    export let things = [];
    things = things.sort((a, b) => b.stock - a.stock);
</script>

<div class={style}>
    {#each things as thing}
        <Thing {thing} />
    {/each}
</div>