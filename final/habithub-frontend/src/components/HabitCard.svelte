<script>
    export let name
    export let description
    export let h_id
    export let streak
    export let classs
    export let jwt
    export let userID

    // import { redirectToLocation } from './../utils'
    import PopUp from './PopUp.svelte'
    import EditHabit from './EditHabit.svelte'
    import { onMount } from 'svelte'

    let showEditPopup = false

    // const redirect = (route) => {
    //     const location = route + h_id
    //     redirectToLocation(location)
    // }

    onMount(() => {

    })

    function closePopup() {
        showEditPopup = false
    }

    // ** This is not needed because the data is bound, however maybe the data should be refreshed somehow if the submit is bad. 
    // or, it shouldn't be bound and should somehow only be updated if submit is good
    // ***************************************************************
    // async function fetchHabit() {
    //     let response = await fetch(`https://habithub-api.herokuapp.com/habit/habit/${h_id}`, {
    //         method: 'GET',
    //         headers: {
    //             'Accept': 'application.json',
    //             'Content-Type': 'application/json',
    //             'Authorization': 'BEARER ' + jwt
    //         }
    //     })

    //     if (!response.ok) {
    //         // set a problem message
    //         return
    //     } else {
    //         const data = response.json()
    //     }
    // }

</script>

<div class="parent {classs}">
    <!-- Insert Icon -->
    <span class="body-content"><h1>{name}</h1></span>
    <p>{description}</p>
    <div class="bottom">
        <div class="start">
            <i class='bx bxs-hot icon'></i>
            <span class="body-content">{streak} days!</span>
        </div>
        <div class="end">
            <PopUp icon="bx-edit" button_name="Edit" bind:showPopup={showEditPopup}>
                <EditHabit bind:jwt={jwt} bind:userID={userID} type="edit" submitText="Save" h_id={h_id} bind:h_description={description} bind:h_title={name} on:submitEvent={closePopup}/>
            </PopUp>
            <PopUp icon="bx-trash" button_name="Delete" showPopup="false">
                <!-- Put a "confirm delete" form here -->
            </PopUp>
        </div>
    </div>
    
</div>

<style lang="scss">
.parent {
    border-radius: $card-radius;
    margin: 0.5em 0;
    padding: 1em;
    box-shadow: $card-shadow;
    background-color: $white;
    min-width: 25em;
}

p {
    width: 100%;
}

h1 {
    font-size: 17px;
}

.flex {
    flex-grow: 1;
}

.dud-card {
    @extend .flex;
    visibility: hidden;
}

.bottom {
    display: flex;
    justify-content: space-between;
}

.start {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.3em;
    i {
        font-size: 20px;
        color: $yellow;
    }
}
</style>