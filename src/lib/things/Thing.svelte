<script>
	import { Card, Text } from "$lib/Foundation.svelte";
    import { t } from "$lib/language/translate";

    export let thing;

    let className = "";
    export { className as class };

    const donateURL = `https://airtable.com/shrwMSrzvSLpQgQWC?prefill_Description=${encodeURIComponent(thing.name)}`;
</script>

<div class="flex flex-col {className}">
    <Card>
        <img src={thing.image} alt={thing.name} class="h-full w-full object-contain" />
    </Card>
    <div class="pl-1 pt-2 flex flex-col gap-2 justify-between flex-grow">
        <Text display bold smallauto>{thing.name}</Text>
        <div class="flex flex-col lg:flex-row gap-2">
            {#if thing.stock > 0}
                <div class="px-2 py-1 rounded bg-green-300 w-max font-medium text-sm">{$t("Thing.Tags.Available")}</div>
            {:else}
                <a class="px-2 py-1 rounded brutal hover:hovers-static bg-primary w-max font-bold font-display text-sm" href={donateURL} target="_blank" rel="noreferrer">{$t("Button.Donate")}</a>
            {/if}
        </div>
    </div>
</div>