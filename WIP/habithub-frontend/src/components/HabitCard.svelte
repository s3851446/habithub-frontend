<script>
    export let name
    export let description
    export let h_id
    export let streak

    import Button from './Button.svelte'
</script>

<div class="parent">
    <span class="body-content">{name}</span>
    <p>{description}</p>
    <span class="body-content">{streak} days!</span>
    <Button>Edit</Button>
    <Button>Delete</Button>
</div>

<style>
.parent {
    border: 0.1em solid #E4B363;
    /* border: 0.1em solid #EF6461; */
    border-radius: 1em;
    margin: 0.5em 0;
    padding: 1em;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: #fdf4ee;
}
</style>