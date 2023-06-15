<script>
    export let data
    
    $: ({ dataTable, user, id } = data)
</script>

<section>
    <div>
        <h2>Edit task</h2>

        {#each dataTable as todo}
            <div>
                <form method="post" action="?/edit">
                    <div>
                        <label for="task">Task</label>
                        <p><input id="task" name="task" type="text" value={todo.task} required /></p>
                    </div>
                    <div>
                        <label for="completed">Done?</label>
                        <p>
                            <select name="completed" id="completed" value={todo.is_complete.toString()}>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </p>
                    </div>

                    <div>
                        <input type="submit" value="Update">
                        <form method="post" action="?/delete">
                            <button type="submit">Delete</button>
                        </form>
                        <a href="/dashboard">Cancel</a>
                    </div>
                </form>
            </div>
        {/each}
    </div>
</section>