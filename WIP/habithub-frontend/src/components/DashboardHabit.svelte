<script>
    let yes = false
</script>

<div class="habit-card">
    <div class="wrapper">
        <div class="title">
            <i class='bx bx-dumbbell'></i>
            <h2>Workout</h2>
        </div>
    <i class='bx bx-chevron-right'></i>
    </div>
    <hr>
    <div class="wrapper card-info">
        <div class="streak">
        <i class='bx bxs-hot'></i>
        <p>30 day streak</p>
        </div>
        <label>
            <input type=checkbox bind:checked={yes}>
            {#if yes}
            1/1 items completed
            {:else}
            0/1 items completed
            {/if}
        </label>
    </div>
</div>

<style lang="scss">
    .habit-card {
        width: 450px;
        height: auto;
        background: #fff;
        border-radius: 6px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        @media all and (max-width: 600px) {
            width: 380px;
        }
        @media all and (max-width: 525px) {
            width: 340px;
        }
        &:hover .bx-chevron-right{
            transform: translateX(5px);
        }
    }

    .bx-chevron-right {
        font-size: 20px;
        transition: all 0.2s ease;
    }

    h2 {
        font-size: 16px;
        margin: 0;
    }

    .wrapper {
        padding: 15px 25px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
    }

    .card-info {
        flex-wrap: wrap;
    }

    .title {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        column-gap: 16px;
        i {
            font-size: 25px;
            color: #EF6461
        }
    }

    .streak {
        @extend .title;
        column-gap: 7px;
        i {
            color: #E4B363;
            font-size: 20px;
        }
    }

    p {
        margin: 0;
    }
</style>