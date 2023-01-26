<script>
  import { validateToken } from './../../utils'
  import { onMount } from 'svelte'
  import TextInput from '../../components/TextInput.svelte'
  import NotificationCard from '../../components/NotificationCardInner.svelte'
  import Button from '../../components/Button.svelte'
  import { loadUserData, loadUserPic } from './../../utils'
  import PopUp from '../../components/PopUp.svelte';
  import ImageUpload from '../../components/ImageUpload.svelte';

  onMount(async () => {
      const validToken = await validateToken()
      if (!validToken) {
          window.location.href = '/login'
      }

      const data = await loadUserData(localStorage.getItem('userID'), localStorage.getItem('jwt'))

      document.getElementById('email').innerHTML = data.email
      document.getElementById('firstName').innerHTML = data.firstName
      document.getElementById('lastName').innerHTML = data.lastName
      if (data.settings != null) document.getElementById('colourScheme').innerHTML = data.settings.colourScheme

      const picData = await loadUserPic(localStorage.getItem('userID'), localStorage.getItem('jwt'))
      const picImg = document.getElementById('pic-img-settings')
      const picIcon = document.getElementById('pic-icon-settings')

      if (picData) {
          picImg.src = `data:${picData.pic.mimetype};base64,${picData.pic.buffer64}`
          picImg.style.display = "block"
          picIcon.style.display = "none"
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
            <h3>First Name</h3>
            <p id="firstName">Name</p>
          </div>
          <div class="wrapper">
            <h3>Last Name</h3>
            <p id="lastName">LastName</p>
          </div>
          <div class="wrapper">
            <h3>Email</h3>
            <p id="email">example@mail.com</p>
          </div>
          <div class="wrapper">
            <h3>Profile Picture</h3>
            <div class="user-pic">
              <i id="pic-icon-settings" class='bx bxs-user profile'></i>
              <img id="pic-img-settings" src="" alt="user-avatar">
            </div>
          </div>
          <PopUp icon="bx-edit" button_name="Edit Profile">
            <form action="">
              <h2>Edit Profile</h2>
              <p>Please enter your new profile information here</p>
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
              <ImageUpload />
                <Button>
                  <i class="bx bx-save"></i>
                  Save Profile
                </Button>
            </form>
          </PopUp>
        </div>
        <div class="container">
          <h2>Notification settings</h2>
          <hr>
          <NotificationCard habit_title="Workout" icon="bx-dumbbell" reminder="On" frequency="Daily" time="09:00 AM"/>
          <NotificationCard habit_title="Sleep early" icon="bx-bed" reminder="On" frequency="Daily" time="09:00 PM"/>
        </div>
        <div class="container">
          <h2>Colour Scheme</h2>
          <hr>
          <div class="wrapper">
            <h3>Colour Scheme</h3>
            <p id="colourScheme">Light</p>
          </div>
        </div>
    </section>
</div>

<style lang="scss">
  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

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

    #pic-img-settings {
        width: 60px;
        height: 60px;
        border-radius: 100%;
        display: none;
    }
</style>