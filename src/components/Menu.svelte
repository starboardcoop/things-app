<script>
import Text from "./Text.svelte";

    export let pages = [
        {
            label: "home",
            url: "/home"
        }, 
        {
            label: "donations",
            url: "/donations"
        }
    ];
</script>

<div class="flex flex-col space-y-4 fixed bottom-4 md:top-4 right-4 items-end">
    <div class="h-16 w-16 rounded-full cursor-pointer bg-indigo-300 border-2 border-black shadow hover:shadow-lg text-center p-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" viewBox="0 0 24 24" stroke-width="1.7" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
    </div>
    <nav class="bg-white w-max overflow-hidden">
        {#each pages as page}
            <a href={page.url}><Text>{page.label}</Text></a>
        {/each}
    </nav>
</div>