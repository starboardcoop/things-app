<script>
    export let featured = false;

    let showModal = false;
    const toggleModal = () => showModal = !showModal;
</script>

<div on:click={toggleModal}>
    <div class:featured class="h-full overflow-hidden bg-white flex flex-col space-y-2 rounded-sm shadow-md transform hover:scale-105 duration-200">
        <slot />
    </div>
    <div class="fixed z-10 inset-0 p-8 h-screen w-screen bg-black bg-opacity-50 justify-center align-middle hidden" class:flex={showModal}>
        <div class="bg-gray-400 p-16 rounded-lg md:max-w-md m-auto">
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

    div.flex {
        @apply flex;
    }
</style>