<template>
  <div class="nav-bar">
    <b-navbar toggleable="lg">
      <b-navbar-brand to="/">
        <img src="@/assets/img/logo.png" alt="logo">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            class="nav-bar_links"
            to="#"
            active-class="active"
            exact
          >О компании</b-nav-item>
          <b-nav-item
            class="nav-bar_links ml-3"
            to="#"
            active-class="active"
            exact
          >Каталог</b-nav-item>
          <b-nav-item
            class="nav-bar_links ml-3"
            to="#"
            active-class="active"
            exact
          >Наши работы</b-nav-item>
          <b-nav-item
            class="nav-bar_links ml-3"
            to="#"
            active-class="active"
            exact
          >Контакты</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto mt-2">
          <b-nav-item to="#">
            <div class="">
              <span class="fsz-13">(3822)</span>
              <a class="span-blue" href="tel:+73822905678">90-56-78, 22-65-02</a>
            </div>
            <p class="mt-2 text-right"><a href="mailto:lukvis@mail.ru"></a>lukvis@mail.ru</p>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.nav-bar{
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.nav-link{
  color: #464646 !important;
  &:hover{
    color: #828282 !important;
  }
}
.fsz-13{
  font-size: 13px;
}
.span-blue{
  color: #2760CE;
}
.active {
  color: #DC0000 !important;
}
</style>
