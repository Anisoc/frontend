<script>
  import {
    FacebookIcon as Fb,
    TwitterIcon as Twitter,
    UserIcon as AboutUs,
    FeatherIcon as ContactUs,
  } from "svelte-feather-icons";

  import { Button } from "attractions";

  let size = "28";
</script>

<div class="content">
  <p>aaaaaaaaaa</p>
</div>
<div class="social">
  <div>
    <Button filled>
      <Fb {size} />
    </Button>
  </div>
  <div>
    <Button filled>
      <Twitter {size} />
    </Button>
  </div>
  <div>
    <Button filled>
      <img alt="discord" src="/assets/discord.png" width={size} />
    </Button>
  </div>
</div>

<style>
  .social {
    display: flex;
  }
  .social > div {
    margin: 6px;
  }
</style>
