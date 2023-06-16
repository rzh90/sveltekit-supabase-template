<script>
    export let data
    
    $: ({ dataTable, user, id } = data)
</script>

<section class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="h2">Edit task</h2>
    </div>

    {#each dataTable as todo}
        {#if todo.id == id}
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form method="post" action="?/edit" class="space-y-6">
                    <label class="label">
                        <span>Task</span>
                        <input id="task" name="task" type="text" class="input" value={todo.task} required>
                    </label>
                    <label class="label">
                        <span>Done?</span>
                        <select name="completed" id="completed" class="select" value={todo.is_complete.toString()}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </label>

                    <div class="flex gap-2">
                        <input type="submit" value="Update" class="btn variant-filled-primary">
                        <form method="post" action="?/delete">
                            <button type="submit" class="btn variant-filled-error">Delete</button>
                        </form>
                        <a href="/dashboard" class="btn variant-ghost-secondary">Cancel</a>
                    </div>
                </form>
            </div>
        {/if}
    {/each}
</section>