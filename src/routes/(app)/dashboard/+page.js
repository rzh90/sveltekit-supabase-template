/*
* From https://github.com/supabase/auth-helpers/blob/main/examples/sveltekit/src/routes/(app)/dashboard/%2Bpage.ts
* Also from https://supabase.com/docs/guides/auth/auth-helpers/sveltekit#server-side-data-fetching-with-rls
*/
import { redirect } from "@sveltejs/kit"

export async function load({ parent }) {
    const { session, supabase } = await parent()
    if (!session) {
        throw redirect(303, "/")
    }

    // fetch data from "todos" database
    const { data: dataTable } = await supabase.from("todos").select().eq("user_id", session.user.id)
    return {
        dataTable,
        user: session.user
    }
}