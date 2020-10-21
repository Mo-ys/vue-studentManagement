<template>
  <div class="left-menu">
    <dl class="menu-list">
      <dt>学生管理</dt>
      <router-link to="/" tag="dd" class="list" data-id="student-list">学生列表</router-link>
      <router-link to="/addStu" tag="dd" data-id="add-student" class="add">新增学生</router-link>
    </dl>
  </div>
</template>

<script>
export default {
    data () {
         return {
            isActive: true
        }
    }
};
</script>

<style>
</style>