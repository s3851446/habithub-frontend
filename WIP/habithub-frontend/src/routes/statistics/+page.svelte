<script>
  import Button from "../../components/Button.svelte";
  import { validateToken } from './../../utils'
  import { onMount } from 'svelte'
  import ProgressCard from "../../components/ProgressCard.svelte";

  onMount(async () => {
      const validToken = await validateToken()
      if (!validToken) {
          window.location.href = '/login'
      }
  })
</script>

<div class="body">
  <div>
    <h1>Overall Progress</h1>
  </div>
  <div class="statistics-button">
    <Button class="range-selector">
      <i class='bx bx-calendar'></i>
      Data Range Selector
    </Button>
  </div>
  <div class="progress-cards">
    <ProgressCard />
    <ProgressCard />
    <ProgressCard />
    <ProgressCard />
  </div>
</div>

<style>
  .statistics-button {
    float: right;
  }

  i {
    font-size: 20px;
    margin-right: 7px;
  }

  .progress-cards {
    margin-top: 30px;
  }
</style>