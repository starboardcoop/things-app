<script>
    import { stores } from "@sapper/app";
    const { session } = stores();
</script>

<h1>Sup {$session.name}</h1>