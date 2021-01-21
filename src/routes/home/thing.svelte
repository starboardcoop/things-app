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

    let thing = {}

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
        <Spacer />
        <Column>
            <Grid>
                <Card hovers={false}>
                    <Image src={thing.img} alt={thing.name} />
                </Card>
                <div>
                    <div>
                        <Subheading>{thing.name}</Subheading>
                        <Text small>{thing.category}</Text>
                    </div>
                    <span>
                        <Text small>Available:</Text>
                        <Text>Coming Soon!</Text>
                    </span>
                    <span>
                        <Text small>Typical out-of-pocket cost:</Text>
                        <Text>{thing.price}</Text>
                    </span>
                </div>
            </Grid>
        </Column>
    </Section>
</Column>