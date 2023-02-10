<script>
  import Button from "../../components/Button.svelte";
</script>

<div class="landing">
  <div class="landing-txt">
    <h1>
      <b>Transform</b> your habits, <br />
      <b>your life</b> with Habit Hub!
    </h1>
    <p>
      Empower your growth with Habit Hub.<br />Track your progress, achieve your
      goals!
    </p>
    <Button>Get Started</Button>
  </div>
</div>

<style lang="scss">
  .landing {
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
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
  }
</style>
