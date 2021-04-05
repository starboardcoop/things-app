<script>
    import Head from "../components/Head.svelte";
    import Column from "../components/Column.svelte";
    import Section from "../components/Section.svelte";
    import Heading from "../components/Heading.svelte";
    import Text from "../components/Text.svelte";
    import Button from "../components/Button.svelte";
    import Header from "../components/Header.svelte";

    const formURL = "https://airtable.com/shr2qWhgJ3cFEjjhw";
    const gofundmeURL = "https://www.gofundme.com/f/cooperative-library-of-things-in-providence";
</script>

<Head
	title="Donations | PVD Things"
	description="A non-profit co-op for sharing those things you need once in a while."
	keywords="donations, nonprofit, things, tools, tool rentals, equipment, cooperative, Providence, Rhode Island"
	image="https://pvdthings.coop/pvd-pixels.jpg"
	twitterHandle="@pvdthings"
	url="https://pvdthings.coop/donations"
/>

<Column spacing="0">
    <Header title="Donating Things" />
    <Section>
        <Column>
            <div>
                <Heading>Have a <span class="font-bold">Thing</span> to donate?</Heading>
                <Text>As a nonprofit organization in the early startup phase, Thing donations are very much appreciated. Click the button below to fill out our donation form.</Text>
            </div>
            <div>
                <Button primary>
                    <a href={formURL} target="_blank" rel="nofollow">Donate Thing</a>
                </Button>
            </div>
        </Column>
    </Section>
    <Section>
        <Column>
            <div>
                <Heading>Have <span class="font-bold">money</span> to donate?</Heading>
                <Text>We would eventually like to be 100% member-funded. But as we're starting up, we need community support. If you can afford to make a donation, it would be very much appreciated.</Text>
            </div>
            <div>
                <Button primary>
                    <a href={gofundmeURL} target="_blank">Donate Money</a>
                </Button>
            </div>
        </Column>
    </Section>
</Column>