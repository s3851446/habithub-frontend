<script>
    import { base } from '$app/paths'

    let user = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      passwordConfirm: ""
    };
  
    async function handleSignup() {
      user.email = document.getElementById("email").value;
      user.password = document.getElementById("password").value;
      user.firstName = document.getElementById("firstName").value;
      user.lastName = document.getElementById("lastName").value;
      user.passwordConfirm = document.getElementById("passwordConfirm").value;
      
      // NOTE - needs to do something to check passwords match
      const response = await fetch('https://habithub-api.herokuapp.com/user', { //API base url should be stored somewhere for the whole site
        method: 'POST',
        headers: {
          'Accept': 'application.json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password
        })
      })

      const data = await response.json()


      // NOTE - needs to return a message if bad email
    }
  </script>

  <div class="container">
    <img class="logo" src="{base}/images/logo_app.png" alt="Habit Hub logo" />
    <form class="form">
      <input class="form-control" type="text" placeholder="First Name" id="firstName" />
      <input class="form-control" type="text" placeholder="Last Name" id="lastName" />
      <input class="form-control" type="email" placeholder="Email" id="email" />
      <input class="form-control" type="password" placeholder="Password" id="password" />
      <input class="form-control" type="password" placeholder="Confirm Password" id="passwordConfirm" />
      <button class="btn" on:click={handleSignup}>Sign Up</button>
    </form>
    <div class="signup">
      Already have an account? <a href="/login">Log In</a>
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