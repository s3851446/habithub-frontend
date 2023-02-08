<script>
  export let name;
  export let description;
  export let h_id;
  export let streak;
  export let classs;
  export let jwt;
  export let userID;
  export let icon;

  // import { redirectToLocation } from './../utils'
  import PopUp from "./PopUp.svelte";
  import EditHabit from "./EditHabit.svelte";
  import { onMount } from "svelte";
  import Button from "./Button.svelte";

  let showEditPopup = false;
  let showDeletePopup = false;

  if (icon == undefined || icon == null) {
    icon = "bx-list-check"
  }

  onMount(() => {});

  function closePopup() {
    showEditPopup = false;
  }

  // ** This is not needed because the data is bound, however maybe the data should be refreshed somehow if the submit is bad.
  // or, it shouldn't be bound and should somehow only be updated if submit is good
  // ***************************************************************
  // async function fetchHabit() {
  //     let response = await fetch(`https://habithub-api.herokuapp.com/habit/habit/${h_id}`, {
  //         method: 'GET',
  //         headers: {
  //             'Accept': 'application.json',
  //             'Content-Type': 'application/json',
  //             'Authorization': 'BEARER ' + jwt
  //         }
  //     })

  //     if (!response.ok) {
  //         // set a problem message
  //         return
  //     } else {
  //         const data = response.json()
  //     }
  // }

  function closeDeletePopup() {
    showDeletePopup = false
  }

  function deleteHabit() {
    // NOTE - need to delete the habit and refresh the page
    showDeletePopup = false
  }
</script>

<div class="parent {classs}">
  <div class="title">
    <i class="bx {icon}" />
    <h2>{name}</h2>
  </div>
  <p>{description}</p>
  <div class="bottom">
    <div class="start">
      <i class="bx bxs-hot icon" />
      <span class="body-content">{streak} days!</span>
    </div>
    <div class="end">
      <PopUp icon="bx-edit" button_name="Edit" bind:showPopup={showEditPopup}>
        <EditHabit
          bind:jwt
          bind:userID
          type="edit"
          submitText="Save"
          {h_id}
          bind:h_description={description}
          bind:h_title={name}
          on:submitEvent={closePopup}
        />
      </PopUp>
      <PopUp icon="bx-trash" button_name="Delete" bind:showPopup={showDeletePopup}>
        <div class="delete-form">
          <p>Are you sure you want to delete "{name}"?</p>
          <div>
            <Button on:click={closeDeletePopup}>Cancel</Button>
            <Button on:click={deleteHabit}>Delete</Button>
          </div>
        </div>
      </PopUp>
    </div>
  </div>
</div>

<style lang="scss">
  .parent {
    border-radius: $card-radius;
    margin: 0.5em 0;
    padding: 1em;
    box-shadow: $card-shadow;
    background-color: $white;
    min-width: 200px;
  }

  p {
    width: 100%;
  }

  h1 {
    font-size: 17px;
  }

  .flex {
    flex-grow: 1;
  }

  .dud-card {
    @extend .flex;
    visibility: hidden;
  }

  .bottom {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 10px;
  }

  .start {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.3em;
    i {
      font-size: 20px;
      color: $yellow;
    }
  }

  .end {
    display: flex;
    flex-flow: row wrap;
    gap: 10px;
  }

  .delete-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  h2 {
    font-size: 16px;
    margin: 0;
  }

  .title {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    column-gap: 16px;
    margin-bottom: 10px;
    i {
      font-size: 25px;
      color: $black;
    }
  }
</style>
