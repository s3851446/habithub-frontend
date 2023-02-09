<script>
    import Toast from "../../../components/Toast.svelte";
    import { onMount } from "svelte";
    // import { showToastNow } from '../../../components/Toast.svelte'
    let toast

    onMount(() => {
        toast.showToastNow(6000)
    })
</script>

<Toast bind:this={toast} message="message" description="description"></Toast>

