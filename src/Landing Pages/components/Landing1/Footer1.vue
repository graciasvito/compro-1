<template>
  <div class="compro-footer" id="contact">
    <div class="big-container">
      <div class="left-footer">
        <div class="row align-center">
          <img
            src="../content/Logo Jala Bumi Perkasa.png"
            style="width: 100px"
            @click="toHome"
          />
          <h2>PT. Jala Bumi Perkasa</h2>
        </div>
        <div class="contact">
          <p class="address">
            R.A Rozak / Patal - Pusri JL.LKMD No.31A RT.045 RW.009 Palembang
            30014.
          </p>
          <br />
          <p class="cp">Phone : (+62 711) 711674</p>
          <p class="cp">Fax : (+62 711) 719725</p>
          <p class="cp">E-mail : suppportadmin@jalaabumiperkasa.com</p>
        </div>
      </div>
      <div class="menu-footer">
        <h2>Menu</h2>
        <div class="list-menu">
          <ul>
            <li><a href="/certificate"> Certificates</a></li>
            <li><a href="/product"> Products</a></li>
            <li><a href="/portfolio"> Portfolio</a></li>
          </ul>
        </div>
      </div>
    </div>
    ©️ 2024, PT. Jala Bumi Perkasa. All Right Reserved
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      window.location.href = "/";
    },
  },
};
</script>
