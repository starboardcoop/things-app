<script>
    export let height = "auto";
    export let width = "auto";
    export let hovers = true;

    let showModal = false;
    const toggleModal = () => showModal = !showModal;
</script>

<div on:click={toggleModal} class={`h-${height} w-${width}`}>
    <div class:hovers class="h-full bg-white brutal overflow-hidden">
        <slot />
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

