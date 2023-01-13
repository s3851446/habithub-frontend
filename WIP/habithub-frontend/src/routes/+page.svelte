<script>
    import Button from "../components/Button.svelte"
    import { onMount } from 'svelte'
    import { validateToken } from "../utils"
    import { signout } from "../utils";
    import { redirectToLocation } from "../utils";

    onMount(async () => {
        let validToken = false;
        validToken = await validateToken()
        if (!validToken) {
            signout()
            redirectToLocation('/login')
        }
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

