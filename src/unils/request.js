import axios from 'axios'
import store from 'vuex'
import Vue from 'vue'
axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
axios.defaults.headers.common['token'] = window.token || store.token || Vue.$token;

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if (config.contentType) {
        config.headers['Content-Type'] = config.contentType
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (response.code === -1) {
        Vue.router.push('/')
    }
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});