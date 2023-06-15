import { redirect } from "@sveltejs/kit"

export async function load({ parent, params }) {
    const id = params.id
    
    const { session, supabase } = await parent()
    if (!session) {
        throw redirect(303, "/")
    }

    // fetch data from "todos" database
    const { data: dataTable } = await supabase.from("todos").select().eq("user_id", session.user.id)
    return {
        dataTable,
        user: session.user,
        id
    }
}