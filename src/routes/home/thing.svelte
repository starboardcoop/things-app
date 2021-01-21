<script>
    import { onMount } from "svelte";
    import { goto } from '@sapper/app';

    import Heading from "../../components/Heading.svelte";
    import Image from "../../components/Image.svelte";
    import Subheading from "../../components/Subheading.svelte";
    import Text from "../../components/Text.svelte";
    import Column from "../../components/Column.svelte";

    let thing = {}

    onMount(() => {
        const data = JSON.parse(sessionStorage.getItem("data"));
        const urlParams = new URLSearchParams(window.location.search);
        const thingId = urlParams.get('id');

        thing = data.things.find(t => t.id === thingId)
    })
</script>

<Column spacing="0">
    <div class="w-full flex flex-col justify-center items-center p-8 bg-bg relative text-white">
        <Heading>pvd<span class="text-primary">:</span>thing</Heading>
    </div>
    <div class="flex flex-col space-y-5 mt-10 p-8">
        <div on:click={ () => goto('/home') }>back</div>
        <div>
            <Subheading>{thing.name}</Subheading>
            <Text small>{thing.category}</Text>
        </div>
        <Image src={thing.img} alt={thing.name} />
        <span>
            <Text small>Available:</Text>
            <Text>Coming Soon!</Text>
        </span>
        <span>
            <Text small>Typical out-of-pocket cost:</Text>
            <Text>{thing.price}</Text>
        </span>
    </div>
</Column>