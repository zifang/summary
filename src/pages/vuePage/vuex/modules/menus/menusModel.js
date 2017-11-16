import * as types from '@/vuex/mutation-types';
import menuService from '@/service/menuService/menuService.js';
import shopService from '@/service/shopService/shopService.js';
import orderService from '@/service/orderService/orderService.js';

const state = {
  MENUS_LIST: [],
  NO_OPEN: false,
  SALED_FOODS: [],
  COUNT_SIGN: true,
  SHOP_MENU_EXTRA: {},
  SHOP_INFO: null,
  MENUS_TYPE_SETTING: null,
  USER_SHOP_ORDER: null
};
const getters = {
  MENUS_LIST: state => { return state.MENUS_LIST; },
  NO_OPEN: state => { return state.NO_OPEN; },
  SALED_FOODS: state => { return state.SALED_FOODS; },
  COUNT_SIGN: state => { return state.COUNT_SIGN; },
  SHOP_MENU_EXTRA: state => { return state.SHOP_MENU_EXTRA; },
  SHOP_INFO: state => { return state.SHOP_INFO; },
  MENUS_TYPE_SETTING: state => { return state.MENUS_TYPE_SETTING; },
  USER_SHOP_ORDER: state => { return state.USER_SHOP_ORDER; }
};
const actions = {
  CHANGE_COUNT_FLAG ({ commit }, boolean) {
    commit(types.CHANGE_COUNT_FLAG, boolean);
  },
  REDUCE_MENUS_LIST_COUNT ({ commit }, params) {
    commit(types.REDUCE_MENUS_LIST_COUNT, params);
  },
  SAVE_SALED_FOODS ({ commit }, params) {
    commit(types.SAVE_SALED_FOODS, params);
  },
  SAVE_NO_OPEN ({ commit }, boolean) {
    commit(types.SAVE_NO_OPEN, boolean);
  },
  SAVE_MENUS_LIST ({ commit }, params) {
    if (!params) return;
    let vm = params.Vue;
    let reqParams = params.reqParams;
    return menuService.getShopMenu(vm.$http, vm.baseUrl, reqParams).then(res => {
      let currentShopMenu = res.model || '';
      let shopMenuExtra = res.extra || '';
      commit(types.SAVE_MENUS_LIST, currentShopMenu);
      // console.log(shopMenuExtra);
      commit(types.SAVE_SHOP_MENU_EXTRA, shopMenuExtra);
    });
  },
  // SAVE_SHOP_MENU_EXTRA ({ commit }, value) {
  //   commit(types.SAVE_SHOP_MENU_EXTRA, value);
  // },
  CLEAR_MENUS_LIST_COUNT ({ commit }) {
    commit(types.CLEAR_MENUS_LIST_COUNT);
  },
  ADD_ITEM_COUNT ({ commit }, menuIndexList) {
    commit(types.ADD_ITEM_COUNT, menuIndexList);
  },
  REDUCE_ITEM_COUNT({ commit }, menuIndexList) {
    commit(types.REDUCE_ITEM_COUNT, menuIndexList);
  },
  CHANGE_SHOP_INFO ({ commit }, params) {
    if (!params) return;
    let vm = params.Vue;
    let reqParams = params.reqParams;
    return shopService.getShopInfo(vm.$http, vm.baseUrl, reqParams).then(res => {
        commit(types.CHANGE_SHOP_INFO, res);
    })
  },
  CHANGE_MENUS_TYPE_SETTING ({ commit }, params) {
    if (!params) return;
    let vm = params.Vue;
    let reqParams = params.reqParams;
    return menuService.getMenusTypeSetting(vm.$http, vm.baseUrl, reqParams).then(res => {
        commit(types.CHANGE_MENUS_TYPE_SETTING, res);
    })
  },
  CHANGE_USER_SHOP_ORDER ({ commit }, params) {
    if (!params) return;
    let vm = params.Vue;
    let reqParams = params.reqParams;
    return orderService.getUserShopOrder(vm.$http, vm.baseUrl, reqParams).then(res => {
        commit(types.CHANGE_USER_SHOP_ORDER, res);
    })
  }
};
const mutations = {
  [types.CHANGE_COUNT_FLAG] (state, boolean) {
    state.COUNT_SIGN = boolean;
  },
  [types.REDUCE_MENUS_LIST_COUNT] (state, params) {
    params.forEach((item, index) => {
      let menuIndexList = item.info.menuIndexList;
      menuIndexList.forEach((item2, index2) => {
        let [outIndex, innerIndex] = item2.split('_');
        let MENUS_LIST_OUT = state.MENUS_LIST[outIndex];
        if (MENUS_LIST_OUT.fsmenuclsid != null) {
          MENUS_LIST_OUT.categoryCount -= item.count;
        }
        let MENUS_LIST_INNER = MENUS_LIST_OUT.menuItemList[innerIndex];
        MENUS_LIST_INNER.menuCount -= item.count;
        if (MENUS_LIST_INNER.isShowUnit === 1) {
          MENUS_LIST_INNER.fiiscout = 1;
        } else {
          MENUS_LIST_INNER.menuItemUnitList.forEach((unit, unitIndex) => {
            if (unit.fsorderunit === item.info.fsorderunit) {
              unit.fistatusUnit = 2;
            }
          });
        }
      });
    });
  },
  [types.SAVE_SALED_FOODS](state, params) {
    state.SALED_FOODS = params;
  },
  [types.SAVE_NO_OPEN](state, boolean) {
    state.NO_OPEN = boolean;
  },
  [types.SAVE_MENUS_LIST](state, params) {
    state.MENUS_LIST = params;
  },
  [types.SAVE_SHOP_MENU_EXTRA](state, value) {
    // console.log(value);
    state.SHOP_MENU_EXTRA = value;
  },
  [types.CLEAR_MENUS_LIST_COUNT](state) {
    state.MENUS_LIST.forEach(item => {
      item.categoryCount = 0;
      item.menuItemList.forEach(item2 => {
        item2.menuCount = 0;
      });
    });
  },
  [types.ADD_ITEM_COUNT](state, menuIndexList) {
    menuIndexList.forEach(item => {
      let [outIndex, innerIndex] = item.split('_');
      let MENUS_LIST_OUT = state.MENUS_LIST[outIndex];
            //虚拟菜单fsmenuclsid返回值：微信: null，支付宝:null
      if (MENUS_LIST_OUT.fsmenuclsid != null) {
        MENUS_LIST_OUT.categoryCount ++;
      }

      MENUS_LIST_OUT.menuItemList[innerIndex].menuCount += 1;
    });
  },
  [types.REDUCE_ITEM_COUNT](state, menuIndexList) {
    menuIndexList.forEach(item => {
      let [outIndex, innerIndex] = item.split('_');
      let MENUS_LIST_OUT = state.MENUS_LIST[outIndex];
      if (MENUS_LIST_OUT.fsmenuclsid != null) {
        MENUS_LIST_OUT.categoryCount -= 1; 
      }
      if (MENUS_LIST_OUT.menuItemList[innerIndex].menuCount > 0) {
        MENUS_LIST_OUT.menuItemList[innerIndex].menuCount -= 1;
      }
    });
  },
  [types.CHANGE_SHOP_INFO] (state, value) {
    state.SHOP_INFO = value;
  },
  [types.CHANGE_MENUS_TYPE_SETTING] (state, value) {
    state.MENUS_TYPE_SETTING = value;
  },
  [types.CHANGE_USER_SHOP_ORDER] (state, value) {
    state.USER_SHOP_ORDER = value;
  }
};
export default { 
  state,
  getters,
  actions,
  mutations
};
