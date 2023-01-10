<script context="module">
    // https://svelte.dev/tutorial/module-exports
    import { redirect } from '@sveltejs/kit'

    export async function validateToken() {
        const response = await fetch('https://habithub-backend.herokuapp.com/auth/validate', { //API base url should be stored somewhere for the whole site
            method: 'GET',
            headers: {
                'Accept': 'application.json',
                'Content-Type': 'application/json',
                'Authorization': 'BEARER ' + localStorage.getItem('jwt')
            }
        })

        //NOTE - should put in another check here which ensures jwt data (e.g. u_id) matches existing user data
        if (!response.ok) signout()
    }

    export function signout() {
        localStorage.clear()
        //NOTE - this redirect may not work outside of onMount
        window.location.href = '/login'
    }
</script>

