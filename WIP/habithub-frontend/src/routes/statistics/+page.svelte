<script>
  import Button from "../../components/Button.svelte";
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
    <div class="column">
      <div class="new-container">
        <h3>Workout</h3>
        <hr>
        <br>
        <div class="variable-row">
          <div class="variable-column">
            <h4>Current Streak</h4>
            <p>7 days</p>
          </div>
          <div class="variable-column">
            <h4>Best Streak</h4>
            <p>14 days</p>
          </div>
          <div class="variable-column">
            <h4>Overall Progress</h4>
            <p>7/30 Days</p>
          </div>
        </div>
      </div>
    </div>

    <div class="column">
      <div class="new-container">
        <h3>Workout</h3>
        <hr>
        <br>
        <div class="variable-row">
          <div class="variable-column">
            <h4>Current Streak</h4>
            <p>7 days</p>
          </div>
          <div class="variable-column">
            <h4>Best Streak</h4>
            <p>14 days</p>
          </div>
          <div class="variable-column">
            <h4>Overall Progress</h4>
            <p>7/30 Days</p>
          </div>
        </div>
      </div>
    </div>

    <div class="column">
      <div class="new-container">
        <h3>Workout</h3>
        <hr>
        <br>
        <div class="variable-row">
          <div class="variable-column">
            <h4>Current Streak</h4>
            <p>7 days</p>
          </div>
          <div class="variable-column">
            <h4>Best Streak</h4>
            <p>14 days</p>
          </div>
          <div class="variable-column">
            <h4>Overall Progress</h4>
            <p>7/30 Days</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  h2, h3, h4 {
    line-height: 1;
    margin-bottom: 10px;
  }

  h3 {
    padding: 20px 0;
  }

  p {
    text-align: left;
  }

  .content-wrap {
      max-width: 95%;
      width: 85%;
      padding: 10px 0;
      padding-bottom: 16px;
  }

  .variable-column h4 {
    text-align: left;
  }

  .column {
    width: 70%;
    margin-bottom: 16px;
  }

  .column h3 {
    margin-bottom: 10px;
    text-align: left;
  }

  .column h4 {
    margin-left: 0;
  }

  @media screen and (max-width: 750px) {
    .column {
      width: 100%;
      display: block;
    }
  }

  .new-container {
    padding: 0 16px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  .new-container::after {
    content: "";
    clear: both;
    display: table;
  }

  .statistics-button {
    float: right;
  }

  .variable-column {
    float: left;
    width: 33%;
  }

  .variable-row:after {
    content: "";
    display: table;
    clear: both;
  }

  i {
    font-size: 20px;
    margin-right: 7px;
  }

  /* Responsive Elements
  --------------------- */

  /* Display the columns on small screens */
  @media screen and (max-width: 900px) {
    .column {
      float: left;
      width: 70%;
      display: block;
    }
  }

  @media screen and (max-width: 750px) {
    .column {
      float: left;
      width: 100%;
      display: block;
    }
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