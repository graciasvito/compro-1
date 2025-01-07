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
    <div class="project-card-container-extra">
      <div
        v-for="(item, index) of portfolioListExtra"
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
import dokumen1 from "../content/dokumen1.png";
import dokumen2 from "../content/dokumen2.png";
import dokumen3 from "../content/dokumen3.png";
import dokumen4 from "../content/dokumen4.png";
import dokumen5 from "../content/dokumen5.png";
import dokumen6 from "../content/dokumen6.png";
import dokumen7 from "../content/dokumen7.png";
import dokumen8 from "../content/dokumen8.png";
import dokumen9 from "../content/dokumen9.png";
import dokumen10 from "../content/dokumen10.png";
import dokumen11 from "../content/dokumen11.png";
import dokumen12 from "../content/dokumen12.png";
import dokumen13 from "../content/dokumen13.png";
import dokumen14 from "../content/dokumen14.png";

export default {
  data() {
    return {
      portfolioList: [
        {
          image: dokumen1,
          title: "Internal Tank ( Blasting Coating )",
          id: "blasting-subang",
        },
        {
          image: dokumen2,
          title: "Coating Steel Structure Brine Treatment",
          id: "coating-steel",
        },
        {
          image: dokumen3,
          title: "Blasting Turbine",
          id: "blasting-turbine",
        },
        {
          image: dokumen4,
          title: "Coating Fan Blade",
          id: "coating-fan",
        },
        {
          image: dokumen5,
          title: "Internal Tank ( Blasting Coating )",
          id: "blasting-subang",
        },
        {
          image: dokumen6,
          title: "Floor Coating",
          id: "coating-steel",
        },
        {
          image: dokumen7,
          title: "BWE Coating",
          id: "blasting-turbine",
        },
        {
          image: dokumen8,
          title: "Shiploader Coating",
          id: "coating-fan",
        },
        {
          image: dokumen9,
          title: "CPO Tank Scafolding Blasting & Coating ",
          id: "blasting-subang",
        },
        {
          image: dokumen10,
          title: "Hydrant Coating",
          id: "coating-steel",
        },
        {
          image: dokumen11,
          title: "Internal Tank Bio diesel HSD Scafolding Blasting & Coating",
          id: "blasting-turbine",
        },
        {
          image: dokumen12,
          title: "Painting Stadium",
          id: "coating-fan",
        },
      ],
      portfolioListExtra: [
        {
          image: dokumen13,
          title: "Coating Mining Equipment",
          id: "blasting-turbine",
        },
        {
          image: dokumen14,
          title: "Penggantian Isolasi",
          id: "coating-fan",
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
