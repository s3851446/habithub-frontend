<script>
  import TextInput from "./TextInput.svelte";
  import NumberInput from "./NumberInput.svelte";
  import Button from "./Button.svelte";
  import Dropdown from "./Dropdown.svelte";
  import { createEventDispatcher } from "svelte";

  export let type;
  export let h_title;
  export let h_description;
  export let h_id;
  export let submitText;
  export let userID;
  export let jwt;
  export let category;
  export let goal;

  let title;
  let description;

  const dispatch = createEventDispatcher();

  // develop based on: https://javascript.info/formdata
  // & https://svelte.dev/repl/74685aa8b4374c4c8f395ce643fee7b6?version=3.48.0
  const handleSubmit = async (e) => {
    var ACTION_URL = "https://habithub-api.herokuapp.com/habit/";
    var method = "POST";
    if (type == "new") ACTION_URL += `user/${userID}`;
    if (type == "edit") {
      ACTION_URL += `habit/${h_id}`;
      method = "PUT";
    }

    const titleString = title.value;
    const descriptionString = description.value;

    let response = await fetch(ACTION_URL, {
      method: method,
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
        Authorization: "BEARER " + jwt,
      },
      body: JSON.stringify({
        title: titleString,
        description: descriptionString,
        category: category,
        totalGoal: goal
      }),
    });

    let result = await response.json();

    if (!response.ok) {
      // to-do display a 'something went wrong' msg
    } else {
      sendSubmitEvent();
    }
  };

  function sendSubmitEvent() {
    dispatch("submitEvent");
  }
</script>

<div>
  <form id="form" class="habit-form" on:submit|preventDefault={handleSubmit}>
    <h2>{submitText}</h2>
    <Dropdown bind:value={category}/>
    <TextInput
      classs=""
      bind:this={title}
      name="title"
      bind:value={h_title}
      placeholder="title"
      label="Title"
      id="title"
    />
    <TextInput
      classs="description"
      bind:this={description}
      name="description"
      bind:value={h_description}
      placeholder="description"
      label="Description"
      id="desc"
    />
    <NumberInput 
      bind:value={goal}
      placeholder="goal"
      label="Goal (days)"
      name="goal"
      id="number-input"
    />
    <div class="btn">
      <Button id="" on:click(handleSubmit)>{submitText}</Button>
    </div>
  </form>
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

  // .goal-input {
  //   width: 70%;
  //   position: relative;
  //   transition: $trans-05;
  //   @media all and (max-width: 900px) {
  //     width: 100%;
  //   }
  // }

  // .number-label {
  //   position: absolute;
  //   left: 10px;
  //   top: 14px;
  //   transition: $trans-02;
  //   padding: 0 2px;
  //   z-index: 1;
  //   &::before {
  //     content: "";
  //     height: 5px;
  //     background-color: $white;
  //     position: absolute;
  //     left: 0;
  //     top: 10px;
  //     width: 100%;
  //     z-index: -1;
  //   }
  //   &:hover {
  //     cursor: text;
  //   }
  // }

  // .number-input {
  //   padding: 0.8rem;
  //   border-radius: $card-radius;
  //   width: 100%;
  //   height: 100%;
  //   border: 1px solid $light-grey;
  //   background: $white;
  //   font-size: 15px;
  //   outline: none;
  //   transition: $trans-03;
  //   color: $black;
  //   &:focus {
  //     border: 1px solid $red;
  //     & + .number-label {
  //       top: -10px;
  //       color: $red;
  //       font-size: 14px;
  //     }
  //   }
  //   &::placeholder {
  //     font-size: 15px;
  //     opacity: 0;
  //     transition: $trans-03;
  //   }
  //   &:focus::placeholder {
  //     opacity: 1;
  //     animation-delay: 0.2s;
  //   }
  //   &:focus + label,
  //   &:valid + label {
  //     top: -10px;
  //     color: $red;
  //     font-size: 14px;
  //   }
  // }
</style>
