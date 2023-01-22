




<script>
    let user = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      passwordConfirm: ""
    };
  
    function handleSignup() {
      user.email = document.getElementById("email").value;
      user.password = document.getElementById("password").value;
      user.firstName = document.getElementById("firstName").value;
      user.lastName = document.getElementById("lastName").value;
      user.passwordConfirm = document.getElementById("passwordConfirm").value;
      // send user data to backend for signup
      // ...
    }
  </script>
  
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
  
  <div class="container">
    <img class="logo" src="../../static/images/logo_app.png" alt="Habit Hub logo" />
    <form class="form">
      <input class="form-control" type="text" placeholder="First Name" id="firstName" />
      <input class="form-control" type="text" placeholder="Last Name" id="lastName" />
      <input class="form-control" type="email" placeholder="Email" id="email" />
      <input class="form-control" type="password" placeholder="Password" id="password" />
      <input class="form-control" type="password" placeholder="Confirm Password" id="passwordConfirm" />
      <button class="btn" on:click={handleSignup}>Sign Up</button>
    </form>
    <div class="signup">
      Already have an account? <a href="#" on:click={handleLogin}>Log In</a>
    </div>
  </div>
  
