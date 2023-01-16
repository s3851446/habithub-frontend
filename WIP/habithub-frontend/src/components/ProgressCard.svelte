<div class="column">
    <div class="new-container">
        <div class="title">
             <i class='bx bx-dumbbell'></i>
            <h2>Workout</h2>
        </div>
    <hr>
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

<style>
    .column {
        width: 70%;
        transition: all 0.5s ease;
    }

    @media all and (max-width: 900px) {
        .column {
            width: 100%;
        }
    }

    .new-container {
        background: #fff;
        border-radius: 6px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        margin-bottom: 20px;
        padding: 16px;
    }

    .title i {
        font-size: 29px;
        color: #EF6461;
    }

    .title {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        column-gap: 16px;
    }

    h2, h4 {
        
        margin: 0;
    }

    h2 {
        font-size: 19px;
    }

    hr {
        margin: 15px 0;
    }

    .variable-row {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        gap: 30px;
    }
</style>