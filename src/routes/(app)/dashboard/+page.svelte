<!--
    From https://github.com/supabase/auth-helpers/blob/main/examples/sveltekit/src/routes/(app)/dashboard/%2Bpage.svelte
    Also from https://supabase.com/docs/guides/auth/auth-helpers/sveltekit#server-side-data-fetching-with-rls
-->
<script>
    export let data
    
    $: ({ dataTable, user } = data)
</script>

<p>Hi {user.email}</p>
<p><a href="/dashboard/add">Add a task</a></p>

{#if dataTable.length}
    {#each dataTable as todo}
        <div>
            <h2>{todo.task}</h2>
            <p>Added {todo.inserted_at.slice(0, 10)}</p>
            <h3>Done?</h3>
            <p>{#if todo.is_complete} Yes {:else} No {/if}</p>
            <p><a href={`/dashboard/edit/${todo.id}`}>Edit</a></p>
        </div>
    {/each}

{:else}
    <p>No data</p>
{/if}