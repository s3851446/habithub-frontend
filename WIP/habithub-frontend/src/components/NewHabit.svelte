<script>
    // develop based on: https://javascript.info/formdata
    // & https://svelte.dev/repl/74685aa8b4374c4c8f395ce643fee7b6?version=3.48.0
    const handleSubmit = async e => {
        const ACTION_URL = e.target.action

        const formData = new FormData(e.target)
        const data = new FormData(form)

        let response = await fetch(ACTION_URL, {
            method: 'POST',
            body: data
        })

        let result = await response.json()

        // DO SOMETHING WITH THE RESPONSE
    }
</script>

<div>
    <form id="form" class="habit-form" action="https://habithub-backend.herokuapp.com/habit" on:submit|preventDefault={handleSubmit}>
        <label for="title">Title</label>
        <input type="text" name="title" placeholder="Title">
        <label for="description">Description</label>
        <input type="text" name="description" placeholder="description">
        <input type="submit" value="Add habit">
    </form>
</div>

<style>

</style>