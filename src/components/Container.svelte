<script>
    export let bg = "transparent";
</script>

<div class={`flex flex-col justify-between h-full w-full p-4 bg-${bg} rounded-sm`}>
    <slot />
</div>
