<script>
    import { applyAction, enhance } from "$app/forms"
    import { invalidate } from "$app/navigation"
    import { page } from "$app/stores"

    import Nav from "$lib/Nav.svelte"

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

<header>
    <Nav>
        {#if $page.data.session}
                <div>
                    <p><a href="/dashboard">Dashboard</a></p>
                    <form action="/logout" method="post" use:enhance={handleLogout}>
                        <button disabled={loading} type="submit">Sign out</button>
                    </form>
                </div>
            {:else}
            <div>
                <p><a href="/signup">Sign up</a></p>
                <p><a href="/signin">Sign in</a></p>
            </div>
            {/if}
    </Nav>
</header>
<main>
    <slot />
</main>