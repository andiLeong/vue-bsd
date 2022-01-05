import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    user: null,
    token: null,
    loggedIn: false,
    isAdmin: false,
    theme: 'light',
  },
  mutations: {
    SET_LOGGIN_DATA(state, data) {
      state.token = data.access_token;
      state.loggedIn = true;
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${data.access_token}`;

      state.user = data.user;
      localStorage.setItem('user', JSON.stringify(data));

      if (data.user.is_admin === true) {
        state.isAdmin = true;
      }
    },

    CLEAR_USER_DATA() {
      localStorage.removeItem('user');
      location.reload();
    },
    SET_THEME(state, theme) {
      state.theme = theme;
    },
    TOGGLE_THEME(state) {
      if (state.theme === 'light') {
        state.theme = 'dark';
        localStorage.setItem('theme', 'dark');
      } else {
        state.theme = 'light';
        localStorage.setItem('theme', 'light');
      }
    },
  },
  actions: {
    login({ commit }, credentials) {
      return axios.post('/api/login', credentials).then(({ data }) => {
        commit('SET_LOGGIN_DATA', data);
      });
    },

    // async login({ commit }, credentials) {
    //   return await axios
    //     .post('/api/login', credentials)
    //     .then(({ response }) => {
    //       commit('SET_USER_DATA', response.data);
    //     });

    // console.log(reponse.data.access_token);

    // return await axios.get('/api/user').then(({ data }) => {
    //   console.log(data);
    //   // commit('SET_USER_DATA', data);
    // });

    // },
    logout({ commit }) {
      commit('CLEAR_USER_DATA');
    },
    changeTheme({ commit }) {
      commit('TOGGLE_THEME');
    },
  },
  getters: {
    loggedIn(state) {
      return !!state.user;
    },
  },
});
