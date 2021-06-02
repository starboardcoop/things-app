<script>
    import Card from "./Card.svelte";
    import Image from "./Image.svelte";
    import Text from "./Text.svelte";

    export let things = [];
</script>

<div class="flex flex-row gap-3 lg:gap-6 overflow-x-scroll p-4 my-6 lg:flex-wrap">
    {#each things as thing}
        <div>
            <Card style="h-24 w-24 lg:h-48 lg:w-48">
                <Image height="full" src={thing.image} alt={thing.name} />
            </Card>
            <div class="pl-1 pt-2 w-24 lg:w-48">
                <Text bold smallauto>{thing.name}</Text>
                {#if thing.stock > 0}
                    <Text small>{thing.stock} in stock</Text>
                {/if}
            </div>
        </div>
    {/each}
</div>