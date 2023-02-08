<script>
  import Button from "../../../components/Button.svelte";
  import { validateToken } from "../../../utils";
  import { onMount } from "svelte";
  import ProgressCard from "../../../components/ProgressCard.svelte";
  import Warning from "../../../components/Warning.svelte";

  onMount(async () => {
    const validToken = await validateToken();
    if (!validToken) {
      window.location.href = "/login";
    }
  });
</script>

<div class="body">
  <div class="content">
    <div>
      <Warning
        message="This page is currently under construction. 
          It contains demo data, components and elements.
          It will be updated soon and we appreciate your patience."
      />
      <h1>Overall Progress</h1>
    </div>
    <div class="progress-cards">
      <ProgressCard
        habit_title="Workout"
        icon="bx-dumbbell"
        current_streak="30"
        best_streak="30"
        progress="30/60"
      />
      <ProgressCard
        habit_title="Sleep Early"
        icon="bx-bed"
        current_streak="1"
        best_streak="1"
        progress="1/60"
      />
      <ProgressCard
        habit_title="Wake-up Early"
        icon="bx-sun"
        current_streak="1"
        best_streak="1"
        progress="1/60"
      />
      <ProgressCard
        habit_title="Drink Water"
        icon="bx-droplet"
        current_streak="20"
        best_streak="45"
        progress="50/60"
      />
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
  }
</style>
