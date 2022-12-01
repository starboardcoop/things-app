<script lang="ts">
    import Thing from "./Thing.svelte";

    export let things = [];
    things = things.sort((a, b) => b.stock - a.stock);
</script>

<div class="flex flex-row overflow-auto pl-4 py-7 lg:flex-wrap">
    {#each things as thing}
        <Thing {thing} />
    {/each}
</div>