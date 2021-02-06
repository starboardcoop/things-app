<script>
    import Head from "../components/Head.svelte";
    import Column from "../components/Column.svelte";
    import Section from "../components/Section.svelte";
    import Title from "../components/Title.svelte";
    import Heading from "../components/Heading.svelte";
    import Text from "../components/Text.svelte";
    import Button from "../components/Button.svelte";

    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSfpUUKhhCr32Z_fE8ogvmDv4bD0icWrgTt7QOZVfaNVZemOcg/viewform?usp=sf_link";
</script>

<Head
	title="PVD:THINGS | Donations"
	description="A non-profit co-op for sharing those things you need once in a while."
	keywords="donations, nonprofit, things, tools, tool rentals, equipment, cooperative, Providence, Rhode Island"
	image="https://pvdthings.netlify.app/pvd-pixels.jpg"
	twitterHandle="@pvdthings"
	url="https://pvdthings.netlify.app/donations"
/>

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