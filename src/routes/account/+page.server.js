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

    const { data: todosData } = await supabase.from("todos").select()

    return { session, profile, todosData: todosData ?? [] }
}

    export const actions = {
    signout: async ({ locals: { supabase, getSession } }) => {
        const session = await getSession()
        if (session) {
            await supabase.auth.signOut()
            throw redirect(303, "/")
        }
    }
}