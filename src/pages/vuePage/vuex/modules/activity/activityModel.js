import * as types from '@/vuex/mutation-types';
import shopActivityService from '@/service/shopActivityService/shopActivityService.js';
const state = {
  ACTIVITY_LIST: {},
  // ACTIVITY_SHOW: false,
  MONEY: '',
  // ACTIVITY_TIP: {},
  ACT_MESSAGE: ''
};
const getters = {
  // ACTIVITY_SHOW: state => { return state.ACTIVITY_SHOW; },
  ACTIVITY_LIST: state => { return state.ACTIVITY_LIST; },
  MONEY: state => { return state.MONEY; },
  // ACTIVITY_TIP: state => { return state.ACTIVITY_TIP; },
  ACT_MESSAGE: state => { return state.ACT_MESSAGE; }
};
const actions = {
  SAVE_ACTIVITY_LIST({ commit }, params) {
    if (!params) return;
    let vm = params.Vue;
    let reqParams = params.reqParams;
    return shopActivityService.getShopActivityList(vm.$http, vm.baseUrl, reqParams).then(res => {
      let currentShopActivityList = res.model;
      commit(types.SAVE_ACTIVITY_LIST, currentShopActivityList);
    });
  },
  SAVE_MONEY({ commit }, money) {
    commit(types.SAVE_MONEY, money);
  },
  SAVE_ACT_MESSAGE({ commit }, money) {
    commit(types.SAVE_ACT_MESSAGE, money);
  }
};
const mutations = {
  // [types.SAVE_ACTIVITY_SHOW] (state, boolean) {
  //   state.ACTIVITY_SHOW = boolean;
  // },
  // [types.SAVE_ACTIVITY_TIP] (state, params) {
  //   state.ACTIVITY_TIP = params;
  // },
  [types.SAVE_MONEY] (state, money) {
    state.MONEY = money;
  },
  [types.SAVE_ACTIVITY_LIST](state, params) {
    state.ACTIVITY_LIST = params;
  },
  [types.SAVE_ACT_MESSAGE](state, actMessage) {
    state.ACT_MESSAGE = actMessage;
  }
};
export default{ 
  state,
  getters,
  actions,
  mutations
};