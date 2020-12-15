<script>
    export let height = "auto";
    export let width = "auto";

    let showModal = false;
    const toggleModal = () => showModal = !showModal;
</script>

<div on:click={toggleModal} class={`h-${height} w-${width}`}>
    <div class="h-full bg-white brutal hovers overflow-hidden">
        <slot />
    </div>
    <div class="fixed z-10 inset-0 p-8 h-screen w-screen bg-black bg-opacity-50 justify-center align-middle hidden" class:visible={showModal}>
        <div class="bg-gray-300 p-16 rounded md:max-w-md m-auto border-2 border-black thicc">
            <slot name="modal" />
        </div>
    </div>
</div>

<style>
    div.visible {
        @apply flex;
    }

    div.thicc {
        box-shadow: 4px 4px 0 #000000;
    }
</style>

