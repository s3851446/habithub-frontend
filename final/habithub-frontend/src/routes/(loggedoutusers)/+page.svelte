<script>
  import Button from "../../components/Button.svelte";
</script>

<section class="landing">
  <div class="landing-txt">
    <h1>
      <b>Transform</b> your habits, <br />
      organise <b>your life</b> with Habit Hub!
    </h1>
    <p>
      Empower your growth,<br />Track your progress, achieve your goals!
    </p>
    <Button>Get Started</Button>
  </div>
  <div class="img">
    <img src="./images/landing.png" alt="People doing good habits" />
  </div>
</section>
<section class="section1">
  <div class="point1">
    <h1>Intuitive Interface</h1>
    <p>
      With Habit Hub, say goodbye to cluttered interfaces and hello to a sleek
      and intuitive app designed to help you form good habits. Our beautiful
      animations featuring lovable characters will motivate you on your journey
      to reaching your goals. Get started today and experience the ease of
      habit-forming with Habit Hub.
    </p>
  </div>
  <div class="point2">
    <h1>Track Your Progress</h1>
    <p>
      Experience the satisfaction of watching your habits grow with Habit Hub's
      statistics page! Keep track of your streaks and see your progress over
      time with a visual representation of your hard work. See just how far
      you've come and stay motivated to continue forming those positive habits.
      Join the habit-forming community and see the difference for yourself!
    </p>
  </div>
  <div class="point3">
    <h1>Featuring Dark Mode</h1>
    <p>
      Embrace the Dark: Experience the ease of navigating through Habit Hub with
      our sleek and stylish Dark Mode option. Give your eyes a break from harsh
      screens and enjoy a more comfortable and visually appealing tracking
      journey.
    </p>
  </div>
  <div class="point4">
    <h1>Customise your Journey</h1>
    <p>
      Unleash Your Unique Potential with Habit Hub's Personalized Habits. Say
      goodbye to generic habit tracking apps and hello to a tailored experience
      that caters to your specific goals and aspirations. Habit Hub gives you
      the power to create and customize your own habits, ensuring that you are
      on the right track towards reaching your full potential. Start taking
      control of your life with Habit Hub today!
    </p>
  </div>
</section>

<style lang="scss">
  @mixin padding {
    padding: 40px;
  }

  .landing {
    height: calc(100vh - 70px);
    margin-top: 70px;
    @include padding;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    h1 {
      font-size: 40px;
      line-height: 1.7em;
      b {
        color: $red;
      }
    }
    p {
      font-size: 20px;
      margin-bottom: 30px;
    }
  }

  .landing-txt {
    margin: auto 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 40%;
  }

  .img {
    width: 50%;
    img {
      width: 700px;
    }
  }

  .section1 {
    @include padding;
  }
</style>
