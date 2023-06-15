<script>
    import { browser } from "$app/environment"
    import { goto } from "$app/navigation"
    import { page } from "$app/stores"

    $: {
        const redirectTo = $page.url.searchParams.get("redirect")

        // check if user has been set in session store then redirect
        if (browser && $page.data.session) {
            goto(redirectTo ?? "/dashboard")
        }
    }
</script>

<section>
    <!-- Hero head: will stick at the top -->
    <div>
        <progress class="progress is-small is-info" max="100" />
    </div>

    <!-- Hero content: will be in the middle -->
    <div>
        <div>
            <em>
                Logging in
            </em>
        </div>
    </div>
</section>

<style>
    .progress:indeterminate {
        animation-duration: 3.8s;
    }
</style>