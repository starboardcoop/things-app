<script>
    export let pages = [
        {
            label: "home",
            url: "/"
        }, 
        {
            label: "donations",
            url: "/donations"
        }
    ];

    let visible = false;
</script>

<div class="z-40 flex flex-col-reverse md:flex-col md:space-y-4 fixed bottom-4 md:top-4 right-4 items-end">
    <div on:click={() => visible = !visible} class:selected={visible} class="h-16 w-16 rounded-full cursor-pointer box-border border-2 border-indigo-200 bg-indigo-200 shadow-lg hover:shadow text-center p-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" viewBox="0 0 24 24" stroke-width="1.7" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
    </div>
    <nav class:visible class="bg-white shadow w-max text-lg overflow-hidden p-4 rounded-lg hidden flex-col space-y-2 mb-4">
        <a href="/routes" hidden>routes</a>
        {#each pages as page}
            <a href={page.url} class="hover:underline">{page.label}</a>
        {/each}
    </nav>
</div>

<style>
    .visible {
        @apply flex;
    }

    .selected {
        @apply shadow;
        @apply border-2;
        @apply border-white;
    }
</style>