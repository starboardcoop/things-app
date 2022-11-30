<script>
  import Footer from "./Footer.svelte";
</script>

<main class="bg-indigo-300 flex flex-col min-h-screen w-full">
    <div class="flex-grow"><slot /></div>
    <Footer />
</main>