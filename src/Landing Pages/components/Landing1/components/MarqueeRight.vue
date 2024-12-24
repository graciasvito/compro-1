<template>
  <div class="marquee-right">
    <div class="marquee-content">
      <div class="marquee-item" v-for="(item, index) in images" :key="index">
        <img :src="item.src" alt="" />
        <span class="image-title">{{ item.title }}</span>
      </div>

      <div class="marquee-item" v-for="item in images" :key="item.id">
        <img :src="item.src" alt="" />
        <span class="image-title">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import mining from "../../content/marquee/mining.png";
import factoryFloor from "../../content/marquee/factory-floor.png";
import steelStructure from "../../content/marquee/steel-structure.png";
import oilGasPipes from "../../content/marquee/oil-gas-pipes.png";
import shipMarine from "../../content/marquee/ship-marine.png";
import offshore from "../../content/marquee/offshore.png";

export default {
  data() {
    return {
      images: [
        { src: mining, title: "Mining", id: 7 },
        { src: factoryFloor, title: "Industrial Pipes", id: 8 },
        { src: steelStructure, title: "Steel Structure", id: 9 },
        { src: oilGasPipes, title: "Oil & Gas Pipes", id: 10 },
        { src: shipMarine, title: "Ship Marine", id: 11 },
        { src: offshore, title: "Offshore", id: 12 },
      ],
    };
  },
};
</script>
