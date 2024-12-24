<template>
  <div class="compro-sertificate">
    <div class="main-certif">
      <img src="../content/iso14001.png" alt="" draggable="false" />
      <img src="../content/iso9001.png" alt="" draggable="false" />
      <img src="../content/ISO45001.png" alt="" draggable="false" />
    </div>
    <div class="view-more">
      <p @click="moreCertificate()">View Our Certificates</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    moreCertificate() {
      window.location.href = `/certificate`;
    },
  },
};
</script>
