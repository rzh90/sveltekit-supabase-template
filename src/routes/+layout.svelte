<script>
    /*
    * Code from the Supabase documentation
    * https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit
    * Copied from "src/routes/+layout.svelte" section
    */

	import { invalidate } from "$app/navigation"
	import { onMount } from "svelte"

	export let data

	$: ({ supabase, session } = data)

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate("supabase:auth")
			}
		})

		return () => data.subscription.unsubscribe();
	})
</script>

<svelte:head>
	<title>SvelteKit + Supabase Template</title>
</svelte:head>

<div>
	<slot />
</div>