<script>
    export let id
    import { onMount } from 'svelte'

    onMount(() => {
        loadProfile()
        loadUserData()
    })

    async function loadProfile() {
        var fetchURL = 'https://habithub-api.herokuapp.com/pic/' + localStorage.getItem('userID')
        console.log("fetchurl: ", fetchURL)
        const picResponse = await fetch (fetchURL, {
            method: 'GET',
            headers: {
                'Accept': 'application.json',
                'Content-Type': 'application/json'
            }
        })

        const data = await picResponse.json()
        const picImg = document.getElementById('pic-img')
        const picIcon = document.getElementById('pic-icon')

        if (picResponse.ok) {
            picImg.src = `data:${data.pic.mimetype};base64,${data.pic.buffer64}`
            picImg.style.display = "block"
            picIcon.style.display = "none"
        }
    }

    async function loadUserData() {
        const fetchURL = 'https://habithub-api.herokuapp.com/user/' + localStorage.getItem('userID')

        const response = await fetch(fetchURL, {
        method: 'GET',
        headers: {
          'Accept': 'application.json',
          'Content-Type': 'application/json',
          'Authorization': 'BEARER ' + localStorage.getItem('jwt')
        }
      })
      
      const data = await response.json()

      document.getElementById('name').innerHTML = `${data.firstName} ${data.lastName}`
    }

    

</script>

<!-- This component was created with the help of a YouTube tutorial.
https://youtu.be/ybXulmeilFM -->
<nav id={id}>
    <div class="icon">
        <a href="/"><i class='bx bx-bell'></i></a>
    </div>
    <div class="user-pic" id="user-pic">
        <i id="pic-icon" class='bx bxs-user profile'></i>
        <img id="pic-img" src="" alt="user-avatar">
    </div>
    <div class="sub-menu-wrap close-menu">
        <div class="sub-menu">
            <div class="user-info">
                    <i class='bx bxs-user'></i>
                <h2 id="name">Name LastName</h2>
            </div>
            <hr />
            <a href="/settings" class="sub-menu-link">
                <i class='bx bx-edit img'></i>
                <p>Edit Profile</p>
                <i class='bx bx-chevron-right arrow'></i>
            </a>
            <a href="/settings" class="sub-menu-link">
                <i class='bx bx-cog img'></i>
                <p>Settings</p>
                <i class='bx bx-chevron-right arrow'></i>
            </a>
            <a href="/guide" class="sub-menu-link">
                <i class='bx bx-help-circle img'></i>
                <p>Help/Guide</p>
                <i class='bx bx-chevron-right arrow'></i>
            </a>
            <a href="/logout" class="sub-menu-link">
                <i class='bx bx-log-out img'></i>
                <p>Logout</p>
                <i class='bx bx-chevron-right arrow'></i>
            </a>
        </div>
    </div>
</nav>

<style lang="scss">
    @mixin flex {
        display: flex;
        align-items: center;
    }

    nav {
        height: 80px;
        width: 100%;
        border-bottom: solid 0.01px $light-grey;
        padding: 10px 2%;
        @include flex;
        justify-content: flex-end;
        position: relative;
        flex-direction: row;
        column-gap: 25px;
    }

    .user-pic {
        width: 60px;
        height: 60px;
        background-color: $dark-grey;
        border-radius: 100%;
        @include flex;
        justify-content: center;
        cursor: pointer;
    }

    i {
        font-size: 20px;
        color: $red;
    }

    .arrow {
        color: $black;
        font-size: 20px;
        transition: $trans-05;
    }

    .icon i {
        font-size: 27px;
    }

    .icon a:hover i {
        color: $yellow;
    }

    .profile {
        font-size: 35px;
        color: $light-grey;
    }

    .sub-menu-wrap {
        position: absolute;
        top: 100%;
        right: 1.5%;
        width: 240px;
        z-index: 101;
        max-height: 400px;
        overflow: hidden;
        transition: $trans-05;
    }

    .sub-menu-wrap.close-menu {
        max-height: 0px;
    }

    .sub-menu {
        background: $light-grey;
        padding: 20px;
        margin: 10px;
        border-radius: $card-radius;
        box-shadow: $card-shadow;
    }

    .user-info {
        @include flex;
    }

    h2 {
        font-size: 15px;
        margin-bottom: 0;
    }

    p {
        margin-bottom: 0;
        width: 100%;
        transition: $trans-05;
    }

    .user-info i {
        margin-right: 15px;
    }

    .sub-menu-link {
        @include flex;
        text-decoration: none;
        color: $black;
        margin: 12px 0;
        &:hover {
            p {
                font-weight: bolder;
            }
            .arrow {
            transform: translateX(5px);
        }
        }
    }

    .img {
        margin-right: 15px;
    }

    hr {
        margin: 15px 0 10px;
    }

    #pic-img {
        width: 60px;
        height: 60px;
        border-radius: 100%;
        display: none;
    }
</style>