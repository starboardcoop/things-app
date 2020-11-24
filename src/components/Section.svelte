<script>
    import Container from "./Container.svelte";

    export let bg = "transparent";
</script>

<section class={`bg-${bg} py-8 md:py-16 md:px-1/4-screen`}>
    <Container>
        <slot />
    </Container>
</section>