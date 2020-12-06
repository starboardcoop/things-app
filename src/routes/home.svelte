<script>
    import { onMount } from "svelte";
    import Session from "../session";

    let name;

    onMount(() => {
        const session = Session.json();
        console.log(session);
        name = session.name;
    });
</script>

<h1>Sup {name}</h1>