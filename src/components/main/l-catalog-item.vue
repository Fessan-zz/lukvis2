<template>
  <div class="card--item">
            <ul class="effects">
              <li>
                <img src="../../assets/img/catalogBck.jpg" alt="Каталог" />
                <div>
                  <div class="catalog__item-p">
                    <p>- Металлоконструкции</p>
                    <p>- Опоры трубопроводов</p>
                    <p>- Емкости и сосуды</p>
                    <p>- Дымоходы</p>
                    <p>- Силосы</p>
                    <p>- Водонапорные башни</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
</template>

<script>
export default {
  name: 'catalog-item',
  props: {
    item__data: {
    },
  },
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
