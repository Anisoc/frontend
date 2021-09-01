<script>
  import { goto } from "@roxi/routify";
  import { Button } from "attractions";
  import { MenuIcon as Menu } from "svelte-feather-icons";

  import { sideBar } from "../../logic/stores";

  const toggleBar = () => {
    sideBar.update((val) => (val ? 0 : 1));
  };

  let size = "45";
</script>

<div class="logo">
  <label for="logo" on:click={() => $goto("/")}>
    <img src="assets/logo2.png" alt="Logo" /></label
  >
</div>

<div class="bar">
  <div class="container">
    <Button round neutral on:click={() => toggleBar()}><Menu {size} /></Button>
  </div>
</div>

<style>
  .bar {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 8vh;
    background-color: transparent;
    z-index: 4;
  }

  .logo {
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 6;
  }

  .container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  img {
    max-width: calc(50px + 6vw);
    margin-top: 0.5vh;
    margin-right: 1vw;
  }
  @media (min-width: 1000px) {
    .bar {
      display: none;
    }
    .container {
      display: none;
    }
  }
</style>
