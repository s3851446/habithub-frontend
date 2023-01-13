<script>
    import NewHabit from './../../components/NewHabit.svelte'
    import HabitCard from '../../components/HabitCard.svelte'
    import Button from '../../components/Button.svelte'
    import { validateToken } from './../../utils'
    import { onMount } from 'svelte'
    import { redirectToLocation } from './../../utils'

    onMount(async () => {
        const validToken = await validateToken()
        if (!validToken) {
            window.location.href = '/login'
        }
    })

    const newHabit = () => {
        redirectToLocation('/edit/new')
    }

</script>


<div class="body">
    <h1>My Habits</h1>
    <Button id="newHabit" on:click={newHabit}>
        <!-- Use icon with proper flex when can be bothered -->
        <!-- <i class='bx bx-plus icon'></i> -->
        <span class="bigger">+</span> Add Habit</Button>
    <NewHabit />
    <div class="card-container">
        <HabitCard classs="flex" name="My New Habit" description="This is the habit that I am going to do all the time" streak="2" h_id="some:j94k905630l00dn3"/>
        <HabitCard classs="flex" name="My New Habit" description="This is the habit that I am going to do all the time" streak="2" h_id="some:j94k905630l00dn3"/>
        <HabitCard classs="flex" name="My New Habit" description="This is the habit that I am going to do all the time" streak="2" h_id="some:j94k905630l00dn3"/>
        <HabitCard classs="dud-card" name="" description="" streak="" h_id="" />
    </div>
</div>

<style>
    .card-container {
        display: flex;
        flex-wrap: wrap;
        align-content: stretch;
        gap: 1em;
    }
</style>