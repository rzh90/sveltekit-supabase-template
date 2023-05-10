<script>
	import { Auth } from "@supabase/auth-ui-svelte"
	import { ThemeSupa } from "@supabase/auth-ui-shared"

	export let data
</script>

<svelte:head>
	<title>User Management</title>
</svelte:head>

<div>
	<div>
		<Auth supabaseClient={data.supabase} view="magic_link" redirectTo={`${data.url}/logging-in?redirect=/`} showLinks={false} appearance={{ theme: ThemeSupa }} />
	</div>
</div>