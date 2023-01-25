<script>
    import {slide} from "svelte/transition"
    import Button from "./Button.svelte";
    let showPopup = false;

    function togglePopup() {
        showPopup = !showPopup;
    }

     function handleKeydown(event) {
        if (event.keyCode === 13 || event.keyCode === 32) {
            togglePopup();
        }
    }
</script>

<Button on:click={togglePopup}>
    <i class='bx bx-edit' ></i>
    Edit Profile
</Button>

{#if showPopup}
    <div class="popup-wrapper" transition:slide={{duration: 300, y: -50}}>
        <div class="popup">
            <div class="btn" on:click={togglePopup} on:keydown={handleKeydown}>
                <i class='bx bx-x'></i>
            </div>
            <div class="slot">
                <slot></slot>
            </div>
        </div>
    </div>
{/if}

<style lang="scss">
    .popup-wrapper {
        z-index: 4000;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(5px);
    }

    .popup {
        width: 80%;background-image: linear-gradient(
            to bottom right,
            #fdf4ee,
            #fcf6ee,
            #fdf1ed,
            $light-grey
        );
        background-attachment: fixed;
        padding: 20px;
        border-radius: $card-radius;
        position: relative;
        .btn {
            cursor: pointer;
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 5px;
            border-radius: $card-radius;
            transition: $trans-05;
            i {
                font-size: 22px;
                color: $black;
            }
            &:hover {
                background: $red;
                i {
                    color: $white;
                }
            }
        }
    }

    .slot {
        margin: 30px 0 30px 0;
    }
</style>
