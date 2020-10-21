import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios';
import alert from '../tools/alert';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stuList: null,
    editIsShow: false,
    countPage: 0,
    nowPage: 1,
    showStuListNum: 3 ,
    editStuData: {},
    keyword: ''
  },
  mutations: {
    setKeyword (state, val) {
      state.keyword = val;
    },
    setStuList (state, data) {
      state.stuList = data;
    },
    updateStuList (state, data) {
      // console.log(state.stuList[data.index]);
      // Vue.set(state.stuList, data.index, data);
      // set splice 都不能用 改了之后 会失去之后的侦听 导致。。。（知识盲区）
      Object.assign(state.stuList[data.index], data);
      console.log(state.stuList);
    },
    setEditIsShow (state, isShow) {
      state.editIsShow = isShow;
    },
    setNowPage (state, nowPage) {
      state.nowPage = nowPage;
    },
    setCountPage (state, countPage) {
      state.countPage = Math.ceil(countPage / state.showStuListNum);
    },
    setShowStuListNum (state, showStuListNum) {
      state.showStuListNum = showStuListNum;
    },
    setEditStuData (state, data) {
      Object.assign(state.editStuData, data);
    }
  },
  actions: {
    getStuList ({commit, state}) {
      axios.findByPage(state.nowPage, state.showStuListNum).then(res => {
        console.log(res);
        commit('setStuList', res.data.data.findByPage);
        commit('setCountPage', res.data.data.cont);
      });
    },
    turnPage ({dispatch, commit, state}, nowPage) {
      commit('setNowPage', nowPage);
      if (state.keyword) {
        dispatch('searchStu', state.keyword);
      } else {
        dispatch('getStuList');
      }
    },
    updateStu ({commit}, data) {
      axios.upDateStu(data).then(res => {
        commit('setEditIsShow', false);
        commit('updateStuList', data);
        // console.log('成果:',res);
        alert(res.data.status, res.data.msg);
      });
    },
    delStu ({dispatch, state}, sNo) {
      console.log(sNo);
      axios.delStu(sNo).then(res => {
        if (res.data.status === 'success') {
          if (state.countPage == Math.ceil((state.stuList.length - 1) / state.showStuListNum)) {
            dispatch('turnPage', state.nowPage);
          } else {
            dispatch('turnPage', state.nowPage == 1 ? 1 : state.nowPage - 1);
          }
        }
        alert(res.data.status, res.data.msg);
      });
    },
    addStu ({state},stuData) {
      console.log(stuData, state.nowPage);
      return axios.addStu(stuData).then(res => {
        alert(res.data.status, res.data.msg);
      });
    },
    search ({commit, dispatch}, value) {
      commit('setKeyword', value);
      dispatch('searchStu', value).then(res => {
        alert(res.status, res.msg);
      });
    },
    searchStu ({state, commit}, keyword) {
      return axios.searchStu(state.nowPage, state.showStuListNum, keyword).then(res => {
        if (res.data.status == 'success') {
          commit('setCountPage', res.data.data.cont);
          commit('setStuList', res.data.data.searchList);
        }
        return {
          status: res.data.status,
          msg: res.data.msg
        };
      });
    }
  }
})
