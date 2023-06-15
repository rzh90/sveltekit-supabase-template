<script>
    import { applyAction, enhance } from "$app/forms"
    import { invalidate } from "$app/navigation"
    import { page } from "$app/stores"

    let loading = false

    function handleLogout() {
        loading = true
        return async ({ result }) => {
            if (result.type === "redirect") {
                await invalidate("supabase:auth")
            } else {
                await applyAction(result)
            }
            loading = false
        }
    }
</script>

<main>
    <div>
        {#if $page.data.session}
            <form action="/logout" method="post" use:enhance={handleLogout}>
                <button disabled={loading} type="submit">Sign out</button>
            </form>
        {/if}
    </div>

    <slot />
</main>