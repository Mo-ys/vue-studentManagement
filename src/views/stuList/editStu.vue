<template>
  <transition
    name="edit"
  >
    <div class="dialog" v-show="editIsShow">
      <div class="mask" @click="showEdit(false)" :style="{height: '100%'}"></div>
      <div class="dialog-content">
        <h2>编辑信息</h2>
        <form id="edit-student-form">
          <div>
            <label for="name">姓名</label>
            <input type="text" name="name" id="name" :value="editStuData.name" @input="setStuData('name', $event)"/>
          </div>
          <div>
            <label for>性别</label>
            <input type="radio" id="male" name="sex" value="0" :checked="editStuData.sex == 0"  @change="setStuData('sex', $event)"/>
            <label for="male" class="radio-label">男</label>
            <input type="radio" id="female" name="sex" value="1" :checked="editStuData.sex == 1"  @change="setStuData('sex', $event)"/>
            <label for="female" class="radio-label">女</label>
          </div>
          <div>
            <label for="sNo">学号</label>
            <input type="text" name="sNo" id="sNo" :value="editStuData.sNo" disabled/>
          </div>
          <div>
            <label for="email">邮箱</label>
            <input type="text" name="email" id="email" :value="editStuData.email" @input="setStuData('email', $event)"/>
          </div>
          <div>
            <label for="birth">出生年</label>
            <input type="text" name="birth" id="birth" :value="editStuData.birth" @input="setStuData('birth', $event)"/>
          </div>
          <div>
            <label for="phone">手机号</label>
            <input type="text" name="phone" id="phone" :value="editStuData.phone" @input="setStuData('phone', $event)"/>
          </div>
          <div>
            <label for="address">住址</label>
            <input type="text" name="address" id="address" :value="editStuData.address" @input="setStuData('address', $event)"/>
          </div>
          <div class="button">
            <label for>&nbsp;</label>
            <input type="submit" value="提交" class="btn" id="edit-student-btn" @click.prevent="commit"/>
            <input type="reset" value="重置" class="btn" />
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations, mapActions} from "vuex";
export default {
  data () {
    return {
      stuData: {}
    };
  },
  computed: {
    ...mapState(["editIsShow", "editStuData"])
  },
  methods: {
    ...mapMutations(["setEditIsShow", "setEditStuData"]),
    ...mapActions(['updateStu']),
    showEdit(isShow) {
      this.setEditIsShow(isShow);
    },
    setStuData (key, $event) {
      this.stuData[key] = $event.target.value;
      // console.log(key, $event);
    },
    commit() {
      this.updateStu(Object.assign(this.editStuData, this.stuData));
    }
  }
};
</script>

<style>
    .edit-enter, .edit-leave-to{
        top: -100%;
        opacity: 0;
        height: 0;
    }
    .edit-enter-active, .edit-leave-active{
        transition: all .3s ease-in-out;
    }
    .edit-enter-to, .edit-leave{
        top: 0;
        opacity: 1;
        height: 100%;
    }
</style>