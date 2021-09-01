<script>
  import Header from "../components/layout/Header.svelte";
  import Sidebar from "../components/layout/Sidebar.svelte";

  import { sideBar } from "@stores";

  const hideSideBar = async () => {
    sideBar.update((val) => false);
  };
</script>

<Header />
<div class="desktop"><Sidebar /></div>
<div class="mobile" on:click={hideSideBar}>
  {#if $sideBar}
    <Sidebar />
  {/if}
</div>
<div class="page x-grid" on:click={hideSideBar}>
  <slot />
</div>

<style>
  .page {
    margin-top: 10vh;
  }

  /* Desktops */
  @media screen and (min-width: 1200px) {
    .mobile {
      display: none;
    }

    .desktop {
      display: initial;
    }
  }

  /* Mobile screens */
  @media screen and (max-width: 1200px) {
    .mobile {
      display: initial;
    }

    .desktop {
      display: none;
    }
  }
</style>
