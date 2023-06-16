<!--
    From https://github.com/supabase/auth-helpers/blob/main/examples/sveltekit/src/routes/(app)/dashboard/%2Bpage.svelte
    Also from https://supabase.com/docs/guides/auth/auth-helpers/sveltekit#server-side-data-fetching-with-rls
-->
<script>
    export let data
    
    $: ({ dataTable, user } = data)
</script>

<section class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="h2">Add task</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form method="post" action="?/add" class="space-y-6">
            <label class="label">
                <span>Task</span>
                <input id="task" name="task" type="text" class="input" required>
            </label>

            <div class="flex gap-2">
                <input type="submit" value="Add" class="btn variant-filled-primary">
                <a href="/dashboard" class="btn variant-ghost-secondary">Cancel</a>
            </div>
        </form>
    </div>
</section>