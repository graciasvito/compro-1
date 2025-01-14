<template>
  <div class="modal-overlay" v-if="visible" @click.self="closeModal">
    <div class="modal-content">
      <img :src="image" alt="" draggable="false" />
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";

export default {
  props: {
    visible: {
      type: Boolean,
    },
    image: {
      type: String,
    },
  },
  components: {
    Icon,
  },
  methods: {
    handleClick(type) {
      this.$emit("select", type);
    },
    closeModal() {
      this.$emit("update:visible", false); // Emit an event to update the visibility
    },
    handleKeydown(event) {
      if (event.key === "Escape") {
        this.closeModal(); // Close modal when Esc is pressed
      }
    },
  },
  mounted() {
    document.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 500px;
  height: fit-content;
}

.modal-content img {
  width: 100%;
}
</style>
