import { AuthApiError } from "@supabase/supabase-js"
import { fail, redirect } from "@sveltejs/kit"

export const actions = {
    delete: async ({ params, request, locals: { supabase, getSession } }) => {
        const formData = await request.formData()
        const session = await getSession()

        const id = params.id
        
        const {data, error} = await supabase
                                    .from("todos")
                                    .delete()
                                    .eq("id", id)
                                        
        throw redirect(303, "/dashboard")
    },

    edit: async ({ params, request, locals: { supabase, getSession } }) => {
        const formData = await request.formData()
        const session = await getSession()

        const id = params.id
        const task = formData.get("task")
        const completed = formData.get("completed") == "true"

        const {data, error} = await supabase
                                    .from("todos")
                                    .update({
                                        task,
                                        "is_complete": completed
                                    })
                                    .eq("id", id)
                                        
        throw redirect(303, "/dashboard")
    },
}