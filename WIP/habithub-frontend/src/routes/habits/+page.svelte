<script>
    import NewHabit from './../../components/NewHabit.svelte'
    import { validateToken } from './../../utils.svelte'
    import { onMount } from 'svelte'

    onMount(() => {
        validateToken()
    })

</script>


<div class="body">
    <h1>I am the Habits page!</h1>
    <NewHabit></NewHabit>
</div>