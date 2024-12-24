<template>
  <div class="compro-frontpage">
    <div class="container">
      <div class="content">
        <h1>Innovative Solutions, Lasting Quality</h1>
      </div>
    </div>
    <div class="below-box">
      <MarqueeLeft />
      <MarqueeRight />
    </div>
  </div>
</template>

<script>
import MarqueeLeft from "./components/MarqueeLeft.vue";
import MarqueeRight from "./components/MarqueeRight.vue";
export default {
  components: {
    MarqueeLeft,
    MarqueeRight,
  },
  // No additional data or props are needed, so these can be omitted.
};
</script>

<style lang="scss" scoped>
.compro-frontpage {
  // margin-top: 11.5vh;
  background-image: url("../content/industries21.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

@media screen and (max-width: 991px) {
  .hero.home {
    background-image: none;
    padding: 0;
  }

  .containerz.pull {
    flex-direction: column;
    padding: 20px;
  }

  .content.hero-block {
    width: 100%;
    padding: 56px 20px;
  }

  .action {
    flex-direction: column;
  }

  .mobile-hero-img {
    display: block;
    width: 100vw;
  }
}

@media screen and (max-width: 500px) {
  .action {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }

  .button-download-img {
    width: 100%;
    max-width: 160px;
  }
  .mobile-hero-img {
    display: block;
    img {
      width: 100vw;
    }
  }
}
</style>
