<script>
  import { validateToken } from "../../../utils";
  import { onMount } from "svelte";
  import TextInput from "../../../components/TextInput.svelte";
  import NotificationCard from "../../../components/NotificationCardInner.svelte";
  import Button from "../../../components/Button.svelte";
  import { loadUserData, loadUserPic } from "../../../utils";
  import PopUp from "../../../components/PopUp.svelte";
  import ImageUpload from "../../../components/ImageUpload.svelte";
  import Warning from "../../../components/Warning.svelte";
  import Toast from "../../../components/Toast.svelte";

  let firstName = "Name";
  let lastName = "Last name";
  let email = "example@mail.com";
  let userID;
  let jwt;
  let files;
  let showSettingsPopup = false;
  let toast;
  let toastObj = {
    message: "",
    description: ""
  }

  onMount(async () => {
    const validToken = await validateToken();
    if (!validToken) {
      window.location.href = "/login";
    }

    jwt = localStorage.getItem("jwt")
    userID = localStorage.getItem("userID")

    setUserData(userID, jwt)

    // const data = await loadUserData(userID, jwt);

    // firstName = data.firstName;
    // lastName = data.lastName;
    // email = data.email;
    // if (data.settings != null)
    //   document.getElementById("colourScheme").innerHTML =
    //     data.settings.colourScheme;

    const picData = await loadUserPic(
      localStorage.getItem("userID"),
      localStorage.getItem("jwt")
    );
    const picImg = document.getElementById("pic-img-settings");
    const picIcon = document.getElementById("pic-icon-settings");

    if (picData) {
      picImg.src = `data:${picData.pic.mimetype};base64,${picData.pic.buffer64}`;
      picImg.style.display = "block";
      picIcon.style.display = "none";
    }
  });

  async function setUserData(userID, jwt) {
    const data = await loadUserData(userID, jwt)
    firstName = data.firstName;
    lastName = data.lastName;
    email = data.email;
    if (data.settings != null)
      document.getElementById("colourScheme").innerHTML =
        data.settings.colourScheme;
  }

  async function settingsSubmit() {
    const response = await fetch(
      `https://habithub-api.herokuapp.com/user/${userID}`,
      {
        method: "PUT",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
          Authorization: "BEARER " + jwt,
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
        }),
      }
    );

    // do something with response

    // Thanks to this: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
    // somehow this all worked really easily, which is suspicious
    if (files) {
      const formData = new FormData();
      formData.append("profilepic", files[0]);
      const fileResponse = await fetch(
        `https://habithub-api.herokuapp.com/pic/${userID}`,
        {
          // const fileResponse = await fetch(`http://localhost:3000/pic/${userID}`, {
          method: "POST",
          headers: {
            Authorization: "BEARER " + jwt,
          },
          body: formData,
        }
      );

      // do something with fileResponse
      if (fileResponse.ok) {
        const fileData = await fileResponse.json();
        const picImg = document.getElementById("pic-img-settings");
        const picIcon = document.getElementById("pic-icon-settings");
        picImg.src = `data:${fileData.mimetype};base64,${fileData.buffer64}`;
        picImg.style.display = "block";
        picIcon.style.display = "none";

        // NOTE - need to temporarily replace button with spinner

        // toast not displaying properly
        toastObj.message = "Profile pic updated!"
        toastObj.description = "You may need to reload the page."
        toast.showToastNow(4000)
        setTimeout(() => {
          toastObj.description = ""
        }, 5000)
      } else {
        toastObj.message = "Profile pic update failed."
        toast.showToastNow(4000)
      }
    }

    if (!response.ok) {
      toastObj.message = "Problem updating settings."
      toast.showToastNow(4000)
      // resest values (fetch again)
    } else {
      showSettingsPopup = false;
    }
  }
</script>

<div class="body">
  <Toast bind:this={toast} bind:message={toastObj.message} bind:description={toastObj.description} showToast="" />
  <Warning
    message="The notification and colour scheme
      features are still under construction.
      We apologise for any inconveniences caused by this.
      This will be updated soon. Thank you for your patience."
  />
  <h1>Settings</h1>
  <section>
    <!-- This is temporary & will be changed to a component soon. -AB -->
    <div class="container">
      <h2>Profile</h2>
      <hr />
      <div class="wrapper">
        <h3>First Name</h3>
        <p id="firstName">{firstName}</p>
      </div>
      <div class="wrapper">
        <h3>Last Name</h3>
        <p id="lastName">{lastName}</p>
      </div>
      <div class="wrapper">
        <h3>Email</h3>
        <p id="email">{email}</p>
      </div>
      <div class="wrapper">
        <h3>Profile Picture</h3>
        <div class="user-pic">
          <i id="pic-icon-settings" class="bx bxs-user profile" />
          <img id="pic-img-settings" src="" alt="user-avatar" />
        </div>
      </div>
      <PopUp
        icon="bx-edit"
        button_name="Edit Profile"
        bind:showPopup={showSettingsPopup}
      >
        <form action="" on:submit={settingsSubmit}>
          <h2>Edit Profile</h2>
          <p>Please enter your new profile information here</p>
          <TextInput
            id="firstName"
            bind:value={firstName}
            name="FirstName"
            placeholder="Enter your first name here"
            label="First Name"
            input_type="text"
          />
          <TextInput
            id="lastName"
            bind:value={lastName}
            name="LastName"
            placeholder="Enter your last name here"
            label="Last Name"
            input_type="text"
          />
          <TextInput
            id="email"
            bind:value={email}
            name="Email"
            placeholder="Enter your email address here"
            label="Email"
            input_type="email"
          />
          <ImageUpload bind:file={files} />
          <Button>
            <i class="bx bx-save" />
            Save Profile
          </Button>
        </form>
      </PopUp>
    </div>
    <div class="container">
      <div class="error">
        <h2>Notification settings</h2>
        <i class="bx bx-error" />
      </div>
      <hr />
      <NotificationCard
        habit_title="Workout"
        icon="bx-dumbbell"
        reminder="On"
        frequency="Daily"
        time="09:00 AM"
      />
      <NotificationCard
        habit_title="Sleep early"
        icon="bx-bed"
        reminder="On"
        frequency="Daily"
        time="09:00 PM"
      />
    </div>
    <div class="container">
      <div class="error">
        <h2>Colour scheme</h2>
        <i class="bx bx-error" />
      </div>
      <hr />
      <div class="wrapper">
        <h3>Colour Scheme</h3>
        <p id="colourScheme">Light</p>
      </div>
    </div>
  </section>
  <!-- This page has no man as I felt that it didn't one. It's just the settings 
      page and user's don't need the man's emotions to motivate them here. -AB -->
</div>

<style lang="scss">
  .error {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
    i {
      color: $yellow;
      font-size: 25px;
    }
  }

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

  p,
  h3,
  h2 {
    margin: 0;
  }

  hr {
    margin-top: 16px;
  }

  .container {
    width: 31%;
    min-width: 300px;
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
    @media all and (max-width: 1097px) {
      width: 100%;
    }
  }

  section {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-evenly;
    gap: 30px;
    width: 100%;
    margin-bottom: 20px;
    transition: $trans-05;
    @media all and (max-width: 1137px) {
      justify-content: flex-start;
      gap: 10px;
    }
    @media all and (max-width: 1097px) {
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
