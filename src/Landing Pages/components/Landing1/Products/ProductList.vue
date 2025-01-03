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
            <button class="btn more-info">
              <Icon icon="mi:options-horizontal" />
            </button>
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
            <button class="btn more-info">
              <Icon icon="mi:options-horizontal" />
            </button>
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

import ModalPhoto from "../components/ModalPhoto.vue";

export default {
  components: { ModalPhoto, Icon },
  data() {
    return {
      products: [
        {
          name: "Hempel",
          image: Placeholder,
          description: "Flow Measurement",
        },
        {
          name: "Voith Turbo",
          image: Placeholder,
          description: "Flow Measurement",
        },
        {
          name: "Moog Servo Valve",
          image: Placeholder,
          description: "Flow Measurement",
        },
        {
          name: "Fisher",
          image: Placeholder,
          description: "Flow Measurement",
        },
        {
          name: "Donalson Filter",
          image: Placeholder,
          description: "Flow Measurement",
        },
        {
          name: "Sakura Filter",
          image: Placeholder,
          description: "Flow Measurement",
        },
        {
          name: "Pall Filter",
          image: Placeholder,
          description: "Flow Measurement",
        },
        {
          name: "Amarillo Gear",
          image: Placeholder,
          description: "Flow Measurement",
        },
        {
          name: "GE Sensor",
          image: Placeholder,
          description: "Flow Measurement",
        },
        {
          name: "Honey Well",
          image: Placeholder,
          description: "Flow Measurement",
        },
        {
          name: "Bently Nevada",
          image: Placeholder,
          description: "Flow Measurement",
        },
        {
          name: "Siemens Motor",
          image: Placeholder,
          description: "Flow Measurement",
        },
        {
          name: "Torishima Pump",
          image: Placeholder,
          description: "Flow Measurement",
        },
        {
          name: "Voksel Cable",
          image: Placeholder,
          description: "Flow Measurement",
        },
      ],
      jasa: [
        {
          name: "Sandblasting Rotor dll",
          image: Placeholder,
          description: "Flow Measurement",
        },
        {
          name: "Protective Coating/Painting",
          image: Placeholder,
          description: "Flow Measurement",
        },
        {
          name: "Floor Coating",
          image: Placeholder,
          description: "Flow Measurement",
        },
        {
          name: "Insulation",
          image: Placeholder,
          description: "Flow Measurement",
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
