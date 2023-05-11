<script>
    import { enhance } from "$app/forms"

    export let data
    let { session, supabase, profile, todosData } = data
    let email = session.user.email
    let loading = false

    let todos = todosData
    $: (todos = todosData)

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