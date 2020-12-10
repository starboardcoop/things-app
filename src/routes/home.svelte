<script>
    import { onMount } from "svelte";
    import Card from "../components/Card.svelte";
    import Container from "../components/Container.svelte";
    import Session from "../session";
    import Subheading from "../components/Subheading.svelte";
    import Text from "../components/Text.svelte";
    import Image from "../components/Image.svelte";
    import Heading from "../components/Heading.svelte";

    let name;
    let data = thingify();

    onMount(() => {
        const session = Session.json();
        console.log(session);
        name = session.name;
    });

    async function thingify() {
        const result = await fetch(`/.netlify/functions/things`);
        data = await result.json();
        console.log(data);
        return data;
    }
</script>

<main class="bg-indigo-300 w-screen h-screen font-mono">
    <div>
        <div class="w-full flex flex-col justify-center items-center p-8 overflow-hidden">
            <h1>Hi, {name}!</h1>
        </div>
        <Container>
            <h2>Recommended Things:</h2>
        </Container>
        <div class="flex flex-row gap-3 overflow-auto px-8 py-7">
            {#await data}
                loading...
            {:then}
                {#each data.things as thing}
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
            {:catch error}
                whoops!: {error}
            {/await}
        </div>
    </div>
</main>