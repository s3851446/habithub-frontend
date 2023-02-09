<script>
  import Button from "../../../components/Button.svelte";
  import { validateToken, signout, redirectToLocation } from "../../../utils";
  import { onMount } from "svelte";
  import ProgressCard from "../../../components/ProgressCard.svelte";
  import Warning from "../../../components/Warning.svelte";
  import Loader from "../../../components/Loader.svelte";

  let jwt;
  let userID;
  let habits = [{}];

  onMount(async () => {
    const validToken = await validateToken();
    if (!validToken) {
      signout();
      redirectToLocation("/login");
    }

    jwt = localStorage.getItem("jwt");
    userID = localStorage.getItem("userID");

    fetchHabits(userID, jwt)
  });

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

    habits = await response.json();
    document.getElementById("progress").style.visibility = "visible";
    document.querySelector(".man").style.visibility = "visible";
    document.getElementById("spinner").style.display = "none";
  }
</script>

<div class="body">
  <div class="content">
    <div>
      <!-- <Warning
        message="This page is currently under construction. 
          It contains demo data, components and elements.
          It will be updated soon and we appreciate your patience."
      /> -->
      <h1>Overall Progress</h1>
    </div>
    <Loader id="spinner" />
    <div class="progress-cards" id="progress">
      {#key habits}
        {#each habits as h}
          <ProgressCard
            habit_title={h.title}
            icon={h.icon}
            current_streak={h.streak}
            best_streak={h.bestStreak}
            goal={h.totalGoal}
            achieved={h.totalDays}
          />
        {/each}
      {/key}
    </div>
  </div>
  <div class="man">
    <object
      title="Man jumping up and down"
      type="image/svg+xml"
      data="./images/jumping.svg"
    >
      <img src="./images/jumping.svg" alt="Man jumping up and down" />
    </object>
  </div>
</div>

<style lang="scss">
  .body {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    column-gap: 50px;
    transition: $trans-05;
    @media all and (max-width: 900px) {
      flex-flow: column nowrap;
      align-items: center;
    }
  }

  .man {
    width: 20%;
    visibility: hidden;
    transition: $trans-05;
    @media all and (max-width: 900px) {
      width: 25%;
    }
    @media all and (max-width: 600px) {
      width: 40%;
    }
    @media all and (max-width: 400px) {
      width: 100%;
    }
  }

  .content {
    width: 75%;
    transition: $trans-05;
    @media all and (max-width: 900px) {
      width: 100%;
    }
  }

  i {
    font-size: 20px;
    margin-right: 7px;
  }

  .progress-cards {
    margin-top: 30px;
    visibility: hidden;
  }
</style>
