<script>
    import { onMount } from 'svelte'
    import Button from "../../components/Button.svelte"
    import TextInput from '../../components/TextInput.svelte';
    import { jwt, loggedIn, userFirstName } from './../../stores'
    import { base } from '$app/paths'

    onMount(() => {
        const btn = document.getElementById('login_button')
        btn.addEventListener('click', loginClick)
        function loginClick() {
            try {
                loginUser()
            } catch(err) {
                console.log(err)
            }
        }

        // method for sending login form data
        // based on answer here: https://stackoverflow.com/questions/68389117/using-fetch-api-to-create-a-login-form

        // TODO: update url, change body content to email/password, stop form default behaviour
        async function loginUser() {
            const emailField = document.getElementById('email')
            const passwordField = document.getElementById('password')

            const response = await fetch('https://habithub-api.herokuapp.com/auth/signin', { //API base url should be stored somewhere for the whole site
                method: 'POST',
                headers: {
                    'Accept': 'application.json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: emailField.value,
                    password: passwordField.value
                })
            })

            const data = await response.json()

            if (!response.ok) {
                localStorage.clear()
                const message = 'A problem occured while logging in: ' + response.status + ' ' + response.statusText
                throw new Error(message)
            }

            // add JWT to session if good
            // ideally this should be put somewhere other than localStorage: https://auth0.com/docs/secure/security-guidance/data-security/token-storage#don-t-store-tokens-in-local-storage
            localStorage.setItem('jwt', data.accessToken)
            localStorage.setItem('loggedIn', true)
            localStorage.setItem('userID', data.user._id)

            loggedIn.set(true)
            jwt.set(data.accessToken)
            userFirstName.set(data.user.firstName)
            let loggedInVar
            loggedIn.subscribe((data) => loggedInVar = data)

            //NOTE - remove
            console.log("logged in successfully")
            window.location.href = '/'

            // put message somewhere if response bad
        }
    })
</script>

  <div class="container">
    <img class="logo" src="{base}/images/logo_app.png" alt="Habit Hub logo" />
    <form class="form">
      <input class="form-control" type="email" placeholder="Email" id="email" />
      <input class="form-control" type="password" placeholder="Password" id="password" />
      <button class="btn" id="login_button">Login</button>
    </form>
    <div class="signup">
      Don't have an account? <a href="/signup">Sign Up</a>
    </div>
  </div>

  <style>
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background: radial-gradient(circle at 30% 107%, #ef6461, #e4b363);
    }
  
    .logo {
      width: 200px;
      margin-bottom: 20px;
    }
  
    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 300px;
      margin-bottom: 20px;
    }
  
    .form-control {
      margin-bottom: 10px;
      width: 100%;
      padding: 12px 20px;
      box-sizing: border-box;
      border: 2px solid #e4b363;
      border-radius: 4px;
    }
  
    .btn {
      background-color: #e4b363;
      color: #fff;
      padding: 12px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      width: 100%;
      transition: background-color 0.2s ease;
    }
  
    .btn:hover {
      background-color: #ef6461;
    }
  
    .signup {
      margin-top: 20px;
      font-size: 14px;
      text-align: center;
    }
  
  </style>