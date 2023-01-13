<script>
    export let name
    export let description
    export let h_id
    export let streak
    export let classs

    import Button from './Button.svelte'
    import { redirectToLocation } from './../utils'

    const redirect = (route) => {
        const location = route + h_id
        redirectToLocation(location)
    }

</script>

<div class="parent {classs}">
    <!-- Insert Icon -->
    <span class="body-content">{name}</span>
    <p>{description}</p>
    <div class="bottom">
        <div class="start">
            <i class='bx bxs-hot icon'></i>
            <span class="body-content">{streak} days!</span>
        </div>
        <div class="end">
            <Button on:click={() => {redirect('/edit/')}}>Edit</Button>
            <Button on:click={() => {redirect('/delete/')}}>Delete</Button>
        </div>
    </div>
    
</div>

<style>
.parent {
    border: 0.1em solid #E4B363;
    /* border: 0.1em solid #EF6461; */
    border-radius: 1em;
    margin: 0.5em 0;
    padding: 1em;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: #fdf4ee;
    /* max-width: 25em; */
    min-width: 25em;
}

p {
    width: 100%;
}

i {
    font-size: 1.5em;
}

.flex, .dud-card{
    flex-grow: 1;
}

.dud-card {
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
}
</style>