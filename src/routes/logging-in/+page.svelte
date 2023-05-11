<script>
    /*
    * Code from the Supabase documentation
    * This page is used for waiting while your client-side code sends the tokens over to your server-side code
    * https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit
    * Copied from "src/routes/logging-in/+page.svelte" section and changed to js
    */

	import { browser } from "$app/environment"
	import { goto } from "$app/navigation"
	import { page } from "$app/stores"

	export let data
	$: {
		const redirectTo = $page.url.searchParams.get("redirect")

		// check if user has been set in session store then redirect
		if (browser && data.session) {
			goto(redirectTo ?? "/account")
		}
	}
</script>

<section>
	Logging in
</section>