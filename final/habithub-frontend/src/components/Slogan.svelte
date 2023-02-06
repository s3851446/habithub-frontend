<div class="slogan">
  <h1>Let's change our habits together!</h1>
  <object title="Man nodding" type="image/svg+xml" data="./images/okay.svg">
    <img src="./images/okay.svg" alt="Man nodding" />
  </object>
</div>

<style lang="scss">
  .slogan {
    background: linear-gradient(to bottom, $black, $dark-grey, $light-grey);
    color: $white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
  }

  h1 {
    text-align: left;
    margin: 100px 0;
    font-size: 60px;
    z-index: 200;
    width: 77%;
  }

  object {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 30%;
  }
</style>
