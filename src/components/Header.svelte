<script>
    import Row from "./Row.svelte";
    import Title from "./Title.svelte";
    
    export let title;
</script>

<header class="w-full p-4 flex flex-col space-y-8 justify-center bg-long-city bg-cover border-b-2 border-gray-200">
    <Row center>
        <img src="/PVD_Things_Logo_White.png" alt="PVD Things" class="h-14 md:h-20 lg:h-24"/>
        <h1 hidden>PVD Things</h1>
    </Row>
    {#if title}
        <Row center><Title bold caps backdrop size="3">{title}</Title></Row>
    {/if}
</header>