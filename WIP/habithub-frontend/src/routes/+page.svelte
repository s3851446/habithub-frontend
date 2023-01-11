<script>
    import Button from "../components/Button.svelte"
    import { onMount } from 'svelte'

    onMount(() => {
        const button = document.querySelector("button")

        button.addEventListener("click", () => {
        })

        console.log(button)
    })

</script>

<div class="body">
    <h1>Hello, Name LastName!</h1>
    <p>You have completed <i>4 out of 5</i> of today's 
    scheduled habits. Good job! Keep going!</p>
    <Button>
        <i class='bx bx-plus'></i>
        Add Habit
    </Button>
</div>

