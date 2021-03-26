<script>
    import Card from "./Card.svelte";
    import Image from "./Image.svelte";
    import Text from "./Text.svelte";

    export let things = [];
</script>

<div class="flex flex-row space-x-3 overflow-auto px-8 py-7">
    {#each things as thing}
        <div>
            <Card height="24" width="24">
                <Image height="full" src={thing.img} alt={thing.name} />
            </Card>
            <div class="pl-1 pt-2 w-24">
                <Text bold>{thing.name}</Text>
                <Text small>{thing.category}</Text>
            </div>
        </div>
    {/each}
</div>