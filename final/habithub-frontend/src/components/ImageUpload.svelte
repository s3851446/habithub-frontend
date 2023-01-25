<script>
    let file = null;

    function handleFileUpload(){
        //code for handling file upload
    }

</script>

<div class="input_container">
    <label for="file" class="custom-file-upload">Upload profile picture</label>
    <input type="file" id="file" bind:value={file}>
</div>



<style lang=scss>
    .input_container {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        gap: 0;
        transition: $trans-05;
    }

    input[type="file"] {
    visibility: hidden;
    }
    
    .custom-file-upload {
        cursor: pointer;
        display: inline-block;
        padding: 8px 12px;
        border: 2px solid $orange;
        border-radius: 4px;
    }
</style>