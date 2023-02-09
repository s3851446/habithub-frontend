<script>
  import { set_input_value } from "svelte/internal";
  import TextInput from "./TextInput.svelte";

  const categories = [
    "Organisation",
    "Study",
    "Cravings",
    "Health",
    "Sleep",
    "Work",
    "Eat",
    "Self / Body",
    "Exercise / Sport",
    "Drinking",
    "Entertainment / Technology",
    "Relationship",
    "Finance",
    "Other",
  ];

  export let value;

  // I changed the return when value is null because it seemed frustrating
  // to not know what categories I was allowed to use. 
  $: listEntries = categories.filter((c) => {
    if (!value || value === "") {
      return categories;
    } else {
      return c.toLowerCase().indexOf(value.toLowerCase()) >= 0;
    }
  });

  function buttonClick(e) {
    value = e.srcElement.value
    document.getElementById('ul').style.display = "none"
  }
</script>

<TextInput
  id="habit-category"
  bind:value
  name="habit-category"
  placeholder="Enter habit category"
  label="Habit Category"
  input_type="text"
  classs="class"
>
  <div id="list">
    {#if listEntries.length > 0}
      <ul id="ul">
        {#each listEntries as entry}
          <li><button value={entry} on:click|preventDefault={buttonClick}>{entry}</button></li>
        {/each}
      </ul>
    {/if}
  </div>
</TextInput>

<style lang="scss">
  ul {
    list-style: none;
    padding: unset;
    margin: unset;
    width: 100%;
    transition: $trans-05;
    background: $white;
    border-radius: 0 0 6px 6px;
    border: 1px solid $light-grey;
    button {
      border: none;
      background: unset;
      font-size: 15px;
      width: 100%;
      text-align: left;
      cursor: pointer;
    }
    li {
      padding: 10px;
      &:hover {
        background: $light-grey;
        button {
          color: $red;
        }
      }
    }
  }

  #list {
    max-height: 10em;
    overflow-y: scroll;
  }
</style>
