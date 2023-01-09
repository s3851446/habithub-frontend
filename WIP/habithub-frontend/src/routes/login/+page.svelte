<script>
    import { onMount } from 'svelte'

    onMount(() => {
        const btn = document.getElementById('do-thing')
        btn.addEventListener('click', () => {
            try {
                loginUser()
            } catch(err) {
                console.log(err)
            }
        })

        // method for sending login form data
        // based on answer here: https://stackoverflow.com/questions/68389117/using-fetch-api-to-create-a-login-form

        // TODO: update url, change body content to email/password, stop form default behaviour
        async function loginUser() {
            const response = await fetch('https://habithub-backend.herokuapp.com/auth/signin', { //API base url should be stored somewhere for the whole site
                method: 'POST',
                headers: {
                    'Accept': 'application.json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: 'ella@watts.com.au',
                    password: 'ella1234'
                })
            })

            const data = await response.json();

            // add response checking here
            if (!response.ok) {
                const message = 'A problem occured while logging in: ' + response.status + ' ' + response.statusText
                throw new Error(message)
            }

            // add JWT to session if good
            // ideally this should be put somewhere other than localStorage: https://auth0.com/docs/secure/security-guidance/data-security/token-storage#don-t-store-tokens-in-local-storage
            localStorage.setItem('jwt', data.accessToken)
            localStorage.setItem('userFirstName', data.user.firstName)

            //NOTE - remove
            console.log("logged in successfully")

            // put message somewhere if response bad
        }
    })
</script>

<div class="body">
    <h1>I am the Login page!</h1>
    <button id="do-thing">Test a login</button>
</div>