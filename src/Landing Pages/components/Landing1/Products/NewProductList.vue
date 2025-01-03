<template>
  <div class="compro-product-list--new">
    <div>
      <div class="barang"><h2>Pengadaan Barang</h2></div>
      <div v-for="(item, index) in products" :key="index" class="list-item">
        <Icon icon="ph:wrench-fill" width="30" color="black" />
        <p>{{ item.name }}</p>
      </div>
    </div>
    <div>
      <div class="barang"><h2>Pengadaan Jasa</h2></div>
      <div v-for="(item, index) in jasa" :key="index" class="list-item">
        <Icon icon="material-symbols:engineering" width="30" color="black" />
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default {
  components: { Icon },
  data() {
    return {
      products: [
        {
          name: "Hempel",
          type: "product",
        },
        {
          name: "Voith Turbo",
          type: "product",
        },
        {
          name: "Moog Servo Valve",
          type: "product",
        },
        {
          name: "Fisher",
          type: "product",
        },
        {
          name: "Donalson Filter",
          type: "product",
        },
        {
          name: "Sakura Filter",
          type: "product",
        },
        {
          name: "Pall Filter",
          type: "product",
        },
        {
          name: "Amarillo Gear",
          type: "product",
        },
        {
          name: "GE Sensor",
          type: "product",
        },
        {
          name: "Honey Well",
          type: "product",
        },
        {
          name: "Bently Nevada",
          type: "product",
        },
        {
          name: "Siemens Motor",
          type: "product",
        },
        {
          name: "Torishima Pump",
          type: "product",
        },
        {
          name: "Voksel Cable",
          type: "product",
        },
      ],
      jasa: [
        {
          name: "Sandblasting",
          type: "service",
        },
        {
          name: "Rotor",
          type: "service",
        },
        {
          name: "Protective Coating/Painting",
          type: "service",
        },
        {
          name: "Floor Coating",
          type: "service",
        },
        {
          name: "Insulation",
          type: "service",
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
