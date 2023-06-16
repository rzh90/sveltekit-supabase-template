<script>
    import { IconChecks } from "@tabler/icons-svelte"
</script>

<nav class="flex justify-between items-center">
    <a href="/" class="flex items-center gap-2">
        <IconChecks size={48} />
        <h1 class="h1">Todos</h1>
    </a>
    <slot />
</nav>