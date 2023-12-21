<!--JS/VUE-->
<script setup>

import HeaderArea from './components/HeaderArea.vue';
import MainArea from './components/MainArea.vue';
import FooterArea from './components/FooterArea.vue';

</script>
<!--/JS/VUE-->

<!--HTML-->
<template>
  <HeaderArea />
  <MainArea />
  <FooterArea />
</template>
<!--/HTML-->

<!--SCSS-->
<style scoped lang="scss">
@import "../src/scss/general.scss";
@import "../src/scss/typography.scss";
</style>
<!--/SCSS-->
