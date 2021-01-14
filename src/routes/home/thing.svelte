<script>
    import { onMount } from "svelte";
    import Heading from "../../components/Heading.svelte";
    import Image from "../../components/Image.svelte";
    import Subheading from "../../components/Subheading.svelte";
    import Text from "../../components/Text.svelte";

    let thing = {}

    onMount(() => {
        const data = JSON.parse(sessionStorage.getItem("data"));
        const urlParams = new URLSearchParams(window.location.search);
        const thingId = urlParams.get('id');

        thing = data.things.find(t => t.id === thingId)
    })
</script>

<main class="bg-indigo-300 w-screen min-h-screen font-mono">
    <div>
        <div class="w-full flex flex-col justify-center items-center p-8 bg-bg relative text-white">
            <Heading>pvd<span class="text-primary">:</span>thing</Heading>
        </div>
        <div class="flex flex-col space-y-5 mt-10 p-8">
            <Subheading>{thing.name}</Subheading>
            <div class="brutal overflow-hidden bg-white">
                <Image src={thing.img} alt={thing.name} />
            </div>
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
    </div>
</main>