<script>
    import Heading from "../../components/Heading.svelte";
    import Subheading from "../../components/Subheading.svelte";
    import Text from "../../components/Text.svelte";

    let thing = {}
</script>

<div class="flex flex-col space-y-5">
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