<!--
    From https://github.com/supabase/auth-helpers/blob/main/examples/sveltekit/src/routes/(app)/dashboard/%2Bpage.svelte
    Also from https://supabase.com/docs/guides/auth/auth-helpers/sveltekit#server-side-data-fetching-with-rls
-->
<script>
    export let data
    
    $: ({ dataTable, user } = data)
</script>

<section>
    <div>
        <h2>Add a task</h2>

        <div>
            <form method="post" action="?/add">
                <div>
                    <label for="task">Task</label>
                    <p><input id="task" name="task" type="text" required /></p>
                </div>

                <div>
                    <input type="submit" value="Add">
                    <a href="/dashboard">Cancel</a>
                </div>
            </form>
        </div>
    </div>
</section>