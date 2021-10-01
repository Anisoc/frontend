<script>
  import { goto, url } from "@roxi/routify";

  import { Tab } from "attractions";

  import {
    CalendarIcon as Events,
    BookIcon as Book,
    UserIcon as AboutUs,
    FeatherIcon as ContactUs,
    HomeIcon as Home,
  } from "svelte-feather-icons";

  import { fly } from "svelte/transition";
  export let value = window.location.pathname;

  $: {
    if (window.location.pathname) {
      value = window.location.pathname;
    }
  }

  let size = "24";
</script>

<div class="box" transition:fly={{ x: -200, duration: 300 }}>
  <div class="container">
    <div class="tabs" on:click>
      <div class="tab">
        <Tab bind:group={value} value="/" on:click={() => $goto("/")}>
          <div class="content">
            <Home {size} />
            <div class="text">Home</div>
          </div>
        </Tab>
      </div>
      <div class="tab">
        <Tab bind:group={value} value="/posts" on:click={() => $goto("/posts")}>
          <div class="content">
            <Book {size} />
            <div class="text">Posts</div>
          </div>
        </Tab>
      </div>
      <div class="tab">
        <Tab
          bind:group={value}
          value="/events"
          on:click={() => $goto("/events")}
        >
          <div class="content">
            <Events {size} />
            <div class="text">Events</div>
          </div>
        </Tab>
      </div>
      <div class="tab">
        <Tab
          bind:group={value}
          value="/about-us"
          on:click={() => $goto("/about-us")}
        >
          <div class="content">
            <AboutUs {size} />
            <div class="text">About us</div>
          </div>
        </Tab>
      </div>
      <div class="tab">
        <Tab
          bind:group={value}
          value="/contact-us"
          on:click={() => $goto("/contact-us")}
        >
          <div class="content">
            <ContactUs {size} />
            <div class="text">Contact us</div>
          </div>
        </Tab>
      </div>
    </div>
  </div>
</div>

<style>
  .tabs {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-left: 0.5em;
  }
  .content {
    display: flex;
    width: 200px;
  }

  .tab {
    margin-bottom: 0.8rem;
  }

  .text {
    margin-left: 1rem;
  }

  .box {
    position: fixed;
    top: 0vh;
    left: 0px;
    width: 250px;
    height: 100vh;
    background-color: var(--side-bar);
    border-left: 1px ridge var(--border);
    z-index: 3;
    display: flex;
    justify-content: flex-start;
  }
  .container {
    margin: 2vw 0.7vw;
    margin-top: calc(20px + 6.18vh);
  }
  @media (min-width: 1000px) {
    .box {
      position: fixed;
      top: 0vh;
      left: 0px;
      height: calc(45px + 3vh);
      width: 100vw;
      border-left: 1px ridge var(--border);
      display: flex;
      justify-content: center;
    }

    .tabs {
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-start;
      flex-direction: row;
      margin-left: 0.5em;
    }

    .tabs > div {
      margin: 0 6px;
    }

    .container {
      margin: 3vh 0.7vw;
      /* width: calc(70px + 10vw); */
    }

    .content {
      display: flex;
      width: calc(60px + 5.9vw);
    }
  }
</style>
