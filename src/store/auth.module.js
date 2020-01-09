import AuthService from '../services/auth.service';

const userInit = JSON.parse(localStorage.getItem('user'));
const initialState = userInit
  ? { status: { loggedIn: true }, user: { ...userInit } }
  : { status: {}, user: null };

const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        userL => {
          commit('loginSuccess', userL);
          return Promise.resolve(userL);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error.response.data);
        },
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    register({ commit }, user) {
      return AuthService.register(user).then(
        response => {
          commit('registerSuccess');
          return Promise.resolve(response.data);
        },
        error => {
          commit('registerFailure');
          return Promise.reject(error.response.data);
        },
      );
    },
  },
  mutations: {
    loginSuccess(state, user) {
      state.status = { loggedIn: true };
      state.user = user;
    },
    loginFailure(state) {
      state.status = {};
      state.user = null;
    },
    logout(state) {
      state.status = {};
      state.user = null;
    },
    registerSuccess(state) {
      state.status = {};
    },
    registerFailure(state) {
      state.status = {};
    },
  },
};

export default auth;
