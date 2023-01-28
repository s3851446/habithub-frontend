<script>
    import TextInput from './TextInput.svelte'
    import Button from './Button.svelte'

    export let type
    export let h_title
    export let h_description
    export let h_id
    export let submitText
    export let userID
    export let jwt

    let title
    let description

    // develop based on: https://javascript.info/formdata
    // & https://svelte.dev/repl/74685aa8b4374c4c8f395ce643fee7b6?version=3.48.0
    const handleSubmit = async e => {
        var ACTION_URL = 'https://habithub-api.herokuapp.com/habit/'
        var method = 'POST'
        if (type == 'new') ACTION_URL += `user/${userID}`
        if (type == 'edit') { 
            ACTION_URL += `habit/${h_id}`
            method = 'PUT'
        }

        const titleString = title.value
        const descriptionString = description.value

        let response = await fetch(ACTION_URL, {
            method: method,
            headers: {
                'Accept': 'application.json',
                'Content-Type': 'application/json',
                'Authorization': 'BEARER ' + jwt
            },
            body: JSON.stringify({
                title: titleString,
                description: descriptionString
            })
        })

        let result = await response.json()

        if (!result.ok) {
            // to-do display a 'something went wrong' msg
        }

        window.location.href = '/habits'
    }

    if (type == 'edit') {
        // title.value = h_title
        // description.value = h_description
    }
</script>

<div>
    <form id="form" class="habit-form" on:submit|preventDefault={handleSubmit}>
        <h2>{submitText}</h2>
        <TextInput classs="" bind:this={title} name="title" bind:value={h_title} placeholder="title" label="Title"/>
        <TextInput classs="description" bind:this={description} name="description" bind:value={h_description} placeholder="description" label="Description" />
        <div class="btn">
            <Button id="" on:click(handleSubmit)>{submitText}</Button>
        </div>
    </form>
</div>

<style lang="scss">
    form {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }
</style>