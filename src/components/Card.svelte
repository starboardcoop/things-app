<script>
    export let featured = false;

    let modal;
    const toggleModal = () => modal.hidden = !modal.hidden;
</script>

<div on:click={toggleModal}>
    <div class:featured class="h-full overflow-hidden bg-white flex flex-col space-y-2 rounded-sm shadow-md transform hover:scale-105 duration-200">
        <slot />
    </div>
    <div bind:this={modal} class="fixed z-10 inset-0 p-8 h-screen w-screen" hidden>
        <div class="bg-gray-500 p-4 rounded-sm">
            <slot name="modal" />
        </div>
    </div>
</div>

<style>
    div.featured {
        @apply rounded-b-md;
        @apply border-t-4;
        @apply border-primary;
    }
</style>