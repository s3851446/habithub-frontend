<script>
    export let id
</script>

<!-- This component was created with the help of a YouTube tutorial.
https://youtu.be/ybXulmeilFM -->
<nav id={id}>
    <div class="icon">
        <a href="/"><i class='bx bx-bell'></i></a>
    </div>
    <div class="user-pic">
        <i class='bx bxs-user profile'></i>
    </div>
    <div class="sub-menu-wrap close-menu">
        <div class="sub-menu">
            <div class="user-info">
                    <i class='bx bxs-user'></i>
                <h2>Name LastName</h2>
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
        border-bottom: solid 0.01px #A8A8A8;
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
        background-color: #A8A8A8;
        border-radius: 100%;
        @include flex;
        justify-content: center;
        cursor: pointer;
    }

    i {
        font-size: 20px;
        color: #EF6461;
    }

    .arrow {
        color: #313638;
        font-size: 20px;
        transition: all 0.5s ease;
    }

    .icon i {
        font-size: 27px;
    }

    .icon a:hover i {
        color: #E4B363;
    }

    .profile {
        font-size: 35px;
        color: #E8E9EB;
    }

    .sub-menu-wrap {
        position: absolute;
        top: 100%;
        right: 1.5%;
        width: 240px;
        z-index: 101;
        max-height: 400px;
        overflow: hidden;
        transition: max-height 0.5s ease;
    }

    .sub-menu-wrap.close-menu {
        max-height: 0px;
    }

    .sub-menu {
        background: #E8E9EB;
        padding: 20px;
        margin: 10px;
        border-radius: 6px;
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
        transition: all 0.5s ease;
    }

    .user-info i {
        margin-right: 15px;
    }

    .sub-menu-link {
        @include flex;
        text-decoration: none;
        color: #313638;
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
</style>