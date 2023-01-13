<script>
    import { jwt, loggedIn } from '../stores'
    import { beforeUpdate, onMount } from "svelte";
    export let id

    let logInOutText
    let logInOutUrl

    // do not remove this or the code breaks the {#key} has to stay as well -EW
    let loggedInVar
    loggedIn.subscribe((data) => { loggedInVar = data })

    beforeUpdate(() => {
    })

    onMount(() => {
        loggedIn.subscribe((value) => localStorage.setItem('loggedIn', value))

        updateLogout()

    })

    function updateLogout() {
        console.log("running updateLogout")
        const loginLink = document.getElementById('loginLink')
        const loginText = document.getElementById('loginText')
        const menuLinks = document.getElementById('menu-links')

        console.log(loginLink, loginText)

        const loggedInC = localStorage.getItem('loggedIn')
        console.log("loggedInC is: ", loggedInC)

        // would've thought login means show logout option but it just works like this
        // i do not understand -EW
        if (loggedInC) {
            logInOutUrl = '/login'
            logInOutText = 'Log In'
            menuLinks.classList.add('hidden')
        } else {
            logInOutUrl = '/logout'
            logInOutText = 'Log Out'
            menuLinks.classList.remove('hidden')
        }

        console.log('LogInOutText at onMount is: ', logInOutText)

        loginLink.setAttribute('href', logInOutUrl)
        loginText.innerHTML = logInOutText
    }


</script>

<!-- This component was created with the help of a YouTube tutorial.
https://youtu.be/bFvfqUMjvsA?list=PL4EfZpbcgnsDzLMCKqb1poI8m1Gbd_CXO -->
<nav class="sidebar close" id={id}>
    <header>
        <div class="image-text">
            <span class="image">
                <img src="./images/logo_app.png" alt="Logo">
            </span>
            <div class="text header-text">
                <span class="name">Habit Hub</span>
            </div>
        </div>
        <i class='bx bx-chevron-right toggle'></i>
    </header>
    <div class="menu-bar">
        { #key loggedInVar }
        <div class="menu">
            <ul class="menu-links" id="menu-links">
                <li class="nav-link">
                    <a href="/">
                        <i class='bx bx-home-alt icon'></i>
                        <span class="text nav-text">Dashboard</span>
                    </a>
                </li>
                <li class="nav-link">
                    <a href="/habits">
                        <i class='bx bx-list-check icon'></i>
                        <span class="text nav-text">Habits</span>
                    </a>
                </li>
                <li class="nav-link">
                    <a href="/statistics">
                        <i class='bx bx-line-chart icon'></i>
                        <span class="text nav-text">Statistics</span>
                    </a>
                </li>
                <li class="nav-link">
                    <a href="/settings">
                        <i class='bx bx-cog icon'></i>
                        <span class="text nav-text">Settings</span>
                    </a>
                </li>
                <li class="nav-link">
                    <a href="/guide">
                        <i class='bx bx-help-circle icon'></i>
                        <span class="text nav-text">Help/Guide</span>
                    </a>
                </li>
            
            </ul>
        </div>
        { /key }
        { #key loggedInVar }
        <div class="bottom-content">
            <ul class="menu-links">
                <li class="">
                    <a id="loginLink" href="/logout">
                        <i class='bx bx-log-out icon'></i>
                        <span id="loginText" class="text nav-text">Log Out</span>
                    </a>
                </li>
            </ul>
        </div>
        { /key }
    </div>
</nav>

<style>
    .sidebar {
        position: fixed;
        top: 10px;
        left: 10px;
        height: 100%;
        width: 250px;
        background: #313638;
        padding: 10px 14px;
        z-index: 100;
        color: #E8E9EB;
        border-radius: 6px;
        transition: all .5s ease;
    }

    .sidebar.close {
        width: 88px;
    }

    header {
        position: relative;
    }

    img {
        width: 40px;
        border-radius: 6px;
    }

    .image-text {
        display: flex;
        align-items: center;
    }

    .text {
        font-size: 16px;
        font-weight: 400;
        transition: all 0.4s ease;
        white-space: nowrap;
        opacity: 1;
    }

    .sidebar.close .text {
        opacity: 0;
    }

    .image {
        min-width: 60px;
        display: flex;
        align-items: center;
    }

    .header-text {
        display: flex;
        flex-direction: column;
    }

    .sidebar.close .toggle {
        transform: translateY(-50%);
    }

    .toggle {
        position: absolute;
        top: 50%;
        right: -25px;
        transform: translateY(-50%) rotate(180deg);
        height: 25px;
        width: 25px;
        background: #EF6461;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-size: 22px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    li {
        height: 50px;
        margin-top: 10px;
        list-style: none;
        display: flex;
        align-items: center;
    }

    .icon {
        font-size: 23px;
        color: #EF6461;
        min-width: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a {
        font-size: 16px;
        width: 100%;
        color: #E8E9EB;
        text-decoration: none;
        height: 100%;
        display: flex;
        align-items: center;
        border-radius: 6px;
        transition: all 0.4s ease;
    }

    a:hover{
        background: #E8E9EB;
        color: #313638;
    }

    .menu-bar {
        height: calc(100% - 50px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>