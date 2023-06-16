<script>
    import { applyAction, enhance } from "$app/forms"

    export let form
    let loading = false

    const handleSubmit = () => {
        loading = true
        return async ({ result }) => {
            await applyAction(result)
            loading = false
        }
    }
</script>

<section class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="h2">Sign up</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {#if form?.error}
        <aside class="alert variant-filled-error">{form.error}</aside>
        {/if}
        {#if form?.message}
            <aside class="alert variant-filled">{form.message}</aside>
        {/if}

        <form method="post" class="space-y-6" use:enhance={handleSubmit}>
            <label class="label">
                <span>Email</span>
                <input id="email" name="email" value={form?.values?.email ?? ''} type="email" placeholder="Email" class="input" required>
            </label>

            <label class="label">
                <span>Password</span>
                <input id="password" name="password" type="password" placeholder="Password" class="input" required>
            </label>
            <div><button class="btn variant-filled-primary" disabled={loading}>Sign up</button></div>
        </form>

        <div class="mt-6">
            <p>Already have an account? <a href="/signin" class="anchor">Sign in</a></p>
        </div>
    </div>
</section>