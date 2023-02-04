<script>
  import EditHabit from "../../../components/EditHabit.svelte";
  import HabitCard from "../../../components/HabitCard.svelte";
  import PopUp /*{ togglePopup }*/ from "../../../components/PopUp.svelte";
  import Loader from "../../../components/Loader.svelte";
  import { validateToken } from "./../../../utils";
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  let jwt;
  let userID;
  let habits = [{}];

  let showNewPopup = false;

  if ($page.url.searchParams.get("new") == "true") showNewPopup = true;

  onMount(async () => {
    const validToken = await validateToken();
    if (!validToken) {
      window.location.href = "/login";
    }

    jwt = localStorage.getItem("jwt");
    userID = localStorage.getItem("userID");

    fetchHabits(userID, jwt);
  });

  // fetch habits should become a utils function (matching dashboard / )
  async function fetchHabits(userID, jwt) {
    let response = await fetch(
      `https://habithub-api.herokuapp.com/habit/user/${userID}`,
      {
        method: "GET",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
          Authorization: "BEARER " + jwt,
        },
      }
    );

    if (!response.ok) {
      // set a problem message
      return;
    }

    let data = await response.json();
    habits = data;
    document.getElementById("card-container").style.visibility = "visible";
    document.querySelector(".man").style.visibility = "visible";
    document.getElementById("spinner").style.display = "none";
  }

  function closePopup() {
    // need to silently update the data from here
    showNewPopup = false;
  }
</script>

<div class="body">
  <div class="heading">
    <h1>My Habits</h1>
    <PopUp icon="bx-plus" button_name="Add Habit" bind:showPopup={showNewPopup}>
      <EditHabit
        {jwt}
        {userID}
        type="new"
        submitText="Add Habit"
        h_id=""
        h_description=""
        h_title=""
        on:submitEvent={closePopup}
      />
    </PopUp>
  </div>
  <Loader id="spinner" />
  <div class="container">
    <div class="content">
      <div class="card-container" id="card-container">
        {#key habits}
          {#each habits as habit}
            <HabitCard
              classs="flex"
              name={habit.title}
              description={habit.description}
              streak={habit.streak}
              h_id={habit._id}
              {jwt}
              {userID}
            />
          {/each}
        {/key}
      </div>
    </div>
    <div class="man">
      <object
        title="Man running"
        type="image/svg+xml"
        data="./images/running.svg"
      >
        <img src="./images/running.svg" alt="Man running" />
      </object>
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    column-gap: 5px;
    transition: $trans-05;
    @media all and (max-width: 900px) {
      flex-flow: column nowrap;
      align-items: center;
      margin-top: 20px;
    }
  }

  .man {
    width: calc(20% + 60px);
    transition: $trans-05;
    visibility: hidden;
    @media all and (max-width: 900px) {
      width: calc(25% + 60px);
    }
    @media all and (max-width: 600px) {
      width: calc(40% + 60px);
    }
    @media all and (max-width: 400px) {
      width: calc(100% + 60px);
    }
  }

  .content {
    width: 75%;
    transition: $trans-05;
    @media all and (max-width: 900px) {
      width: 100%;
    }
    visibility: hidden;
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    column-gap: 20px;
    row-gap: 10px;
    visibility: hidden;
  }

  .heading {
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  }
</style>
