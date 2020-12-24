<script>
    export let errorMessage;
    export let visible;    
</script>

{#if visible}
    <div class="fixed top-4 left-4 right-4 bg-gray-800 py-2 px-4 text-white rounded-md">{errorMessage}</div>
{/if}