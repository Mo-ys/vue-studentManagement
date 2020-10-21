import Vue from 'vue';
import alert from './alert.vue';

let alertVm = Vue.extend(alert);
export default function (status, msg) {
    let vm = new alertVm({
        el: document.createElement('div'),
        data: {
            status: status,
            msg: msg,
            isShow: false
        }
    });
    document.body.appendChild(vm.$el);
    vm.isShow = true;
    setTimeout(() => {
        vm.isShow = false;
    }, 3000);
}