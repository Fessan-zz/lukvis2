<template>
  <section class="catalog">
    <b-container class="catalog__wrap">
      <div class="catalog__h2-wrap d-flex">
        <div class="catalog__h2-line mt-2"></div>
        <h2 class="catalog__h2-text ml-3">
          Изготовление товаров
          <br />любой сложности
        </h2>
      </div>
    </b-container>
    <b-container class="catalog__item">
      <b-row class="mb-5">
        <div
          class="catalog__item-name col-lg-3"
        >Металлоизделия
        </div>
        <div
         class="catalog__item-name col-lg-3"
        >Котельное оборудование
        </div>
        <div
         class="catalog__item-name col-lg-3"
         >
         Элементы фундаментов
        </div>
        <div
         class="catalog__item-name col-lg-3"
        >Нестандартное оборудование
        </div>
      </b-row>
      <b-row>
        <!-- catalog-item -->
        <l-catalog-item />
      </b-row>
    </b-container>
  </section>
</template>

<script>

import lCatalogItem from './l-catalog-item.vue';

export default {
  name: 'catalog',
  components: { lCatalogItem },

};
</script>

<style  lang="scss">
.selectedCategory{
  color: #DC0000;
}
</style>
