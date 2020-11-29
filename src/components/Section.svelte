<script>
    import Container from "./Container.svelte";

    export let bg = "transparent";
</script>

<section class={`bg-${bg} py-8 md:py-16`}>
    <div class="w-full md:w-5/6 lg:w-largest mx-auto">
        <Container>
            <slot />
        </Container>
    </div>
</section>