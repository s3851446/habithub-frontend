<script>
    import { onMount } from "svelte";
    import { signout } from "../../utils";

    onMount(() => {
        signout()
        window.location.href = '/login'
    })
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
  
    .message {
      font-size: 24px;
      margin-bottom: 20px;
    }
  
    .btn {
      background-color: #e4b363;
      color: #fff;
      padding: 12px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      width: 150px;
      transition: background-color 0.2s ease;
    }
  
    .btn:hover {
      background-color: #ef6461;
    }
  </style>
  
  <div class="container">
    <img class="logo" src="../../static/images/logo_app.png" alt="Habit Hub logo" />
    <div class="message">You have successfully logged out.</div>
    <button class="btn" on:click={handleLogin}>Log In Again</button>
  </div>
  
