import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    message: 'this is data from the data store',
    path: '/',
    logged_in_user: { name: 'no user logged in' },
    token: '',
    students: [],
    formValue: {},
    showModal: false,
    enrollModal: false,
    details_api_path: '',
    active_rounds: [],
    showPayment: false,
  },
  getters,
  mutations,
  actions,
});

export default store;
