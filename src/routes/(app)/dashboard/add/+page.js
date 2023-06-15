import { redirect } from "@sveltejs/kit"

export const load = async ({ parent }) => {
    const { session, supabase } = await parent()
    if (!session) {
        throw redirect(303, "/")
    }

    // fetch data from "todos" database
    const { data: testTable } = await supabase.from("todos").select().eq("user_id", session.user.id)
    return {
        testTable,
        user: session.user
    }
}