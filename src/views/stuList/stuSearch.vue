<template>
  <div class="search">
    <label for="search-word">关键字搜索</label>
    <input type="text" id="search-word" v-model="keyword"/>
    <input type="button" id="search-submit" value="搜索" @click.prevent="search(keyword)"/>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data () {
    return {
      keyword: ''
    };
  },
  methods: {
    ...mapActions(['search'])
  }
};
</script>

<style>
</style>