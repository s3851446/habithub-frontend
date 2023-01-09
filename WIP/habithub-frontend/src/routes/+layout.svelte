<script>
  import "../app.scss";
  import Navbar from "../components/Navbar.svelte"
  import Footer from "../components/Footer.svelte"
  import { onMount } from 'svelte'
 
  onMount(()=>{
    const sidebar = document.querySelector(".sidebar"),
          toggle = document.querySelector(".toggle")

    toggle.addEventListener("click", ()=>{
      sidebar.classList.toggle("close")
    })
  })
  
</script>

<Navbar />
<slot />
<Footer />
