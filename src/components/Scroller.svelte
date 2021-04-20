<script>
    import Card from "./Card.svelte";
    import Image from "./Image.svelte";
    import Text from "./Text.svelte";

    export let things = [];
</script>

<div class="flex flex-row overflow-auto pl-8 py-7 lg:flex-wrap">
    {#each things as thing}
        <div class="pr-3 lg:pr-6 lg:pb-6">
            <Card style="h-24 w-24 lg:h-48 lg:w-48">
                <Image height="full" src={thing.image} alt={thing.name} />
            </Card>
            <div class="pl-1 pt-2 w-24">
                <Text bold small>{thing.name}</Text>
                {#if thing.stock > 0}
                    <Text small>{thing.stock} in stock</Text>
                {/if}
            </div>
        </div>
    {/each}
</div>