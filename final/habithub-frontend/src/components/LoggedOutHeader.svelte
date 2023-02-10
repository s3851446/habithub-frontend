<script>
  import Button from "./Button.svelte";
  import { goto } from "$app/navigation";

  let showMenu = false;

  function signupButtonClick() {
    goto("/signup");
  }

  function toggleMenu() {
    showMenu = !showMenu;
  }
</script>

<nav>
  <div class="hamburger" on:click={toggleMenu} on:keydown={toggleMenu}>
    {#if showMenu}
      <p><i class="bx bx-x" /></p>
    {:else}
      <p><i class="bx bx-menu-alt-left" /></p>
    {/if}
  </div>
  <div class="links {showMenu ? 'active' : ''}">
    <ul>
      <li><a href="/">About Us</a></li>
      <li><a href="/contactUs">Contact Us</a></li>
      <li><a href="/referenceList">Reference List</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  </div>
  <div class="buttons">
    <Button on:click={signupButtonClick}>Sign Up</Button>
  </div>
</nav>

<style lang="scss">
  nav {
    height: 70px;
    width: 100%;
    border-bottom: solid 0.01px $light-grey;
    padding: 10px 2%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    flex-direction: row wrap;
    column-gap: 25px;
    position: sticky;
    z-index: 1000;
    box-shadow: $card-shadow;
    @media only screen and (max-width: 900px) {
      justify-content: space-between;
    }
  }

  .hamburger {
    display: none;
    cursor: pointer;
    @media only screen and (max-width: 900px) {
      display: block;
    }
    .bx {
      font-size: 30px;
      color: $black;
    }
    p {
      line-height: 0;
      margin: 0;
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    gap: 25px;
    li {
      list-style: none;
      &:hover a {
        color: $red;
      }
    }
    a {
      text-decoration: none;
      color: $black;
    }
  }

  .buttons {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }

  .links {
    display: flex;
    @media only screen and (max-width: 900px) {
      display: none;
    }
  }

  .active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: linear-gradient(to bottom right, #fdf4ee, #fcf6ee, #fdf1ed);
    height: calc(100vh - 70px);
    border-radius: 0 6px 6px 6px;
    width: 50%;
    box-shadow: $card-shadow;
    z-index: 1001;
    ul {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: flex-start;
      align-items: center;
    }
    li {
      text-align: center;
      padding: 20px;
      width: 100%;
      &:hover {
        background: $red;
        a {
          color: $white;
        }
      }
    }
    @media only screen and (min-width: 900px) {
      display: none;
    }
  }
</style>
