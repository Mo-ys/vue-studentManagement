<template>
  <table>
    <thead>
      <tr>
        <th>学号</th>
        <th>姓名</th>
        <th>性别</th>
        <th>邮箱</th>
        <th>年龄</th>
        <th>手机号</th>
        <th>住址</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody id="tbody">
      <tr v-for="(item, index) in stuList" :key="item.sNo">
        <td>{{ item.sNo }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.sex == 0 ? '男' : '女' }}</td>
        <td>{{ item.email }}</td>
        <td>{{ new Date().getFullYear() - Number((('' + item.birth).slice(0, 4))) }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.address }}</td>
        <td>
          <button class="btn edit" @click="showEdit(true, {...item, index: index})">编辑</button>&nbsp;
          <button class="btn del" @click="delStu(item.sNo)">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
  mounted () {
    this.$store.dispatch('getStuList');
  },
  computed: {
    ...mapState(['stuList'])
  },
  methods: {
      ...mapMutations(['setEditIsShow', 'setEditStuData']),
      showEdit (isShow, stuData) {
          this.setEditStuData(stuData);
          this.setEditIsShow(isShow);
      },
      delStu (sNo) {
        console.log(sNo);
        this.$store.dispatch('delStu', sNo);
      }
  }
};
</script>

<style>
</style>