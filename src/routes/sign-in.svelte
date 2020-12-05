<script>
  import { goto, stores } from '@sapper/app';
  
  const { session } = stores();
  let input;

  async function submit() {
    const result = await fetch('/auth');
    const data = await result.json();
    console.log(`Hi, ${data.name}!`);

    $session.name = data.name;

    goto('/hello');
  }
</script>

<style>
  .solid {
    box-shadow: 2px 2px 0 #000000;
  }

  .solid:focus,
  .solid:hover {
    box-shadow: 4px 4px 0 #000000;
  }
</style>

<main class="bg-indigo-300 w-screen h-screen font-mono">
  <div class="w-full h-full flex flex-col justify-center items-center p-8">
    <div class="flex flex-row gap-4 flex-wrap">
      <input
        bind:this={input}
        type="tel"
        placeholder="(401) 555-5555"
        pattern="([0-9]{3}) [0-9]{3}-[0-9]{4}"
        class="px-4 py-2 border-2 border-black solid rounded-md outline-none transform hover:scale-105 duration-200" />
      <button on:click={submit} class="bg-yellow-300 px-4 py-2 border-2 border-black solid rounded-md uppercase font-bold transform hover:scale-105 duration-200">Submit</button>
    </div>
  </div>
</main>
