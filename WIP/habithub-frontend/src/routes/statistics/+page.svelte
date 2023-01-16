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
  <section class="statistics">
    <div class="content-wrap item-details divider">
      <h2 id="statistics">Overall Progress</h2>
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
  </section>
</div>

<style>
  h2{
    line-height: 1;
    margin-bottom: 10px;
  }

  .content-wrap {
      max-width: 95%;
      width: 85%;
      padding: 10px 0;
      padding-bottom: 16px;
  }

  .statistics-button {
    float: right;
  }

  i {
    font-size: 20px;
    margin-right: 7px;
  }

  /* this is a media query that uses max-width. It triggers at 749 
  so it doesn't clash with the min-width. h1 font size reduces in size.
  It also changes line height of h2 and h1 and margin of h1.
  */
  @media screen and (max-width:749px){
      h2 {
          line-height: 1;
          font-size: 35px;
      }
  }
</style>