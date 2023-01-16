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

<style lang="scss">
.input {
    font-family: "Questrial", sans-serif;
    padding: 0.3em;
    box-shadow: none;
    border:none;
    border: 0.1em solid #fff;
    border-radius: 0.5em;
    &:hover, &:focus, &:focus-visible {
        border-color: #ccc;
        box-shadow: inset rgba(0, 0, 0, 0.14) 0px 0px 8px;
    }
}

.description {
    width: 100%;
    input {
        width: 100%;
        max-width: 60em;
        min-width: 11.5em;
        height: 3em;
    }
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