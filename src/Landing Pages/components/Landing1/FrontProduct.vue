<template>
  <div class="compro-front-product">
    <div class="product-title" v-if="pathname === '/product'">
      <!-- <h2>Product</h2> -->
      <h1>Products</h1>
    </div>
    <div v-else-if="pathname === '/portfolio'" class="portfolio-title">
      <h2>Portfolio</h2>
      <h1>Our Projects</h1>
    </div>

    <div v-else-if="pathname === '/certificate'" class="certificate-title">
      <h2>Certificate</h2>
      <h1>Our Certificates</h1>
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
