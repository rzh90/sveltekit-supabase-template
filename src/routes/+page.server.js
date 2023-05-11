/*
* Code from the Supabase documentation to initialize the client on the server
* https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit
* Copied from "src/routes/+page.server.ts" section and changed to js
*/

import { redirect } from "@sveltejs/kit"

export const load = async ({ url, locals: { getSession } }) => {
	const session = await getSession()

    // if the user is already logged in return them to the account page
	if (session) {
		throw redirect(303, "/account")
	}

	return { url: url.origin }
}