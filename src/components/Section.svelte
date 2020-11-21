<script>
    import Container from "./Container.svelte";

    export let bg = "transparent";
</script>

<section class={`bg-${bg} md:px-16 lg:px-32`}>
    <Container>
        <slot />
    </Container>
</section>