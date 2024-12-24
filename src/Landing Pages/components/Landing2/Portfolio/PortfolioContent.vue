<template>
  <!-- <div class="compro-porto-content">
    <div
      class="card"
      v-for="(card, index) in cardPortfolio"
      :key="index"
      @click="clickProject(card.id)"
    >
      <img :src="card.image" alt="" />
      <h2>{{ card.user }}</h2>
      <p>{{ card.title }}</p>
      <div class="button">View Project</div>
    </div>
  </div> -->
  <div class="new-compro-porto-content">
    <h2>Project Experience</h2>
    <div
      class="list-porto"
      v-for="(items, index) in newPortfolioList"
      :key="index"
    >
      <div class="flex just-between">
        <p class="company">{{ items.company }}</p>
        <p>{{ items.year }}</p>
      </div>
      <p>{{ items.description }}</p>
    </div>
  </div>
</template>

<script>
import dokumen1 from "../../content/dokumen1.png";
import dokumen2 from "../../content/dokumen2.png";
import dokumen3 from "../../content/dokumen3.png";
import dokumen4 from "../../content/dokumen4.png";
import sbd1 from "../../content/portfolio/SBD-1.png";
import sbd2 from "../../content/portfolio/SBD-2.png";
import PtbaPltu1 from "../../content/portfolio/PTBA-pltu-1.png";
import PtbaPltu2 from "../../content/portfolio/PTBA-pltu-2.png";
import PtbaPltu3 from "../../content/portfolio/PTBA-pltu-3.png";
import Subang1 from "../../content/portfolio/Subang-1.png";
import Subang2 from "../../content/portfolio/Subang-2.png";
import Subang3 from "../../content/portfolio/Subang-3.png";
import PtbaKertapati1 from "../../content/portfolio/PTBA-kertapati-1.png";
import PtbaKertapati2 from "../../content/portfolio/PTBA-kertapati-2.png";
import PtbaKertapati3 from "../../content/portfolio/PTBA-kertapati-3.png";

export default {
  data() {
    return {
      cards: Array.from({ length: 6 }, (_, i) => i + 1), // Example cards
      cardPortfolio: [
        {
          image: dokumen1,
          title: "Internal Tank (Blasting & Coating)",
          user: "PT. Sungai Budi Group",
          id: "blasting-sbd",
          imgCollection: { sbd1, sbd2 },
        },
        {
          image: dokumen2,
          title: "Blasting Turbine",
          user: "PLTU Bukit Asam",
          id: "blasting-pltu_ptba",
          imgCollection: { PtbaPltu1, PtbaPltu2, PtbaPltu3 },
        },
        {
          image: dokumen3,
          title: "Internal Tank ( Blasting Coating )",
          user: "PT. Subang",
          id: "blasting-subang",
          imgCollection: { Subang1, Subang2, Subang3 },
        },
        {
          image: dokumen4,
          title: "Shiploader Coating",
          user: "PT. Bukit Asam Kertapati Palembang",
          id: "coating-ptba",
          imgCollection: { PtbaKertapati1, PtbaKertapati2, PtbaKertapati3 },
        },
      ],
      newPortfolioList: [
        {
          company: "PT. PERKEBUNAN NUSANTARA",
          description:
            "Pengadaan Plat Yzer 45 mm & Baja Strip 10 mm (Exp. 2022)",
          year: "2022",
        },
        {
          company: "PT. PLN (PERSERO)",
          description:
            "Pengadaan Jasa Penggantian Isolasi Turbine Unit 1 PLTU Bukit Asam",
          year: "2022",
        },
        {
          company: "PT. PJB SERVICE",
          description: "Pengadaan Material Air Dryer PLTU Bangka",
          year: "2021",
        },
        {
          company: "PT. PJB SERVICE",
          description: "Pengadaan Wire Rope",
          year: "2021",
        },
        {
          company: "PT. PETRO ANDALAN NUSANTARA",
          description: "Pengecatan 3 Unit Tangki",
          year: "2021",
        },
        {
          company: "PT. BUKIT ASAM (PERSERO)",
          description: "Pengecatan 5900m2 Project Pemindahan & Refurbisment",
          year: "2021",
        },
        {
          company: "PT. PLN (PERSERO) Pembangkitan",
          description:
            "Jasa Blasting Rotor & Diaphragma LP Turbin Unit 2 PLTU Sebalang",
          year: "2019",
        },
        {
          company: "PT. PLN (PERSERO) Pembangkitan",
          description:
            "Jasa Sandblasting  Diaphragma & Rotor Turbin PLTU Bukit Asam",
          year: "2019",
        },
        {
          company: "PT. IKPP",
          description: "Pengecatan Steel Structure",
          year: "2019",
        },
        {
          company: "PT. PLN (PERSERO) Pembangkitan",
          description:
            "Pengadaan Sparepart Kehandalan Moog Servo & Filter Hydraulic",
          year: "2019",
        },
        {
          company: "PT. PLN (PERSERO) Pembangkitan",
          description: "Pengadaan S/P Flame Sensor PLTG LM2000 Borang",
          year: "2018",
        },
        {
          company: "PT. PLN (PERSERO) Pembangkitan",
          description:
            "Pengadaan Gearbox Valve Strainer Auxiliary Cooling Water (ACW)",
          year: "2018",
        },
        {
          company: "PT. PLN (PERSERO) Pembangkitan",
          description:
            "Pengadaan Pressure Transmitter Sensor Temperature dan Speed Sensor",
          year: "2018",
        },
        {
          company: "PT. PLN (PERSERO) Pembangkitan",
          description:
            "Pengadaan S/P Mechanical Seal BFP ST 1.0 Pressure Transmitter Condensor",
          year: "2017",
        },
        {
          company: "PT. PLN (PERSERO) Pembangkitan",
          description:
            "Pengadaan Spare Part Kehandalan Pada Sistem Bahan Bakar",
          year: "2017",
        },
        {
          company: "PT. BUKIT ASAM (PERSERO) Tbk ",
          description: "Pengecatan Alat Tambang Utama ATU BWE System & CHF",
          year: "2016/2017",
        },
        {
          company: "PT. BUKIT ASAM (PERSERO) Tbk ",
          description: "Pengecatan Konstruksi PLTU TE Tahap III",
          year: "2016",
        },
        {
          company: "PT. PLN (PERSERO) Pembangkitan",
          description:
            "Pengadaan Material Spare Part & Jasa Periodik (SI) HRSG",
          year: "2015",
        },
        {
          company: "PT. TUNAS BARU LAMPUNG",
          description: "Coating Internal Tangki CPO",
          year: "2015",
        },
        {
          company: "PT. TANJUNGENIM LESTARI PULP & PAPER",
          description:
            "Service Repainting Steel Structure & Replacement of Steel Beam",
          year: "2015",
        },
      ],
    };
  },
  methods: {
    clickProject(id) {
      // const result = this.cardPortfolio.find((item) => item.id === id);
      // console.log(result);
      localStorage.setItem("portfolioList", JSON.stringify(this.cardPortfolio));
      window.location.href = `/portfolio/${id}`;
      localStorage.setItem("portfolioId", id);
    },
  },
};
</script>

<style scoped></style>
