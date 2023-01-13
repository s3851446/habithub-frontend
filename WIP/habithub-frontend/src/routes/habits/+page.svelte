<script>
    import NewHabit from './../../components/NewHabit.svelte'
    import HabitCard from '../../components/HabitCard.svelte';
    import { validateToken } from './../../utils'
    import { onMount } from 'svelte'

    onMount(async () => {
        const validToken = await validateToken()
        if (!validToken) {
            window.location.href = '/login'
        }
    })

</script>


<div class="body">
    <h1>My Habits</h1>
    <NewHabit />
    <HabitCard name="My New Habit" description="This is the habit that I am going to do all the time" streak="2" h_id="some:j94k905630l00dn3"/>
</div>