<template>
  <div class="marquee-left">
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
import welding from "../../content/marquee/welding.png";
import industrialPipes from "../../content/marquee/industrial-pipes.png";
import turbine from "../../content/marquee/turbine.png";
import industrialTank from "../../content/marquee/industrial-tank.png";
import crane from "../../content/marquee/crane.png";
import insolation from "../../content/marquee/insolation.png";

export default {
  data() {
    return {
      images: [
        { src: welding, title: "Welding", id: 1 },
        { src: industrialPipes, title: "Industrial Pipes", id: 2 },
        { src: turbine, title: "Turbine", id: 3 },
        { src: industrialTank, title: "Industrial Tank", id: 4 },
        { src: crane, title: "Crane", id: 5 },
        { src: insolation, title: "Insolation", id: 6 },
      ],
      currentOffset: 0,
      speed: 1, // Pixels per frame
    };
  },
};
</script>
