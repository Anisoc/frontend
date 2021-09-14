<script>
  import {
    FacebookIcon as Fb,
    TwitterIcon as Twitter,
    TvIcon as Events,
    UsersIcon as Meetup,
  } from "svelte-feather-icons";

  import { Button, Card, Headline, Subhead } from "attractions";

  let size = "28";
  let cardSize = "40";
</script>

<div class="content">
  <Card outline>
    <Headline>Anime & Animation Society</Headline>
    <Subhead>The University of Edinburgh</Subhead>
    <p>
      The Anime and Animation society is an appreciation society for all
      Japanese (and inspired) media, primarily anime. We want to provide a warm
      community and a chill space with both relaxing and out-there anime. With
      weekly online screenings (and in-person casual meet-ups), we hope to give
      you a good variety of shows to explore and an opportunity to make new
      friends and discover all things anime and manga! We have many upcoming
      events throughout the year, primarily at Halloween and Christmas, and
      smaller events will be scattered in both semesters, covering a range of
      activities. In the past, we've done everything from bowling to ice-skating
      to karaoke to bubble tea mixing!
    </p>
    <p>
      We know everyone has been through a rough time with COVID, and we as a
      society want to continue to be a safe place where everyone comes to relax.
      As such, we’re hosting screenings online for semester 1, and doing a mix
      of virtual and IRL events over this coming year. All our in-person events
      will follow COVID safety guidelines - sanitiser, facemasks, and social
      distancing when indoors.
    </p>
    <p>
      We screen a variety of genres throughout the year, so that we can make
      sure there’s something for everyone; from action shounen shows, to
      rom-coms, to out-there sci-fi, we watch it all, so come on down to our
      discord group!
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
</div>

<div class="social">
  <div>
    <Button filled href="https://www.facebook.com/groups/299013009165/">
      <Fb {size} />
    </Button>
  </div>
  <div>
    <Button filled href="https://twitter.com/anisoced">
      <Twitter {size} />
    </Button>
  </div>
  <div>
    <Button filled href="https://discord.gg/DjZ5rHXzbH">
      <img alt="discord" src="assets/discord.png" width={size} />
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
    justify-content: space-evenly;
    flex-wrap: wrap;
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
    border: calc(10px + 1vw) solid var(--main);
    border-radius: 300vw;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.14), 0 1px 5px rgba(0, 0, 0, 0.12);
  }

  .butbac > div {
    filter: invert(93%) sepia(0%) saturate(7500%) hue-rotate(70deg)
      brightness(107%) contrast(110%);
  }
</style>
