<script>
    import Row from "./Row.svelte";
    import Section from "./Section.svelte";
    import Title from "./Title.svelte";
    
    export let title;
</script>

<header class="w-full h-24 p-4 flex flex-col justify-center bg-long-city bg-cover">
    <Row center>
        <img src="/PVD_Things_Logo_White.png" alt="PVD Things" class="h-12"/>
        <h1 hidden>PVD Things</h1>
    </Row>
</header>
{#if title}
    <Section bg="bg">
        <Title color="primary">{title}</Title>
    </Section>
{/if}