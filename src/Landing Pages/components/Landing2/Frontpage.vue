<template>
  <div class="compro2-frontpage" id="home">
    <img
      src="../content/industries21.jpg"
      alt=""
      class="img-front"
      draggable="false"
    />
    <div class="containerz pull">
      <h1 class="display-lg bold">Innovative Solutions, Lasting Quality</h1>
    </div>
    <div class="below-box">
      <img
        src="../content/first-row.png"
        alt=""
        draggable="false"
        v-if="pathname === '/'"
      /><img
        src="../content/second-row.png"
        v-if="pathname === '/'"
        draggable="false"
        alt=""
      />

      <div v-else-if="pathname === '/portfolio'" class="portfolio-title">
        <h2>Portfolio</h2>
        <h1>Our Projects</h1>
      </div>

      <div v-else-if="pathname === '/certificate'" class="certificate-title">
        <h2>Certificate</h2>
        <h1>Our Certificates</h1>
      </div>
      <div v-else-if="pathname === '/product'" class="product-title">
        <!-- <h2>Product</h2> -->
        <h1>Products</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pathname: "",
    };
  },
  mounted() {
    this.pathname = window.location.pathname;

    // console.log(pathname);
  },
};
</script>

<style lang="scss" scoped>
.display-lg.bold {
  font-weight: 700;
  font-size: 36px;
  text-shadow: 2px 2px #ffffff70;
  color: #375f90;
}

@media screen and (max-width: 991px) {
  .containerz.pull {
    flex-direction: column;
    padding: 20px;
  }
}
</style>
