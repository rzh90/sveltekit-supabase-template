import { AuthApiError } from "@supabase/supabase-js"
import { fail, redirect } from "@sveltejs/kit"

export const actions = {
    add: async ({ request, locals: { supabase, getSession } }) => {
        const formData = await request.formData()
        const session = await getSession()

        const user = session.user.id
        const task = formData.get("task")
        const completed = false

        const {data, error} = await supabase
                                    .from("todos")
                                    .insert({
                                        "user_id": user,
                                        task,
                                        "is_complete": completed
                                    })
                                    .select()

        throw redirect(303, "/dashboard")
    }
}