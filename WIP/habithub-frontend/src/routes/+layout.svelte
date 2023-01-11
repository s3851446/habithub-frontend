<script>
  import "../app.scss";
  import Navbar from "../components/Navbar.svelte"
  import Footer from "../components/Footer.svelte"
  import Header from "../components/Header.svelte"
  import { onMount } from 'svelte'
 
  onMount(() => {
    const sidebar = document.querySelector(".sidebar"),
          toggle = document.querySelector(".toggle"),
          userPic = document.querySelector(".user-pic"),
          subMenuWrap = document.querySelector(".sub-menu-wrap")

    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("close")
    })

    userPic.addEventListener("click", () => {
      subMenuWrap.classList.toggle("close-menu")
    })

    console.log(userPic,subMenuWrap)
  })
  
</script>

<Header />
<Navbar />
<slot />
<Footer />
