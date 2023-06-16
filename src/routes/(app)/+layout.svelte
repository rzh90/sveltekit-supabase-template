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

<header class="p-2 mb-6">
    <div class="mx-auto max-w-screen-xl">
        <Nav>
            {#if $page.data.session}
                <div class="flex gap-2">
                    <a href="/dashboard" class="btn btn-sm variant-filled-primary">Dashboard</a>
                    <form action="/logout" method="post" use:enhance={handleLogout}>
                        <button disabled={loading} type="submit" class="btn btn-sm variant-ghost-primary">Sign out</button>
                    </form>
                </div>
            {:else}
                <div class="flex gap-2">
                    <a href="/signup" class="btn btn-sm variant-filled-primary">Sign up</a>
                    <a href="/signin" class="btn btn-sm variant-ghost-primary">Sign in</a>
                </div>
            {/if}
        </Nav>
    </div>
</header>

<div class="container mx-auto max-w-screen-xl">
    <slot />
</div>