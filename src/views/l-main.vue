<template>
  <div class="main">
    <!-- hero section -->
    <section class="main_wrap">
      <div class="main__hero container">
          <h1>Завод металлоконструкций “Луквис”</h1>
          <b-row>
            <b-col class="col-lg-6 main__hero-left">
              <h2 class="main__hero-left-h2">Производство металлоконструкций</h2>
            </b-col>
            <b-col class="col-lg-6 main__hero-right d-flex">
              <div class="main__hero-right-red"></div>
              <h2 class="main__hero-right-h2 ml-4 pt-2">
                ЛЮБАЯ СЛОЖНОСТЬ,<br> ИНДИВИДУАЛЬНЫЙ ПОДХОД
              </h2>
            </b-col>
          </b-row>
          <div class="main__hero-btn">
            <a href="#">
              ОТПРАВИТЬ ЗАЯВКУ
            </a>
          </div>
        </div>
      </section>
      <!--                 catalog            -->
      <l-catalog />
  </div>
</template>

<script>
import lCatalog from '../components/main/l-catalog.vue';

export default {
  name: 'l-main',
  components: { lCatalog },
};
</script>

<style lang="scss">

</style>
