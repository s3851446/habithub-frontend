<script>
    import EditHabit from '../../components/EditHabit.svelte'
    import HabitCard from '../../components/HabitCard.svelte'
    import Button from '../../components/Button.svelte'
    import { redirectToLocation } from './../../utils'
    import { validateToken } from './../../utils'
    import { onMount } from 'svelte'

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
        <span class="bigger">+</span> Add Habit
    </Button>
    <div class="card-container">
        <HabitCard classs="flex" name="My New Habit" description="This is the habit that I am going to do all the time" streak="2" h_id="some:j94k905630l00dn3"/>
        <HabitCard classs="flex" name="My New Habit" description="This is the habit that I am going to do all the time" streak="2" h_id="some:j94k905630l00dn3"/>
        <HabitCard classs="flex" name="My New Habit" description="This is the habit that I am going to do all the time" streak="2" h_id="some:j94k905630l00dn3"/>
        <HabitCard classs="dud-card" name="" description="" streak="" h_id="" />
    </div>
</div>

<style lang="scss">
    .card-container {
        display: flex;
        flex-wrap: wrap;
        align-content: stretch;
        gap: 1em;
    }
</style>