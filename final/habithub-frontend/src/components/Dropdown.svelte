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

  let value;

  $: listEntries = categories.filter((c) => {
    if (!value || value === "") {
      return false;
    } else {
      return c.toLowerCase().indexOf(value.toLowerCase()) >= 0;
    }
  });
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
  {#if listEntries.length > 0}
    <ul>
      {#each listEntries as entry}
        <li><button>{entry}</button></li>
      {/each}
    </ul>
  {/if}
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
</style>
