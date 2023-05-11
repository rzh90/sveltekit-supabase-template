<script>
    /*
    * Code from the Supabase documentation to initialize the client on the server
    * https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit
    * Copied from "src/routes/account/+page.svelte" section and changed to js
    */

    import { enhance } from "$app/forms"

    // data from user profiles and todo database
    export let data
    let { session, supabase, profile, todosData } = data

    // auth info
    let email = session.user.email
    let loading = false

    // todo list items
    let todos = todosData
    $: (todos = todosData)

    // sign out button
	const handleSignOut = () => {
		loading = true
		return async ({ update }) => {
			loading = false
			update()
		}
	}
</script>

<div>
    <p>Logged in as {email}</p>
	<form method="post" action="?/signout" use:enhance={handleSignOut}>
		<div>
			<button class="button block" disabled={loading}>Sign Out</button>
		</div>
	</form>

    <ul>
        {#each todos as todo}
            <li>{todo.task}</li>
        {/each}
      </ul>
</div>