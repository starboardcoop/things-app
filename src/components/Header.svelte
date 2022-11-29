<script>
    import { Row, Title } from "./foundation";
    
    export let title = null;
</script>

<header class="w-full p-4 flex flex-col space-y-8 justify-center bg-long-city bg-center bg-cover border-b-2 border-bg">
    <div class="grid grid-cols-3">
        <div class="flex flex-row justify-start">
            <div>
                <a href="https://pvdthings.coop" class="flex flex-row items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 lg:w-12 lg:h-12" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="15 6 9 12 15 18" />
                    </svg>
                    <div class="text-xl lg:text-2xl font-bold font-display hover:underline">BACK</div>
                </a>
            </div>
        </div>
        <div class="flex flex-row justify-center">
            <a href="https://pvdthings.coop">
                <img src="/PVD_Things_Logo_White.png" alt="PVD Things" class="mt-2 h-14 md:h-20 lg:h-24"/>
            </a>
        </div>
        <div class="flex flex-row justify-end"></div>
    </div>
    <Row center><slot /></Row>
    {#if title}
        <Row center><Title bold caps>{title}</Title></Row>
    {:else}
        <h1 hidden>PVD Things</h1>
    {/if}
</header>