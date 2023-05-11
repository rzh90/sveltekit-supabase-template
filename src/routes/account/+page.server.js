/*
* Code from the Supabase documentation to handle loading our data from the server through the load function and handle form actions through the actions object
* https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit
* Copied from "src/routes/account/+page.server.ts" section and changed to js
*/

import { fail, redirect } from "@sveltejs/kit"

export const load = async ({ locals: { supabase, getSession } }) => {
    const session = await getSession()

    if (!session) {
        throw redirect(303, "/")
    }

    const { data: profile } = await supabase
        .from("profiles")
        .select(`username, full_name, website, avatar_url`)
        .eq("id", session.user.id)
        .single()

    /* Code from Supabase documentation to fetch data (see step #3)
    https://supabase.com/docs/guides/getting-started/quickstarts/sveltekit */
    const { data: todosData } = await supabase.from("todos").select()

    // return auth and todo items or empty array if todos don't exist
    return { session, profile, todosData: todosData ?? [] }
}

export const actions = {
    // sign out button action
    signout: async ({ locals: { supabase, getSession } }) => {
        const session = await getSession()
        if (session) {
            await supabase.auth.signOut()
            throw redirect(303, "/")
        }
    }
}