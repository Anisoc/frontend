<script>
  import { goto } from "@roxi/routify";
  import { Button } from "attractions";
  import { MenuIcon as Menu } from "svelte-feather-icons";

  import { sideBar } from "@stores";

  const toggleBar = () => {
    sideBar.update((val) => !val);
  };

  let size = "45";
</script>

<div class="bar">
  <label for="logo" on:click={() => $goto("/")}>
    <img src="/assets/logo2.png" alt="Logo" /></label
  >
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
    background-color: var(--primary);
  }

  .container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    margin-top: 0.5vh;
    margin-right: 1vw;
    float: right;
  }
</style>
