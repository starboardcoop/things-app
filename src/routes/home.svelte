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

<main class="bg-indigo-300 w-screen h-screen font-mono">
    <div class="w-full h-full flex flex-col justify-center items-center p-8">
        <h1>Hi, {name}!</h1>
    </div>
</main>