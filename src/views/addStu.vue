<template>
  <div class="add-student content" id="add-student">
    <form id="add-student-form">
      <div>
        <label for="add-name">姓名</label>
        <input type="text" name="name" id="add-name" v-model="stuData.name"/>
      </div>
      <div>
        <label for>性别</label>
        <input type="radio" id="add-male" name="sex" value="0" checked v-model="stuData.sex"/>
        <label for="add-male" class="radio-label">男</label>
        <input type="radio" id="add-female" name="sex" value="1" v-model="stuData.sex"/>
        <label for="add-female" class="radio-label">女</label>
      </div>
      <div>
        <label for="add-sNo">学号</label>
        <input type="text" name="sNo" id="add-sNo" v-model="stuData.sNo"/>
      </div>
      <div>
        <label for="add-email">邮箱</label>
        <input type="text" name="email" id="add-email" v-model="stuData.email"/>
      </div>
      <div>
        <label for="add-birth">出生年</label>
        <input type="text" name="birth" id="add-birth" v-model="stuData.birth"/>
      </div>
      <div>
        <label for="add-phone">手机号</label>
        <input type="text" name="phone" id="add-phone" v-model="stuData.phone"/>
      </div>
      <div>
        <label for="add-address">住址</label>
        <input type="text" name="address" id="add-address" v-model="stuData.address"/>
      </div>
      <div class="button">
        <label for>&nbsp;</label>
        <input type="submit" value="提交" class="btn" id="add-student-btn" @click.prevent="addStu(stuData)"/>
        <input type="reset" value="重置" class="btn" />
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data () {
    return {
      stuData: {
        name: '',
        sex: 0,
        email: '',
        sNo: '',
        phone: '',
        birth: '',
        address: ''
      }
    };
  },
  methods: {
    ...mapActions(['addStu'])
  }
};
</script>

<style>
</style>