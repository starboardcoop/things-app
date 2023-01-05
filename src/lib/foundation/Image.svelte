<script>
    export let src = "";
    export let alt = "";

    let className = "";
    export { className as class };
</script>

<img {src} {alt} class="object-contain {className}" />