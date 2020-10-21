<template>
  <div class="wrapper">
    <app-header></app-header>
    <left-menu></left-menu>
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
</style>

<script>
import header from './components/header';
import leftMenu from './components/leftMenu';
import "./css/index.css";
export default {
  components: {
    'left-menu': leftMenu,
    'app-header': header,
  }
};
</script>
