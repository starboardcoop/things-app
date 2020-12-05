<script>
    import { onMount } from "svelte";

    let name;

    onMount(() => {
        const session = JSON.parse(localStorage.getItem('session'));
        console.log(session);
        name = session.name;
    });
</script>

<h1>Sup {name}</h1>