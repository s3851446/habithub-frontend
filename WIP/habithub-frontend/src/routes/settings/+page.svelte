<script>
  import { validateToken } from './../../utils'
  import { onMount } from 'svelte'

  onMount(async () => {
      const validToken = await validateToken()
      if (!validToken) {
          window.location.href = '/login'
      }
  })
</script>

<div class="body">
    <section class="settings">
        <div class="content-wrap item-details divider">
          <h2 id="settings">Settings</h2>
        </div>
        <div class="row">
          <div class="column">
            <div class="new-container">
              <h3>Profile Settings</h3>
              <hr>
              <br>
              <p>Username</p>
              <p>First Name</p>
              <p>Last Name</p>
              <p>Email</p>
              <p>Profile Picture</p>
              <img src="./images/portrait1.jpg" alt="chef" style="width:50%">
            </div>
          </div>
          <div class="column">
            <div class="new-container">
              <h3>Notification Settings</h3>
              <hr>
              <br>
              <h4>Workout</h4>
              <p>Reminders</p>
              <p>Reminder Frequency</p>
              <p>Reminder Time</p>
              <hr>
              <br>
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
              <br>
              <p>Colour Scheme</p>
            </div>
          </div>
        </div>
      </section>
</div>

<style>
  img {
      width: 300px;
  }

  h3 {
    padding: 20px 0;
  }

  .content-wrap {
      max-width: 95%;
      width: 85%;
      padding-bottom: 16px;
  }

  .column {
    float: left;
    width: 25%;
    margin-bottom: 16px;
    padding: 8px 8px;
  }

  .column h3 {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 750px) {
    .column {
      width: 100%;
      display: block;
    }
  }

  .new-container {
    padding: 0 16px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  .new-container::after, .row::after {
    content: "";
    clear: both;
    display: table;
  }

  /* Responsive Elements
  --------------------- */

  /* Display the columns on small screens */
  @media screen and (max-width: 900px) {
    .column {
      float: left;
      width: 70%;
      display: block;
    }
  }

  @media screen and (max-width: 750px) {
    .column {
      float: left;
      width: 100%;
      display: block;
    }
  }

  /* this is a media query that uses max-width. It triggers at 749 
  so it doesn't clash with the min-width. h1 font size reduces in size.
  It also changes line height of h2 and h1 and margin of h1.
  */
  @media screen and (max-width:749px){
    h2 {
      line-height: 1;
      font-size: 35px;
    }
  }
</style>