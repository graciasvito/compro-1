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
        <img src="" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolioDetail: {},
      imgSrc: "",
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
  methods: {
    getPortfolio() {
      //   console.log(this.portfolio);
      this.portfolioDetail = this.portfolio.find(
        (item) => item.id === this.portfolioId
      );
      console.log(this.portfolioDetail.imgCollection);
    },
    // nextImage(){
    //   this.imgSrc =
    // }
  },
};
</script>
