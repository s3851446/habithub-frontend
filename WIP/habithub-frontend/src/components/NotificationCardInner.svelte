 <div class="container notification">
    <div class="title">
        <i class='bx bx-dumbbell'></i>
        <h2>Workout</h2>
    </div>
    <hr>
    <div class="wrapper">
        <h3>Reminders</h3>
        <p>On</p>
    </div>
    <div class="wrapper">
        <h3>Reminder Frequency</h3>
        <p>Daily</p>
    </div>
    <div class="wrapper">
        <h3>Reminder Time</h3>
        <p>09:00 AM</p>
    </div>
</div>

<style lang="scss">
    .container {
      width: 300px;
      height: auto;
      background: $white;
      border-radius: $card-radius;
      box-shadow: $card-shadow;
      padding: 16px;
      margin-top: 30px;
      h2 {
        font-size: 20px;
      }
      h3 {
        font-size: 15px;
      }
      @media all and (max-width:900px) {
        width: 100%;
      }
    }

    .notification {
      width: auto;
      margin-top: 15px;
      .wrapper {
        position: relative;
      }
    }

    .title {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        column-gap: 16px;
        i {
            font-size: 25px;
            color: $red;
        }
    }

    .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-flow: row wrap;
        gap: 15px;
        margin: 20px 5px;
    }

    p, h3, h2 {
      margin: 0;
    }

    hr {
      margin-top: 16px;
    }
</style>