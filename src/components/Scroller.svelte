<script>
    import Card from "./Card.svelte";
    import Image from "./Image.svelte";
    import Text from "./Text.svelte";

    export let things = [];
    things = things.sort((a, b) => b.stock - a.stock);
</script>

<div class="flex flex-row overflow-auto pl-4 py-7 lg:flex-wrap">
    {#each things as thing}
        <div class="pr-3 lg:pr-6 lg:pb-6 flex flex-col">
            <Card style="h-24 w-24 lg:h-48 lg:w-48">
                <Image height="full" src={thing.image} alt={thing.name} />
            </Card>
            <div class="pl-1 pt-2 w-24 lg:w-48 flex flex-col gap-2 justify-between flex-grow">
                <Text bold smallauto>{thing.name}</Text>
                <div class="flex flex-col lg:flex-row gap-2">
                    {#if thing.stock > 0}
                        <div class="px-2 py-1 rounded bg-black"><Text small light>{thing.stock} in stock</Text></div>
                    {:else}
                        <div class="px-2 py-1 rounded bg-white"><Text small>Wanted</Text></div>
                    {/if}
                </div>
            </div>
        </div>
    {/each}
</div>