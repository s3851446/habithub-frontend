<nav>
    <ul>
        <li>
            <a href="/" class="logo">
                <img src="./images/logo_app.png" alt=""/>
                <span class="nav-item">Habit Hub</span>
            </a>
        </li>
        <li>
            <a href="/">
                <i class="fa-solid fa-house"></i>
                <span class="nav-item">Dashboard</span>
            </a>
        </li>
        <li>
            <a href="/habits">
                <i class="fa-solid fa-list-check"></i>
                <span class="nav-item">Habits</span>
            </a>
        </li>
        <li>
            <a href="/statistics">
                <i class="fa-solid fa-chart-line"></i>
                <span class="nav-item">Statistics</span>
            </a>
        </li>
        <li>
            <a href="/settings">
                <i class="fa-solid fa-gears"></i>
                <span class="nav-item">Settings</span>
            </a>
        </li>
        <li>
            <a href="/guide">
                <i class="fa-solid fa-circle-info"></i>
                <span class="nav-item">Help/Guide</span>
            </a>
        </li>
        <li>
            <a href="/login" class="logout">
                <i class="fa-solid fa-right-from-bracket"></i>
                <span class="nav-item">Logout</span>
            </a>
        </li>
    </ul>
</nav>

<style>
    nav {
    outline: none;
    border: none;
    }

    a {
        text-decoration: none;
    }

    nav {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        height: 100%;
        background: #313638;
        width: 99px;
        overflow: hidden;
        transition: width 0.2s linear;
        box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
    }

    .logo{
        text-align: center;
        display: flex;
        transition: all 0.5s ease;
        margin: 10px 0 0 10px;
    }

    .logo img {
        width: 60px;
        height: 60px;
        border-radius: 10%;
    }

    .logo span {
        font-weight: bold;
        padding-left: 15px;
        font-size: 18px;
        text-transform: uppercase;
    }

    a {
        position: relative;
        color: #EF6461;
        font-size: 16px;
        display: table;
        width: 300px;
        padding: 10px;
    }

    .fa-solid {
        position: relative;
        width: 70px;
        height: 40px;
        top: 14px;
        font-size: 23px;
        text-align: center;
    }

    .nav-item {
        position: relative;
        top: 12px;
        margin-left: 20px;
    }

    a:hover {
        background: #E8E9EB;
    }

    nav:hover {
        width: 280px;
        transition: all 0.5s ease;
    }

    .logout {
        position: absolute;
        bottom: 0;
    }
</style>
