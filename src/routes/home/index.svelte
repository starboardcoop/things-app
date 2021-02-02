<script>
    import { onMount } from "svelte";
    import shuffle from "../../lib/shuffle";
    import Heading from "../../components/Heading.svelte";
    import Subheading from "../../components/Subheading.svelte";
    import Container from "../../components/Container.svelte";
    import Session from "../../session";
    import Scroller from "../../components/Scroller.svelte";
    import TextInput from "../../components/TextInput.svelte";

    let name;
    let data = {};
    let categories = [];

    let reservations = [];

    let searchResults = [];
    let searchText = "";

    onMount(async () => {
        const session = Session.json();
        console.log(session);
        name = session.member.name;
        await thingify();
        reservations.push({
            thing: data.things[0],
            startDate: "2/1/2020",
            endDate: "2/12/2020"
        });
        console.log(reservations);
    });

    async function thingify() {
        const result = await fetch(`/.netlify/functions/things`);
        data = await result.json();
        sessionStorage.setItem("data", JSON.stringify(data))
        data.things = shuffle(data.things);

        categories = data.categories;
        console.log(categories);
    }

    function filterThings(category) {
        return data.things.filter(thing => thing.category === category);
    }

    function search() {
        if (searchText.length === 0) {
            searchResults = [];
            return;
        }

        const filtered = data.things.filter(thing => thing.name.toLowerCase().includes(searchText.toLowerCase()));

        if (filtered.length > 0)
            searchResults = filtered;
    }
</script>

<div>
    <div class="w-full flex flex-col justify-center items-center p-8 bg-bg relative">
        <Heading color="white">Hi, {name}!</Heading>
        <div class="absolute -bottom-6">
            <TextInput
                bind:value={searchText}
                on:input={search}
                placeholder="Search..."
            />
        </div>
    </div>
    <div>
        <div class="mt-10">
            {#await data}
                loading...
            {:then}
                {#if searchResults.length === 0}
                    <div>
                        <Container>
                            <Subheading>Recommended Things:</Subheading>
                        </Container>
                        <Scroller things={data.things} />
                    </div>
                    {#each categories as category}
                    <div>
                        <Container>
                            <Subheading>{category}:</Subheading>
                        </Container>
                        <Scroller things={filterThings(category)} />
                    </div>
                    {/each}
                {:else}
                    <div>
                        <Container>
                            <Subheading>Things:</Subheading>
                        </Container>
                        <Scroller things={searchResults} />
                    </div>
                {/if}
            {:catch error}
                whoops!: {error}
            {/await}
        </div>
    </div>
</div>