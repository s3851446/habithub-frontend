<div class="reference">
  <div class="content">
    <h1>Reference List</h1>
    <h2>Svg and Images</h2>
    <p>
      All SVGs and images used throughout the website have been taken from Adobe
      stock Images. Some changes were made to the images and SVGs by the authors
      of the website to match them to the theme of the website. <br />
      <b
        >Adobe Stock. n.d. “Find the perfect stock asset for your next creative
        project.” Adobe.
        <a href="https://stock.adobe.com/au/">https://stock.adobe.com/au/</a
        >.</b
      >
    </p>
    <h2>Website Components</h2>
    <p>
      Some of the components (such as the footer) used throughout the website
      were made with the help of YouTube tutorials. They have all been
      referenced inside the code comments. Please see code comments for more
      detail.
    </p>
    <h2>Animations</h2>
    <p>
      The young man SVG animations were created via SVGator. <br /><b
        >SVGator. n.d. “The Easiest Way to Animate SVG.” SVGator.
        <a href="https://www.svgator.com/">https://www.svgator.com/</a>.</b
      >
    </p>
  </div>
  <div class="man">
    <object title="Man typing" type="image/svg+xml" data="./images/typing.svg">
      <img src="./images/typing.svg" alt="Man typing" />
    </object>
  </div>
</div>

<style lang="scss">
  a {
    color: $red;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  h2 {
    font-size: 17px;
  }

  .reference {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 20px;
    .content {
      margin: 80px 20px 20px 20px;
      padding: 20px;
      width: 60%;
    }
    .man {
      width: 28%;
    }
    @media only screen and (max-width: 900px) {
      flex-direction: column;
      align-items: center;
      .man {
        width: 70%;
      }
      .content {
        width: 100%;
      }
    }
  }
</style>
