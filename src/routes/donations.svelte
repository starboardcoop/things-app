<script>
    import Column from "../components/Column.svelte";
    import Section from "../components/Section.svelte";
    import Title from "../components/Title.svelte";
    import Heading from "../components/Heading.svelte";
    import Text from "../components/Text.svelte";
    import Button from "../components/Button.svelte";

    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSfpUUKhhCr32Z_fE8ogvmDv4bD0icWrgTt7QOZVfaNVZemOcg/viewform?usp=sf_link";
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
            <div>
                <Button primary>
                    <a href={formURL} target="_blank" rel="nofollow">Donate</a>
                </Button>
            </div>
        </Column>
    </Section>
</Column>