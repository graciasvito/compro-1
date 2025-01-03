<template>
  <div>
    <Header1 />
    <Frontpage />
    <CertificateContent />
    <Footer1 />
  </div>
</template>

<script>
import Header1 from "./components/Landing1/Header1.vue";
import Frontpage from "./components/Landing1/FrontProduct.vue";
import CertificateContent from "./components/Landing1/certificate/CertificateContent.vue";
import Footer1 from "./components/Landing1/Footer1.vue";

export default {
  components: {
    Header1,
    Frontpage,
    CertificateContent,
    Footer1,
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
