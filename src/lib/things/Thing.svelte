<script>
	import { Card, Image, Text } from "$lib/Foundation.svelte";

    export let thing;

    let className = "";
    export { className as class };
</script>

<div class="flex flex-col {className}">
    <Card>
        <Image src={thing.image} alt={thing.name} class="aspect-square" />
    </Card>
    <div class="pl-1 pt-2 flex flex-col gap-2 justify-between flex-grow">
        <Text display bold smallauto>{thing.name}</Text>
        <div class="flex flex-col lg:flex-row gap-2">
            {#if thing.stock > 0}
                <div class="px-2 py-1 rounded bg-green-300">Available</div>
            {:else}
                <div class="px-2 py-1 rounded bg-yellow-300">Wish List</div>
            {/if}
        </div>
    </div>
</div>