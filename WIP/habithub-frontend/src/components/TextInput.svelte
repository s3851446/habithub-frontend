<script>
    export let id
    export let value
    export let name
    export let placeholder
    export let classs
    export let label
</script>

<div class="parent {classs}">
    <label for={name}>{label}</label>
    <input type="text" id={id} value={value} name={name} placeholder={placeholder} class="input">
</div>

<style>
.input {
    font-family: "Questrial", sans-serif;
    padding: 0.3em;
    border-radius: 0.5em;
    border-width: 0.1em;
}

.description {
    width: 100%;
}

.description>input {
    width: 100%;
    max-width: 60em;
    min-width: 11.5em;
    height: 3em;
}

label {
    display: block;
    margin-bottom: 0.2em;
}

div.parent {
    margin-bottom: 0.5em;
    margin-top: 0.5em;
}
</style>