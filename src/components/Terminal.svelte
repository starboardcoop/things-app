<script>
    import Typewriter from "svelte-typewriter";
    import Row from "./Row.svelte";
    import Heading from "./Heading.svelte";
</script>

<Row>
    <Heading bold>&gt;</Heading>
    <Heading italic bold>
        <Typewriter interval={50} loop>
            <slot />
        </Typewriter>
    </Heading>
</Row>