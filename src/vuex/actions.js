import types from "./mutation-types";
import Cookie from "js-cookie";

export default {
  setUser({ commit }, payload) {
    commit(types.SET_USER_STATE, payload);
  },
  login({ commit }, payload) {
    commit(types.SET_USER_STATE, payload);
    Cookie.set("user", JSON.stringify(payload));
    return true;
  },
  logout({ commit }) {
    commit(types.SET_USER_STATE, null);
    Cookie.remove("user");
  }
};
