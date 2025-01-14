<template>
  <div>
    <Header1 />
    <Frontpage />
    <ProductList />
    <!-- <NewProductList /> -->
    <Footer1 />
  </div>
</template>

<script>
import Header1 from "./components/Landing1/Header1.vue";
import Frontpage from "./components/Landing1/FrontProduct.vue";
import ProductList from "./components/Landing1/Products/ProductList.vue";
import NewProductList from "./components/Landing1/Products/NewProductList.vue";
import Footer1 from "./components/Landing1/Footer1.vue";

export default {
  components: {
    Header1,
    Frontpage,
    ProductList,
    Footer1,
    NewProductList,
  },
  mounted() {
    this.location();
  },
  methods: {
    location() {
      console.log(window.location.pathname);
    },
  },
};
</script>
