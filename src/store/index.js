import Vue from "vue";
import vuex from "vuex";
// import ContentStore from "./content"; //引入content.js
import VuexPersistence from "vuex-persist"; // 引入vue-persist 持久化存储 页面刷新后 vuex数据依然存在

Vue.use(vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default new vuex.Store({
  state: {
    router: null,
  },
  getters: {
    router(state) {
      return state.router
    }
  },
  plugins: [vuexLocal.plugin]
});
