<script>
    import Card from "./Card.svelte";
    import Image from "./Image.svelte";
    import Subheading from "./Subheading.svelte";
    import Heading from "./Heading.svelte";
    import Text from "./Text.svelte";

    export let things = [];
</script>

<div class="flex flex-row gap-3 overflow-auto px-8 py-7">
    {#each things as thing}
        <div>
            <Card height="24" width="24">
                <Image height="full" src={thing.img} alt={thing.name} />
                <div class="flex flex-col space-y-5" slot="modal">
                    <Subheading bold>pvd<span class="text-indigo-600">:</span>thing</Subheading>
                    <Heading bold>{thing.name}</Heading>
                    <span>
                        <Text small>Available:</Text>
                        <Text>Coming Soon!</Text>
                    </span>
                    <span>
                        <Text small>Typical out-of-pocket cost:</Text>
                        <Text>{thing.price}</Text>
                    </span>
                    <Text small>{thing.category}</Text>
                </div>
            </Card>
            <div class="pl-1 pt-2 w-24">
                <Text bold>{thing.name}</Text>
                <Text small>{thing.category}</Text>
            </div>
        </div>
    {/each}
</div>