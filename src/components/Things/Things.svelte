<script>
    import Scroller from './Scroller.svelte';
    import { filterThings } from './filter';

    export let things;
    export let categories;
</script>

<div>
  {#key things}
    {#each categories as category}
      {#if filterThings(category).length > 0}
        <div>
          <div
            class="pl-4 text-4xl lg:text-5xl font-display font-bold text-black"
          >
            {category}
          </div>
          <Scroller things={filterThings(category)} />
        </div>
      {/if}
    {/each}
  {/key}
</div>
