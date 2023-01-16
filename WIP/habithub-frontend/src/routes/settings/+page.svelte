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
      <!-- This is temporary & will be changed to a component soon. -AB -->
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
          <div class="container notification">
            <div class="title">
              <i class='bx bx-dumbbell'></i>
              <h2>Workout</h2>
            </div>
            <hr>
            <div class="wrapper">
              <h3>Reminders</h3>
              <p>On</p>
            </div>
            <div class="wrapper">
              <h3>Reminder Frequency</h3>
              <p>Daily</p>
            </div>
            <div class="wrapper">
              <h3>Reminder Time</h3>
              <p>09:00 AM</p>
            </div>
          </div>
          <div class="container notification">
            <div class="title">
              <i class='bx bx-dumbbell'></i>
              <h2>Workout</h2>
            </div>
            <hr>
            <div class="wrapper">
              <h3>Reminders</h3>
              <p>On</p>
            </div>
            <div class="wrapper">
              <h3>Reminder Frequency</h3>
              <p>Daily</p>
            </div>
            <div class="wrapper">
              <h3>Reminder Time</h3>
              <p>09:00 AM</p>
            </div>
          </div>
        </div>
        <div class="container">
          <h2>Colour Scheme</h2>
          <hr>
          <div class="wrapper">
            <h3>Colour Scheme</h3>
            <p>Light</p>
          </div>
        </div>
      <!-- 
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

    p, h3, h2 {
      margin: 0;
    }

    hr {
      margin-top: 16px;
    }

    .container {
      width: 300px;
      height: auto;
      background: $white;
      border-radius: $card-radius;
      box-shadow: $card-shadow;
      padding: 16px;
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
      width: 100%;
      transition: $trans-05;
      @media all and (max-width: 900px) {
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    }

    .notification {
      width: auto;
      margin-top: 15px;
      .wrapper {
        position: relative;
      }
    }

    .title {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        column-gap: 16px;
        i {
            font-size: 25px;
            color: $red;
        }
    }
</style>