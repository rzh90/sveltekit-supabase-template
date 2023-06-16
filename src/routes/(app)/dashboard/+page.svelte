<!--
    From https://github.com/supabase/auth-helpers/blob/main/examples/sveltekit/src/routes/(app)/dashboard/%2Bpage.svelte
    Also from https://supabase.com/docs/guides/auth/auth-helpers/sveltekit#server-side-data-fetching-with-rls
-->
<script>
    import { flip } from "svelte/animate"

    export let data
    
    $: ({ dataTable, user } = data)
</script>

<section class="mb-4">
    <p class="mb-2">Hi {user.email}</p>

    <a href="/dashboard/add" class="btn variant-filled-primary">Add a task</a>
</section>

<section class="grid gap-4 mb-4 md:grid-cols-3">
    {#if dataTable.length}
        {#each dataTable as todo}
            <div class="card">
                <header class="card-header">
                    <h3 class="h3">{todo.task}</h3>
                </header>
                <section class="p-4">
                    <p class="text-sm mb-4">Added {todo.inserted_at.slice(0, 10)}</p>
                    <p>{#if todo.is_complete} Done {:else} Not done {/if}</p>
                </section>
                <footer class="card-footer border-t border-surface-600 pt-4">
                    <a href={`/dashboard/edit/${todo.id}`} class="anchor">Edit</a>
                </footer>
            </div>
        {/each}

    {:else}
        <p>No data</p>
    {/if}
</section>