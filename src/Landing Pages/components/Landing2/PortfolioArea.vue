<template>
  <div class="compro2-portfolio" id="portfolio">
    <h1>Our <span>Portfolio</span></h1>
    <div class="project-card-container">
      <div
        v-for="(item, index) of portfolioList"
        :key="index"
        class="card-portfolio"
      >
        <img :src="item.image" alt="image" />

        <h2>{{ item.title }}</h2>
        <!-- <div class="button">View Project</div> -->
      </div>
    </div>

    <div class="view-more">
      <p @click="morePortfolio()">View More Portfolio</p>
    </div>
  </div>
</template>

<script>
import dokumen2 from "../content/dokumen2.png";
import dokumen3 from "../content/dokumen3.png";
import isolasi from "../content/isolasi.png";
import painting from "../content/painting.png";

export default {
  data() {
    return {
      portfolioList: [
        {
          image: dokumen3,
          title: "Blasting and Coating Internal Tangki",
          id: "blasting-subang",
        },
        {
          image: painting,
          title: "Pengecatan Struktur/Konstruksi",
          id: "painting-jakabaring",
        },
        {
          image: isolasi,
          title: "Isolasi Pipa",
          id: "isolaso-pipa",
        },
        {
          image: dokumen2,
          title: "Blasting Rotor and Stator Pipa Turbin",
          id: "blasting-pltu_ptba",
        },
      ],
    };
  },
  methods: {
    clickProject(id) {
      localStorage.setItem("portfolioList", JSON.stringify(this.portfolioList));
      window.location.href = `/portfolio/${id}`;
      localStorage.setItem("portfolioId", id);
    },
    morePortfolio() {
      window.location.href = `/portfolio`;
    },
  },
};
</script>
