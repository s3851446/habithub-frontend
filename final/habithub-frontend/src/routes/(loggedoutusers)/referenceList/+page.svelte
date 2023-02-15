<div class="reference">
  <div class="content">
    <h1>Reference List</h1>
    <h2>Svg and Images</h2>
    <p>
      The visual elements featured on this website, including all SVGs and
      images, were sourced from Adobe Stock Images. Our authors have made
      modifications to the images and SVGs to align them with the overall theme
      of the website. <br />
      <b
        >Adobe Stock. n.d. “Find the perfect stock asset for your next creative
        project.” Adobe.
        <a href="https://stock.adobe.com/au/">https://stock.adobe.com/au/</a
        >.</b
      >
    </p>
    <h2>Website Components</h2>
    <p>
      The incorporation of certain components, such as the footer, throughout
      the website was achieved through the utilisation of YouTube tutorials.
      These tutorials have been properly referenced within the code comments for
      ease of review and transparency. Kindly refer to the code comments for
      further information.
    </p>
    <h2>Animations</h2>
    <p>
      The animated depictions of the young man utilised throughout the website
      were created utilising the tool known as SVGator. <br /><b
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
