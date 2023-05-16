<script>
    import BoxIcon from "$lib/icons/box.svg";
    import { t } from "$lib/language/translate";

    export let thing;

    const donateURL = `https://airtable.com/shrwMSrzvSLpQgQWC?prefill_Description=${encodeURIComponent(thing.name)}`;
    const hasZeroStock = thing.stock < 1;
    const noneAvailable = !hasZeroStock && !thing.available || thing.available < 0;

    const fontSize = thing.name.length > 13 ? 'text-sm' : 'text-base';
    const backgroundColor = noneAvailable
        ? 'bg-red-300'
        : hasZeroStock
        ? 'bg-yellow-300'
        : 'bg-green-400';

    const shortenName = () => {
        if (thing.name.length < 30) return thing.name;
        return thing.name.substring(0, 29) + '...';
    };

    const onClick = () => {
        if (!hasZeroStock) return;
        window.open(donateURL, '_blank').focus();
    };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="flex flex-col justify-between bg-white rounded-md overflow-hidden brutal hovers-static {hasZeroStock && 'cursor-pointer'}" on:click={onClick}>
    <div class="p-2">
        <img src={thing.image ?? BoxIcon} alt={thing.name} class="w-full aspect-square object-contain rounded" />
        <div class="mt-3">
            <div class="{fontSize} uppercase font-bold font-sans text-center">{shortenName()}</div>
        </div>
    </div>
    <div class="{backgroundColor} py-1 text-center font-medium border-t border-black">
        {hasZeroStock
            ? $t('Click to Donate')
            : noneAvailable
            ? $t('Unavailable')
            : `${thing.available} / ${thing.stock} ${$t('Available')}`}
    </div>
</div>