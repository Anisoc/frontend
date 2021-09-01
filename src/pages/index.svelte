<script>
  import {
    FacebookIcon as Fb,
    TwitterIcon as Twitter,
    TvIcon as Events,
    UsersIcon as Meetup,
    MicIcon as Karaoke,
  } from "svelte-feather-icons";

  import { Button, Card, Headline, Subhead } from "attractions";

  let size = "28";
  let cardSize = "40";
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

<div class="cards">
  <div>
    <Card>
      <div class="but">
        <div class="butbac">
          <div>
            <Events size={cardSize} />
          </div>
        </div>
      </div>
      Weekly anime screenings
    </Card>
  </div>
  <div>
    <Card>
      <div class="but">
        <div class="butbac">
          <div>
            <Meetup size={cardSize} />
          </div>
        </div>
      </div>
      Social gatherings
    </Card>
  </div>
  <div>
    <Card>
      <div class="but">
        <div class="butbac">
          <div>
            <Karaoke size={cardSize} />
          </div>
        </div>
      </div>
      Karaoke!
    </Card>
  </div>
</div>

<div class="social">
  <div>
    <Button filled href="https://www.facebook.com/groups/299013009165/">
      <Fb {size} />
    </Button>
  </div>
  <div>
    <Button filled>
      <Twitter {size} />
    </Button>
  </div>
  <div>
    <Button filled href="https://discord.gg/DjZ5rHXzbH">
      <img alt="discord" src="/public/assets/discord.png" width={size} />
    </Button>
  </div>
</div>

<style>
  .content {
    display: flex;
    justify-content: center;
    width: calc(200px + 35vw);
  }
  .cards {
    display: flex;
    justify-content: space-between;
    width: calc(200px + 35vw);
  }
  .social {
    margin-top: 3vh;
    display: flex;
    justify-content: center;
  }
  .social > div {
    margin: 6px;
    margin-top: 0;
  }

  .cards > div {
    display: flex;
    justify-content: center;
    margin-top: 0;
    margin: 6px;
  }
  .but {
    display: flex;
    justify-content: center;
    margin-bottom: 2vw;
  }

  .butbac {
    background: var(--main);
    border: 1vw solid var(--main);
    border-radius: 30px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.14), 0 1px 5px rgba(0, 0, 0, 0.12);
  }

  .butbac > div {
    filter: invert(93%) sepia(0%) saturate(7500%) hue-rotate(70deg)
      brightness(107%) contrast(110%);
  }
</style>
