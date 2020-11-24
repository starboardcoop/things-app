<script>
    let showModal = false;
    const toggleModal = () => showModal = !showModal;
</script>

<div on:click={toggleModal}>
    <div class="h-full bg-white rounded border-2 border-black solid transform hover:scale-105 duration-200 overflow-hidden">
        <slot />
    </div>
    <div class="fixed z-10 inset-0 p-8 h-screen w-screen bg-black bg-opacity-50 justify-center align-middle hidden" class:visible={showModal}>
        <div class="bg-gray-400 p-16 rounded-lg md:max-w-md m-auto">
            <slot name="modal" />
        </div>
    </div>
</div>

<style>
    .solid {
        box-shadow: 2px 2px 0 #000000;
    }

    .solid:hover {
        box-shadow: 4px 4px 0 #000000;
    }

    div.visible {
        @apply flex;
    }
</style>