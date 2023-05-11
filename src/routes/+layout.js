/*
* Code from the Supabase documentation to handle the session and the supabase object on the client-side
* https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit
* Copied from "src/routes/+layout.server.ts" section and changed to js
*/

import { invalidate } from "$app/navigation"
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from "$env/static/public"
import { createSupabaseLoadClient } from "@supabase/auth-helpers-sveltekit"

export const load = async ({ fetch, data, depends }) => {
    depends("supabase:auth")

    const supabase = createSupabaseLoadClient({
        supabaseUrl: PUBLIC_SUPABASE_URL,
        supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
        event: { fetch },
        serverSession: data.session
    })

    const {data: { session }} = await supabase.auth.getSession()

    return { supabase, session }
}
