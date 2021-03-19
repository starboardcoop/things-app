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

    let menuButton;
    let menu;

    let visible = false;

    let toggle = () => {
        visible = !visible
    }
    // Close the menu on any click event,
    // unless the user clicks the menu button or menu itself
    let closeIfOpen = (event) => {
        if ([menuButton, menu].includes(event.target)) return
        visible = false
    }
    let closeOnEsc = (event) => {
        if(event.key !== 'Escape') return
        visible = false
    }
</script>

<svelte:window on:click={closeIfOpen} on:keydown={closeOnEsc} />
<div class="z-40 flex flex-col-reverse md:flex-col md:space-y-4 fixed bottom-4 md:top-4 right-4 items-end">
    <button on:click={toggle} class:selected={visible} class="h-16 w-16 rounded-full cursor-pointer appearance-none focus:outline-none focus:ring focus:ring-white focus:bg-indigo-100 box-border border-2 border-indigo-200 bg-indigo-200 shadow-lg hover:shadow text-center p-4" bind:this={menuButton} id="menubutton" aria-haspopup="true" aria-controls="main-menu">
        <span class="sr-only">Menu</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2 pointer-events-none" viewBox="0 0 24 24" stroke-width="1.7" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
    </button>
    <nav class:visible class="bg-white shadow w-max text-lg overflow-hidden p-4 rounded-lg hidden flex-col space-y-2 mb-4" bind:this={menu} id="main-menu" aria-labelledby="menubutton" role="menu" tabindex="-1">
        <a href="/routes" hidden>routes</a>
        {#each pages as page}
            <a href={page.url} class="hover:underline focus:underline capitalize" role="menuitem">{page.label}</a>
        {/each}
    </nav>
</div>

<style>
    .visible {
        @apply flex;
    }

    .selected {
        @apply ring;
        @apply ring-white;
    }
</style>
