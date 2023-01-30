<script>
    import Button from "../components/Button.svelte"
    import { onMount } from 'svelte'
    import { validateToken } from "../utils"
    import { signout } from "../utils";
    import { redirectToLocation } from "../utils";
    import DashboardHabit from "../components/DashboardHabit.svelte";

    onMount(async () => {
        let validToken = false;
        validToken = await validateToken()
        if (!validToken) {
            signout()
            redirectToLocation('/login')
        }
    })

    const newHabit = () => {
        // redirectToLocation('/habits?new=true')
        redirectToLocation('/habits')
    }

</script>

<div class="body">
    <div class="heading">
        <h1>Hello, Name LastName!</h1>
        <div class="btn">
            <Button on:click={newHabit}>
                <i class='bx bx-plus'></i>
                Add Habit
            </Button>
        </div>
    </div>
    <div class="container">
        <div class="content">
            <p>You have completed <i class="italics"> <b>3</b> out of 4</i> of today's 
            scheduled habits. Good job! Keep going!</p>
            <div class="habit-lists">
                <div class="list">
                    <h2>Upcoming Habits</h2>
                    <div class="list-items">
                        <DashboardHabit 
                            title="Workout"
                            icon="bx-dumbbell"
                            streak="30"
                        />
                    </div>
                </div>
                <div class="list">
                    <h2>Completed Habits</h2>
                    <div class="list-items">
                        <DashboardHabit 
                            title="Sleep early"
                            icon="bx-bed"
                            streak="1"
                        />
                        <DashboardHabit 
                            title="Wake up early"
                            icon="bx-sun"
                            streak="1"
                        />
                        <DashboardHabit 
                            title="Drink Water"
                            icon="bx-droplet"
                            streak="20"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="man">
            <object 
                title="Man waving hand" 
                type="image/svg+xml" 
                data="./images/waving.svg"
            >
                <img src="./images/waving.svg" alt="Man waving his hand"/>
            </object>
        </div>
    </div>
</div>
 
<style lang="scss">
    .container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        column-gap: 5px;
        transition: $trans-05;
        @media all and (max-width: 900px) {
            flex-flow: column nowrap;
            align-items: center;
        }
    }

    .man {
        width: calc(20% + 60px);
        transition: $trans-05;
        @media all and (max-width: 900px) {
            width: calc(25% + 60px);
        }
        @media all and (max-width: 600px) {
            width: calc(40% + 60px);
        }
        @media all and (max-width: 400px) {
            width: calc(100% + 60px);
        }
    }

    .content {
        width: 75%;
        transition: $trans-05;
        @media all and (max-width: 900px) {
            width: 100%;
        }
    }

    .list-items {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
    }

    h2 {
        font-size: 16px;
    }

    .list {
        width: 46%;
        margin: 10px 0;
        @media all and (max-width: 1000px) {
            width: 100%;
        }
    }

    .habit-lists {
       display: flex;
       flex-flow: row wrap;
       justify-content: flex-start;
       align-items: flex-start;
       gap: 30px;
       width: 100%;
       transition: $trans-05;
       @media all and (max-width: 1000px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
       }
    }

    .italics {
        text-decoration: underline;
    }

    b {
        color: $red;
    }

    .heading {
        display: flex;
        width: 100%;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        column-gap: 20px;
    }

    .btn {
        margin: 10px 0 20px 0;
    }
</style>

