<script>
    import { onMount } from "svelte";
    import { goto } from '@sapper/app';

    import Heading from "../../components/Heading.svelte";
    import Image from "../../components/Image.svelte";
    import Subheading from "../../components/Subheading.svelte";
    import Text from "../../components/Text.svelte";
    import Column from "../../components/Column.svelte";
    import Section from "../../components/Section.svelte";
    import Button from "../../components/Button.svelte";
    import Row from "../../components/Row.svelte";
    import Spacer from "../../components/Spacer.svelte";
    import Grid from "../../components/Grid.svelte";
    import Card from "../../components/Card.svelte";
    import TextInput from "../../components/TextInput.svelte";

    let thing = {}
    let showModal = false;
    const toggleModal = () => showModal = !showModal;
    let pickUp = "";
    let dropOff = "";

    onMount(() => {
        const data = JSON.parse(sessionStorage.getItem("data"));
        const urlParams = new URLSearchParams(window.location.search);
        const thingId = urlParams.get('id');

        thing = data.things.find(t => t.id === thingId)
    })
</script>

<div class="w-full flex flex-col justify-center items-center p-8 bg-bg relative text-white">
    <Heading>pvd<span class="text-primary">:</span>thing</Heading>
</div>
<Column spacing="0">
    <Section>
        <Row>
            <Button on:click={ () => goto('/home') }>back</Button>
        </Row>
        <Column>
            <div class="mt-10">
                <Grid>
                    <Card hovers={false}>
                        <Image src={thing.img} alt={thing.name} height="60"/>
                        <p slot="modal">👀</p>
                    </Card>
                    <div>
                        <div>
                            <Subheading>{thing.name}</Subheading>
                            <Text small>{thing.category}</Text>
                        </div>
                        <Spacer />
                        <span>
                            <Text small>Available:</Text>
                            <Text>Coming Soon!</Text>
                        </span>
                        <Spacer />
                        <span>
                            <Text small>Typical out-of-pocket cost:</Text>
                            <Text>{thing.price}</Text>
                        </span>
                        <Spacer />
                        <Button on:click={toggleModal} primary>Get it!</Button>
                        <div class="fixed z-10 inset-0 p-8 h-screen w-screen bg-black bg-opacity-50 justify-center align-middle hidden" class:visible={showModal}>
                            <div class="bg-gray-300 p-16 rounded md:max-w-md m-auto border-2 border-black thicc">
                                <Subheading center>Get your {thing.name}!</Subheading>
                                <Spacer />
                                <div>
                                    <div class="p-2">
                                        <Text small bold>Pick Up</Text>
                                    </div>
                                    <TextInput
                                        bind:value={pickUp}
                                        type="text"
                                        placeholder="01/01/2021"
                                        customClass="w-full" 
                                    />
                                </div>
                                <Spacer />
                                <div>
                                    <div class="p-2">
                                        <Text small bold>Drop Off</Text>
                                    </div>
                                    <TextInput
                                        bind:value={dropOff}
                                        type="text"
                                        placeholder="01/01/2021"
                                        customClass="w-full" 
                                    />
                                </div>
                                <Spacer />
                                <Row spread>
                                    <Button cancel on:click={toggleModal}>Cancel</Button>
                                    <Button primary>Reserve</Button>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Grid>
            </div>
            <Spacer />
            <Text small>Description:</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            <Spacer />
            <Text small>Always practice safety while using all Things!</Text>
        </Column>
    </Section>
</Column>

<style>
    div.visible {
        @apply flex;
    }
</style>