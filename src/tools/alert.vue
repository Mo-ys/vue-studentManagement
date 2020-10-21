<template>
  <transition name="alert">
    <div class="alert-wrap" :class="{success: status === 'success', fail: status === 'fail'}" v-if="isShow">
      <div class="success" v-if="status === 'success'">{{ msg }}</div>
      <div class="fail" v-if="status === 'fail'">{{ msg }}</div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style>
.alert-wrap {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 20px;
  min-width: 380px;
  border-radius: 4px;
  padding: 15px 20px 15px 50px;
}
.alert-wrap.fail {
  border: 1px solid #e7dbcc;
  box-shadow: 0 2px 4px -2px #999;
  background-color: #f3e9db;
  color: #eba33e;
}
.alert-wrap.success {
  background-color: #e5fada;
  color: #8ef856;
  border: 1px solid #dae2f6;
}
.alert-wrap > div::before {
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  background-size: 99% 99%;
  background-repeat: no-repeat;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
}
.alert-wrap > div.success::before {
  background-image: url(../assets/success.svg);
}
.alert-wrap > div.fail::before {
  background-image: url(../assets/fail.svg);
}
.alert-enter,
.alert-leave-to{
    top: -40px;
    opacity: 0;
}
.alert-enter-active,
.alert-leave-active{
    transition: all .3s ease-in-out;
}
.alert-enter-to,
.alert-leave{
    top: 20px;
    opacity: 1;
}
</style>