<script>
  import Header from "@components/layout/Header.svelte";
  import Sidebar from "@components/layout/Sidebar.svelte";
  import { clickOutside } from "../events/clickOutside.svelte";
  import { sideBar } from "../logic/stores";

  const hideSideBar = async () => {
    if ($sideBar) sideBar.update((val) => 0);
  };
</script>

<div class="desktop">
  <Header />
  <Sidebar />
</div>
<div class="mobile" use:clickOutside on:click_outside={hideSideBar}>
  <Header />
  {#if $sideBar}
    <Sidebar on:click={hideSideBar} />
  {/if}
</div>
<div class="page x-grid">
  <slot />
</div>

<style>
  .page {
    margin-top: 10vh;
  }

  /* Desktops */
  @media screen and (min-width: 1000px) {
    .mobile {
      display: none;
    }

    .desktop {
      display: initial;
    }
  }

  /* Mobile screens */
  @media screen and (max-width: 1000px) {
    .mobile {
      display: initial;
    }

    .desktop {
      display: none;
    }
  }
</style>
