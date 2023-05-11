/*
* Code from the Supabase documentation to handle the session on the server-side
* https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit
* Copied from "src/routes/+layout.server.ts" section and changed to js
*/

export const load = async ({ locals: { getSession } }) => {
    return {
        session: await getSession()
    }
}