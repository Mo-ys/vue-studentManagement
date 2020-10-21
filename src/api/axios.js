import Axios from 'axios';
import url from './url';

// let appkey = {
//     appkey: 'moyueshi_1576073114202'
// };
const axios = Axios.create({
    baseURL: url.baseURL,
    params: {
        appkey: 'moyueshi_1576073114202'
    }
});

export default {
    findByPage (nowPage, pageSize) {
        return axios.get(url.findByPage, {params: {page: nowPage, size: pageSize, appkey: 'moyueshi_1576073114202'}});
    },
    upDateStu (data) {
        return axios.get(url.updateStudent, {params: {appkey: 'moyueshi_1576073114202', ...data}});
    },
    delStu (sNo) {
        return axios.get(url.delStu, {params: {sNo, appkey: 'moyueshi_1576073114202'}});
    },
    addStu (stuData) {
        return axios.get(url.addStu, {params: {...stuData, appkey: 'moyueshi_1576073114202'}});
    },
    searchStu (nowPage, pageSize, keyword) {
        return axios.get(url.searchStudent, {params: {page: nowPage, size: pageSize, search: keyword, sex: -1, appkey: 'moyueshi_1576073114202'}});
    }
}