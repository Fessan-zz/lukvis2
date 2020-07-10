<template>
  <div id="app" class="app">
    <l-nav-bar />
    <router-view/>
  </div>
</template>

<script>
import lNavBar from '@/components/layouts/l-nav-bar.vue';

export default {
  name: 'app',
  components: { lNavBar },
};
</script>

<style lang="scss">
#app{
  max-width: 1366px;
  width: 100%;
  font-size: 18px;
  line-height: 18px;
  color: #4E4E4E;
  font-family: 'FuturaReg';
  margin: 0 auto;
}

</style>
