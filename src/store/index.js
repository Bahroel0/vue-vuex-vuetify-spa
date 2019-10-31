import Vue from "vue";
import Vuex from "vuex";
import actions from "../vuex/actions";
import getters from "../vuex/getters";
import mutations from "../vuex/mutations";
import states from "../vuex/states";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: actions,
  getters: getters,
  modules: {},
  mutations: mutations,
  state: states
});
