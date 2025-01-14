<template>
  <div class="compro-product-list">
    <!-- pengadaan barang -->
    <div class="barang"><h2>Pengadaan Barang</h2></div>
    <div class="list-container">
      <div
        class="product-card"
        v-for="(product, index) in products"
        :key="index"
      >
        <div class="image-container">
          <img :src="product.image" :alt="product.name" />
          <div class="overlay">
            <button class="btn add-to-cart" @click="openImage(product.image)">
              <Icon icon="mynaui:plus-solid" />
            </button>
            <!-- <button class="btn more-info">
              <Icon icon="mi:options-horizontal" />
            </button> -->
          </div>
        </div>
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
      </div>
    </div>

    <div class="barang"><h2>Pengadaan Jasa</h2></div>
    <div class="list-container">
      <div class="product-card" v-for="(jasa, index) in jasa" :key="index">
        <div class="image-container">
          <img :src="jasa.image" :alt="jasa.name" />
          <div class="overlay">
            <button class="btn add-to-cart" @click="openImage(jasa.image)">
              <Icon icon="mynaui:plus-solid" />
            </button>
            <!-- <button class="btn more-info">
              <Icon icon="mi:options-horizontal" />
            </button> -->
          </div>
        </div>
        <h3>{{ jasa.name }}</h3>
        <p>{{ jasa.description }}</p>
      </div>
    </div>
    <ModalPhoto
      :visible="viewProduct"
      :image="productImage"
      @update:visible="closeModal"
    />
  </div>
</template>
<script>
import Placeholder from "../../content/placeholder-img.jpg";
import { Icon } from "@iconify/vue2";
import Hempel from "../../content/product/hempel.jpg";
import Voith from "../../content/product/voith_turbo.png";
import Moog from "../../content/product/moog_servo-valve.png";
import Fisher from "../../content/product/fisher.jpg";
import Donalson from "../../content/product/donalson_filter.jpg";
import Sakura from "../../content/product/sakura_filter.png";
import Pall from "../../content/product/pall_filter.jpg";
import Amarillo from "../../content/product/amarillo_gear.jpg";
import GeSensor from "../../content/product/ge_sensor.jpg";
import Bently from "../../content/product/bently_nevada.jpg";
import Siemens from "../../content/product/siemens_motor.jpg";
import Torishima from "../../content/product/torishima_pump.png";
import Voksel from "../../content/product/voksel_cable.jpg";

import ModalPhoto from "../components/ModalPhoto.vue";

export default {
  components: { ModalPhoto, Icon },
  data() {
    return {
      products: [
        {
          name: "Hempel",
          image: Hempel,
          description: "Epoxy Primer",
        },
        {
          name: "Voith Turbo",
          image: Voith,
          description: "High-Performance Industrial Gearbox",
        },
        {
          name: "Moog Servo Valve",
          image: Moog,
          description: "Precision Hydraulic Control Valve",
        },
        {
          name: "Fisher",
          image: Fisher,
          description: "Durable Flow Control Valve",
        },
        {
          name: "Donalson Filter",
          image: Donalson,
          description: "Filtration System",
        },
        {
          name: "Sakura Filter",
          image: Sakura,
          description: "Heavy-Duty Filters",
        },
        {
          name: "Pall Filter",
          image: Pall,
          description: "Depth Filter",
        },
        {
          name: "Amarillo Gear",
          image: Amarillo,
          description: "Double Reduction Gear Drives",
        },
        {
          name: "GE Sensor",
          image: GeSensor,
          description: "Measurement Sensor",
        },
        {
          name: "Bently Nevada",
          image: Bently,
          description: "Proximity Sensor",
        },
        {
          name: "Siemens Motor",
          image: Siemens,
          description: "Electric Motor",
        },
        {
          name: "Torishima Pump",
          image: Torishima,
          description: "Water Pump",
        },
        {
          name: "Voksel Cable",
          image: Voksel,
          description: "Electrical Cable",
        },
      ],
      jasa: [
        {
          name: "Sandblasting",
          image: Placeholder,
        },
        {
          name: "Rotor dll",
          image: Placeholder,
        },
        {
          name: "Protective Coating/Painting",
          image: Placeholder,
        },
        {
          name: "Floor Coating",
          image: Placeholder,
        },
        {
          name: "Insulation",
          image: Placeholder,
        },
      ],
      viewProduct: false,
      productImage: "",
    };
  },
  methods: {
    openImage(img) {
      this.viewProduct = true;
      this.productImage = img;
    },
    closeModal() {
      this.viewProduct = false;
    },
  },
};
</script>
<style scoped></style>
