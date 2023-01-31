<script>
    import EditHabit from '../../components/EditHabit.svelte'
    import HabitCard from '../../components/HabitCard.svelte'
    import PopUp /*{ togglePopup }*/ from '../../components/PopUp.svelte'
    import Spinner from '../../components/Spinner.svelte'
    import { validateToken } from './../../utils'
    import { onMount } from 'svelte'
    import { page } from '$app/stores'

    let jwt
    let userID
    let habits = [{}]

    let showNewPopup = false

    if ($page.url.searchParams.get('new') == "true") showNewPopup = true

    onMount(async () => {
        const validToken = await validateToken()
        if (!validToken) {
            window.location.href = '/login'
        }

        jwt = localStorage.getItem('jwt')
        userID = localStorage.getItem('userID')

        fetchHabits(userID, jwt)
    })

    // fetch habits should become a utils function (matching dashboard / )
    async function fetchHabits(userID, jwt) {
        let response = await fetch(`https://habithub-api.herokuapp.com/habit/user/${userID}`, {
            method: 'GET',
            headers: {
                'Accept': 'application.json',
                'Content-Type': 'application/json',
                'Authorization': 'BEARER ' + jwt
            }
        })

        if (!response.ok) {
            // set a problem message
            return
        }

        let data = await response.json()
        habits = data
        document.getElementById('card-container').style.visibility = "visible"
        document.getElementById('spinner').style.display = "none"
    }

    function closePopup() {
        // need to silently update the data from here
        showNewPopup = false
    }

</script>


<div class="body">
    <div class="heading">
        <h1>My Habits</h1>
        <PopUp icon="bx-plus" button_name="Add Habit" bind:showPopup={showNewPopup}>
            <EditHabit 
                jwt={jwt} 
                userID={userID} 
                type="new" 
                submitText="Add Habit" 
                h_id="" 
                h_description="" 
                h_title=""
                on:submitEvent={closePopup}/>
        </PopUp>  
    </div>
    <Spinner id="spinner" />
    <div class="card-container" id="card-container">
        {#key habits}
            {#each habits as habit}
                <HabitCard 
                    classs="flex" 
                    name={habit.title} 
                    description={habit.description} 
                    streak={habit.streak} 
                    h_id={habit._id} 
                    jwt={jwt} 
                    userID={userID}/>
            {/each}
        {/key}
        <HabitCard classs="dud-card" name="" description="" streak="" h_id="" />
    </div>
</div>

<style lang="scss">
    .card-container {
        display: flex;
        flex-wrap: wrap;
        align-content: stretch;
        gap: 1em;
        visibility: hidden;
    }

    .heading {
        display: flex;
        width: 100%;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
    }
</style>