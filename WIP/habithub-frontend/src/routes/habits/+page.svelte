<script>
    import NewHabit from './../../components/NewHabit.svelte'
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
    <h1>I am the Habits page!</h1>
    <NewHabit></NewHabit>
</div>