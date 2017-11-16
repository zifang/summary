import * as types from '@/vuex/mutation-types.js';
import amapService from '@/service/amapService/amapService.js';

// initial state
const state = {
    CITY: "",
    ADDRESS: '',
    LOCATION: null,
    CITY_CODE: ""
};

// getters
const getters = {
    CITY: state => { return state.CITY; },
    ADDRESS: state => { return state.ADDRESS; },
    LOCATION: state => { return state.LOCATION; },
    CITY_CODE: state => { return state.CITY_CODE; }
};

// actions
const actions = {
    saveCity ({ commit, state }, city) {
        commit(types.SAVE_CITY, city);
    },
    saveAddress ({ commit, state }, address) {
        commit(types.SAVE_ADDRESS, address);
    },
    saveLocation ({ commit, state }, params) {
        commit(types.SAVE_LOCATION, params);
    },
    saveCityCode ({ commit, state }, cityCode) {
        commit(types.SAVE_CITY_CODE, cityCode);
    },
    async GET_ADDRESS({ commit }, location) {
        let { lng, lat } = location
        let subLoction = `${lng},${lat}`;
        let res = await amapService.getAddress(subLoction);
        let result = res.regeocode
        let stringlocation = JSON.stringify(location)
        sessionStorage.LOCATION = stringlocation
        sessionStorage.CITY_CODE = result.addressComponent.citycode
        sessionStorage.ADDRESS = result.formatted_address
        sessionStorage.CITY = result.addressComponent.province
        sessionStorage.firstLoad = 'false'
        commit('SAVE_LOCATION', location) //把径尾度给存起来
        commit('SAVE_CITY_CODE', result.addressComponent.citycode) //把城市码给存起来
        commit('SAVE_ADDRESS', result.formatted_address) //把城市的定位地址给存起来
        commit('SAVE_CITY', result.addressComponent.province) //把城市的定位地址给存起来
    }
};

// mutations
const mutations = {
    [types.SAVE_CITY](state, city) {
        state.CITY = city
    },
    [types.SAVE_ADDRESS](state, address) {
        state.ADDRESS = address
    },
    [types.SAVE_LOCATION](state, params) {
        state.LOCATION = params
    },
    [types.SAVE_CITY_CODE](state, cityCode) {
        state.CITY_CODE = cityCode
    }
};

export default {
  state,
  getters,
  actions,
  mutations
};  