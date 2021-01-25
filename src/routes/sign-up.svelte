<script>
    import Session from '../session';
    import { goto } from '@sapper/app';

    let invalid = false;
    let nameText = "";

    function hasValidName() {
        return nameText.length > 0;
    }

    async function submit() {
        if (!hasValidName()) {
            invalid = true;
            return new Promise(() => {});
        }

        const session = Session.json();

        const result = await fetch("/.netlify/functions/sign-up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ phone: session.phone, name: nameText })
        });

        const { member } = await result.json();
        session.member = member;

        Session.update(session);

        goto("/home");
    }
</script>

<main class="bg-indigo-300 w-screen h-screen font-mono">
    <div class="w-full h-full flex flex-col justify-center items-center p-8">
        <div class="flex flex-row gap-4 flex-wrap">
            <input
                bind:value={nameText}
                on:change={() => invalid = false}
                type="text"
                placeholder="Name"
                class:invalid
                class="px-4 py-2 brutal hovers outline-none" />
            <button on:click={submit} class="bg-yellow-300 px-4 py-2 brutal hovers uppercase font-bold">Sign up</button>
        </div>
    </div>
</main>

<style>
    .invalid {
        @apply bg-red-200;
    }
</style>