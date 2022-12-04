<script>
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
</script>

<main class="bg-indigo-300 flex flex-col min-h-screen w-full">
    <Header />
    <div class="flex-grow"><slot /></div>
    <Footer />
</main>