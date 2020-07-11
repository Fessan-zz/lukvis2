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
      <section class="catalog">
        <b-container class="catalog__wrap">
          <div class="catalog__h2-wrap d-flex">
            <div class="catalog__h2-line mt-2"></div>
            <h2 class="catalog__h2-text ml-3">Изготовление товаров<br> любой сложности </h2>
          </div>
        </b-container>
        <b-container class="catalog__item">
          <b-row class="mb-5">
            <div class="catalog__item-name col-lg-3">Металлоизделия</div>
            <div class="catalog__item-name col-lg-3">Котельное оборудование</div>
            <div class="catalog__item-name col-lg-3">Элементы фундаментов</div>
            <div class="catalog__item-name col-lg-3">Нестандартное оборудование</div>
          </b-row>
          <b-row>
            <!-- <img src="../assets/img/catalogBck.jpg" alt="catalog"> -->
                <div id="al-c">
      <div class="card--item">
        <ul class="effects">
        <li>
          <img src="../assets/img/catalogBck.jpg" alt="Изделия">
          <div>
            <div class="catalog__item-p">
              <p>- Металлоконструкции</p>
              <p>- Опоры трубопроводов </p>
              <p>- Емкости и сосуды</p>
              <p>- Дымоходы </p>
              <p>- Силосы </p>
              <p>- Водонапорные башни</p>
            </div>
          </div>
        </li>
        </ul>
      </div>
    </div>
          </b-row>
        </b-container>
      </section>
  </div>
</template>

<script>
export default {
  name: 'main',
};
</script>

<style lang="scss">
.card--item {
 vertical-align: middle;
}
.effects {
 list-style:none;
 margin: 0 auto;
 width: 100%;
 padding: 0;
}
.effects li {
 position: relative;
 display: inline-block;
 background-color: #fff;
 margin: 0;
 overflow: hidden;
 font-size: 14px;
}
@media (max-width:350px) {
 .effects li {
  font-size: 10px;
 }
}
.effects li img {
 display: block;
 position: relative;
 max-width:100%;
 height:auto;
 display: block;
}
.effects li > div {
 width: 100%;
 height: 100%;
 position: absolute;
}
.effects li:hover > div {
 position: absolute;
 overflow: hidden;
 top: 0;
 left: 0;
}
.effects li div {
 opacity: 0;
 background-color: rgba(132, 0, 0, 0.3);
 transition: all 0.4s ease-in-out;
 height: 100%;
 color: #fff;
}
.effects li img {
 transition: all 0.2s linear;
}
.effects li:hover img {
 transform: scale(1.3);
}
.effects li:hover div {
 opacity: 1;
}

.catalog__item-p{
  padding-top: 75px;
  padding-left: 35px;
  & p{
    font-family: FuturaReg;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
    color: #FFFFFF;
  }
}

</style>
