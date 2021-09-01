<script>
  import {
    FacebookIcon as Fb,
    TwitterIcon as Twitter,
    UserIcon as AboutUs,
    FeatherIcon as ContactUs,
  } from "svelte-feather-icons";

  import { Button, Card, Headline, Subhead } from "attractions";

  let size = "28";
</script>

<div class="content">
  <Card outline>
    <Headline>Animate & Animation Society</Headline>
    <Subhead>The University of Edinburgh</Subhead>
    <p>
      Dedicated to sharing Japanese animation – anime – with students of the
      university, we provide weekly showings suitable for both complete
      newcomers as well as veterans of the hobby.
    </p>
  </Card>
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
  .content {
    display: flex;
    justify-content: center;
    width: calc(200px + 35vw);
  }
  .social {
    margin-top: 3vh;
    display: flex;
    justify-content: center;
  }
  .social > div {
    margin: 6px;
  }

  .content > div {
    display: flex;
    justify-content: center;
  }
</style>
