<script>
    export let id;
</script>

<button on:click id={id}>
    <slot></slot>
</button>



<style lang="scss">
    button {
        border: none;
        background-image: radial-gradient(#EF6461, #E4B363);
        padding: 10px 35px;
        border-radius: 50px;
        color: #fff;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        font-size: 14px;
        &:hover {
            font-size: 16px;
        }
        &:focus {
             background: #EF6461;
        color: #fff;
        border: none;
        }
    }

    slot {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
</style>