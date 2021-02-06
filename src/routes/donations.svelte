<script>
    import Column from "../components/Column.svelte";
    import Section from "../components/Section.svelte";
    import Title from "../components/Title.svelte";
    import Heading from "../components/Heading.svelte";
    import Text from "../components/Text.svelte";
    import Button from "../components/Button.svelte";
</script>

<Column spacing="0">
    <Section bg="bg">
        <Title>Donating Things</Title>
    </Section>
    <Section>
        <Column>
            <div>
                <Heading>Have a Thing to donate?</Heading>
                <Text>As a nonprofit organization in the early startup phase, Thing donations are very much appreciated. Click the button below to fill out our donation form.</Text>
            </div>
            <div><Button primary>Donate</Button></div>
        </Column>
    </Section>
</Column>