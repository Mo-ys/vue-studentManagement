<template>
  <div class="student-list content" id="student-list">
    <student-search />
    <student-table />
    <turn-page></turn-page>
    <student-edit />
  </div>
</template>

<script>
import stuTable from "./stuList/stuTable.vue";
import stuSearch from "./stuList/stuSearch.vue";
import turnPage from "./stuList/turnPage";
export default {
  components: {
    "student-table": stuTable,
    "student-search": stuSearch,
    "student-edit": () => import("./stuList/editStu.vue"),
    "turn-page": turnPage
  }
};
</script>

<style>
</style>