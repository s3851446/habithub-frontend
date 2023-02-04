<script>
    import Button from "../../../components/Button.svelte"
</script>

<div class="body">
    <div class="content">
        <h1>Welcome to Habit Hub!</h1>
        <p>This is a quick guide to show you what you can do with Habit Hub!</p>
        <div class="step">
            <h2>Add/delete/edit habits</h2>
            <!-- Placeholder from Adobe Stock Images:
            https://stock.adobe.com/au/search?k=image+placeholder&search_type=usertyped&asset_id=268556012 -->
        <img src="./images/img_placeholder.jpeg" alt="Placeholder">
        </div>
        <div class="step">
            <h2>View daily/weekly/monthly stats</h2>
            <!-- Placeholder from Adobe Stock Images:
            https://stock.adobe.com/au/search?k=image+placeholder&search_type=usertyped&asset_id=268556012 -->
        <img src="./images/img_placeholder.jpeg" alt="Placeholder">
        </div>
        <div class="btn">
            <Button>Okay, got it!</Button>
        </div>
    </div>
    <div class="man">
        <object title="Man nodding" type="image/svg+xml" data="./images/okay.svg">
            <img src="./images/okay.svg" alt="Man nodding"/>
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

    h2 {
        font-size: 17px;
    }    

    .step {
        margin-bottom: 50px;
        img {
        width: 100%;
        height: 400px;
        border-radius: $card-radius;
        }
    }

    .btn {
        margin-bottom: 20px;
    }
</style>