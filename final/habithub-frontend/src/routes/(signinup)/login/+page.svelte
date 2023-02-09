<script>
  import { onMount } from "svelte";
  import Button from "../../../components/Button.svelte";
  import TextInput from "../../../components/TextInput.svelte";
  import { jwt, loggedIn, userFirstName } from "../../../stores";
  import { base } from "$app/paths";
  import Tagline from "../../../components/Tagline.svelte";

  const formSubmit = (event) => {
    event.preventDefault();
  };

  onMount(() => {
    const btn = document.getElementById("login_button");
    btn.addEventListener("click", loginClick);
    function loginClick() {
      try {
        loginUser();
      } catch (err) {
        console.log(err);
      }
    }

    // method for sending login form data
    // based on answer here: https://stackoverflow.com/questions/68389117/using-fetch-api-to-create-a-login-form

    // TODO: update url, change body content to email/password, stop form default behavior
    async function loginUser() {
      const emailField = document.getElementById("email");
      const passwordField = document.getElementById("password");

      const response = await fetch(
        "https://habithub-api.herokuapp.com/auth/signin",
        {
          //API base url should be stored somewhere for the whole site
          method: "POST",
          headers: {
            Accept: "application.json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailField.value,
            password: passwordField.value,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        localStorage.clear();
        const message =
          "A problem occured while logging in: " +
          response.status +
          " " +
          response.statusText;
        throw new Error(message);
      }

      // add JWT to session if good
      // ideally this should be put somewhere other than localStorage: https://auth0.com/docs/secure/security-guidance/data-security/token-storage#don-t-store-tokens-in-local-storage
      localStorage.setItem("jwt", data.accessToken);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("userID", data.user._id);

      loggedIn.set(true);
      jwt.set(data.accessToken);
      userFirstName.set(data.user.firstName);
      let loggedInVar;
      loggedIn.subscribe((data) => (loggedInVar = data));

      if (data.user.firstTime) {
        window.location.href = "/guide";
      } else {
        window.location.href = "/dashboard";
      }

      // put message somewhere if response bad
    }
  });
</script>

<div class="body">
  <div class="slogan">
    <Tagline />
  </div>
  <div class="rest">
    <img class="logo" src="{base}/images/logo_web.png" alt="Habit Hub logo" />
    <h1>Welcome Back!</h1>
    <p>It's so good to see you again!</p>
    <form class="form" on:submit={formSubmit}>
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
        placeholder="Enter your password here"
        label="Password"
        input_type="password"
      />
      <div class="btn">
        <Button id="login_button">Login</Button>
      </div>
    </form>
    <p class="p">Don't have an account? <a href="/signup">Sign Up</a></p>
  </div>
</div>

<style lang="scss">
  .body {
    margin-left: -88px;
    margin-top: -1px;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    @media all and (max-width: 900px) {
      flex-direction: column;
      justify-content: center;
      margin-top: 0;
    }
    @media all and (max-width: 800px) {
      margin-left: -60px;
    }
  }

  .slogan {
    width: 50%;
    @media all and (max-width: 900px) {
      display: none;
    }
  }

  .rest {
    width: 50%;
    transition: $trans-05;
    @media all and (max-width: 900px) {
      width: 80%;
    }
    @media all and (max-width: 500px) {
      width: 90%;
    }
    @media all and (max-width: 300px) {
      width: 98%;
    }
  }

  .logo {
    width: 250px;
    margin: 0 0 20px -20px;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  a {
    color: $red;
    text-decoration: none;
    transition: $trans-05;
    &:hover {
      color: $white;
      background-color: $red;
      padding: 5px 10px;
      border-radius: $card-radius;
    }
  }

  .btn {
    margin: 10px 0;
  }
</style>
