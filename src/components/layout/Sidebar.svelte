<script>
  import { goto } from "@roxi/routify";

  import { Tab } from "attractions";
  import {
    CalendarIcon as Events,
    BookIcon as Book,
    UserIcon as AboutUs,
    FeatherIcon as ContactUs,
  } from "svelte-feather-icons";

  import { fly } from "svelte/transition";

  let value = null;
  let size = "24";
</script>

<div class="box" transition:fly={{ x: -200, duration: 300 }}>
  <div class="container">
    <div class="tabs">
      <div class="tab">
        <Tab
          bind:group={value}
          on:change
          value="Posts"
          on:click={() => $goto("/posts")}
        >
          <div class="content">
            <Book {size} />
            <div class="text">Posts</div>
          </div>
        </Tab>
      </div>
      <div class="tab">
        <Tab
          bind:group={value}
          on:change
          value="Events"
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
          on:change
          value="AboutUs"
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
          on:change
          value="ContactUs"
          on:click={() => $goto("/contact-us")}
        >
          <div class="content">
            <ContactUs {size} />
            <div class="text">Contacts us</div>
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
    margin-top: 8.18vh;
  }
  @media (min-width: 1000px) {
    .box {
      position: fixed;
      top: 0vh;
      left: 0px;
      height: 10vh;
      width: 100vw;
      background-color: transparent;
      border-left: 1px ridge var(--border);
      display: flex;
      justify-content: center;
    }

    .tabs {
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-start;
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
      width: calc(60px + 7vw);
    }
  }
</style>
