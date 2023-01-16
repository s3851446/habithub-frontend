<script>
  import { validateToken } from './../../utils'
  import { onMount } from 'svelte'
  import Button from '../../components/Button.svelte';

  onMount(async () => {
      const validToken = await validateToken()
      if (!validToken) {
          window.location.href = '/login'
      }
  })
</script>

<div class="body">
  <h1>Settings</h1>
    <section>
        <div class="container">
          <h2>Profile</h2>
          <hr>
          <div class="wrapper">
            <h3>Username</h3>
            <p>User1234</p>
          </div>
          <div class="wrapper">
            <h3>First Name</h3>
            <p>Name</p>
          </div>
          <div class="wrapper">
            <h3>Last Name</h3>
            <p>LastName</p>
          </div>
          <div class="wrapper">
            <h3>Email</h3>
            <p>example@mail.com</p>
          </div>
          <div class="wrapper">
            <h3>Profile Picture</h3>
            <div class="user-pic">
              <i class='bx bxs-user profile'></i>
            </div>
          </div>
          <Button>Change Password</Button>
        </div>
        <div class="container">
          <h2>Notification settings</h2>
          <hr>
        </div>
      <!-- 
          <div class="column">
            <div class="new-container">
              <h3></h3>
              <hr>
              <h4></h4>
              <p>Reminders</p>
              <p>Reminder Frequency</p>
              <p>Reminder Time</p>
              <hr>
              <h4>Wake up at 6am</h4>
              <p>Reminders</p>
              <p>Reminder Frequency</p>
              <p>Reminder Time</p>
            </div>
          </div>
          <div class="column">
            <div class="new-container">
              <h3>Site Appearance</h3>
              <hr>
              <p>Colour Scheme</p>
            </div>
          </div> -->
    </section>
</div>

<style lang="scss">
  @mixin flex {
    display: flex;
    align-items: center;
    }

  .user-pic {
    width: 60px;
    height: 60px;
    background-color: $dark-grey;
    border-radius: 100%;
    @include flex;
    justify-content: center;
    i {
      font-size: 35px;
      color: $light-grey;
    }
    }

    .wrapper {
      @include flex;
      justify-content: space-between;
      flex-flow: row wrap;
      gap: 15px;
      margin: 20px 5px;
    }

    p, h3 {
      margin: 0;
    }

    .container {
      width: 280px;
      background: $white;
      border-radius: $card-radius;
      box-shadow: $card-shadow;
      padding: $card-padding;
      margin-top: 30px;
      h2 {
        font-size: 20px;
      }
      h3 {
        font-size: 15px;
      }
      @media all and (max-width:900px) {
        width: 100%;
      }
    }

    section {
      display: flex;
      flex-flow: row wrap;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 30px;
      width: 70%;
      transition: $trans-05;
      @media all and (max-width: 900px) {
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    }
</style>