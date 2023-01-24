<script>
    import { base } from '$app/paths'
    import Button from '../../components/Button.svelte';
    import TextInput from '../../components/TextInput.svelte';

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

  <div class="body">
    <img class="logo" src="{base}/images/logo_web.png" alt="Habit Hub logo" />
    <form class="form">
      <TextInput 
        id="firstName"
        value=""
        name="FirstName"
        placeholder="Enter your first name here"
        label="First Name"
        input_type="text"
      />
      <TextInput 
        id="lastName"
        value=""
        name="LastName"
        placeholder="Enter your last name here"
        label="Last Name"
        input_type="text"
      />
      <TextInput 
        id="email"
        value=""
        name="Email"
        placeholder="Enter your email address here"
        label="Email"
        input_type="email"
      />
      <TextInput 
        id="password"
        value=""
        name="Password"
        placeholder="Enter the password here"
        label="Password"
        input_type="password"
      />
      <TextInput 
        id="passwordConfirm"
        value=""
        name="PasswordConfirm"
        placeholder="Re-enter the password here"
        label="Confirm Password"
        input_type="password"
      />
      <Button on:click={handleSignup}>Signup</Button>
    </form>
    <p class="p">
      Already have an account? <a href="/login">Log In</a>
    </p>
  </div>

  <style lang="scss">
    .body {
      padding: 0 40px;
      margin-top: 0;
    }

    .logo {
      width: 250px;
      margin: 0 0 20px -20px;
    }
  
    .form {
      margin: 30px 0;
    }

    a {
      color: $red;
      text-decoration: none;
      &:hover {
        color: $white;
        background-color: $red;
        padding: 5px 10px;
        border-radius: $card-radius;
      }
    }
  
  </style>