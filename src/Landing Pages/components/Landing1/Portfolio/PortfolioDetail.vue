<template>
  <div class="compro-portfolio-detail">
    <div class="main-title">
      <div class="description">
        <h1>{{ portfolioDetail.user }}</h1>
        <p>{{ portfolioDetail.title }}</p>
      </div>
      <div class="main-image"><img :src="portfolioDetail.image" alt="" /></div>
    </div>

    <div class="project-info">
      <div class="container">
        <h1><span>Project</span> Information</h1>

        <div class="detail">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            similique in hic animi, quasi ea ab, enim nesciunt sunt, aspernatur
            placeat laboriosam non! Debitis a officia ipsum earum doloremque
            atque. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Soluta distinctio eveniet laudantium mollitia, tempora
            necessitatibus repudiandae iure earum accusantium atque libero
            ratione non hic esse eum, assumenda ad maxime sint. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Deleniti eius,
            voluptatibus mollitia delectus alias sequi cumque odio porro
            suscipit debitis consequatur nostrum accusantium non saepe aliquid,
            quam temporibus similique ad!
          </p>
        </div>
      </div>
    </div>
    <div class="gallery">
      <h1>Gallery</h1>
      <div class="img-container">
        <img :src="imgSrc" alt="" />
      </div>
      <div class="button">
        <div @click="!beforeDisable ? previousImage() : ''">
          <Icon icon="grommet-icons:form-previous" width="40" />
        </div>
        <div @click="!nextDisable ? nextImage() : ''">
          <Icon icon="grommet-icons:form-next" width="40" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      portfolioDetail: {},
      imageKeys: "",
      imgSrc: "",
      index: 0,
      nextDisable: false,
      beforeDisable: false,
    };
  },
  computed: {
    portfolio() {
      return JSON.parse(localStorage.getItem("portfolioList"));
    },
    portfolioId() {
      return localStorage.getItem("portfolioId");
    },
  },
  mounted() {
    this.getPortfolio();
  },
  watch: {
    index() {
      const length = this.imageKeys.length;

      if (this.index === 0) {
        this.beforeDisable = true;
      } else if (this.index === length - 1) {
        this.nextDisable = true;
      } else {
        this.beforeDisable = false;
        this.nextDisable = false;
      }

      console.log(this.nextDisable);
      console.log(this.beforeDisable);
    },
  },
  methods: {
    getPortfolio() {
      //   console.log(this.portfolio);
      this.portfolioDetail = this.portfolio.find(
        (item) => item.id === this.portfolioId
      );
      // console.log(this.portfolioDetail.imgCollection);
      this.imageKeys = Object.keys(this.portfolioDetail.imgCollection);
      this.imgSrc = this.portfolioDetail.imgCollection[this.imageKeys[0]];
      console.log(this.imgSrc);
    },
    previousImage() {
      // const length = this.imageKeys.length;

      this.index -= 1;
      this.imgSrc =
        this.portfolioDetail.imgCollection[this.imageKeys[this.index]];
    },
    nextImage() {
      this.index += 1;
      this.imgSrc =
        this.portfolioDetail.imgCollection[this.imageKeys[this.index]];
    },
  },
};
</script>
