import * as types from '@/vuex/mutation-types.js'
import { saveCache } from '@/pages/menus/model/cache.js'
const state = {
  CART_BTN_COLOR: true,
  CARD_SHOW: true,
  CACHE: '',
  PAID_AMOUNT: 0,
  BARGAIN_PRICE: 0, // 打折价 ## 当后端不返还价格时使用 ##
  SECOND_PRICE: 0,
  TIPS_ISSHOW: false // 购物车优惠提示是否显示
}
const actions = {
  CHANGE_CART_BTN_COLOR ({ commit }, boolean) {
    commit(types.CHANGE_CART_BTN_COLOR, boolean)
  },
  SAVE_CACHE ({ commit, state }, params) {
    if (!params) return
    let shopId = params.shopId || ''
    let totalCount = params.totalCount || ''
    setTimeout(() => {
      let cache = saveCache(params.goods_info, params.GOODS_INFO_MONEY, shopId, totalCount)
      commit(types.SAVE_CACHE, cache)
    }, 100)
  },
  SAVE_PAID_AMOUNT ({ commit }, paidAmount) {
    commit(types.SAVE_PAID_AMOUNT, paidAmount)
  },
  SAVE_BARGAIN_PRICE ({ commit }, price) {
    commit(types.SAVE_BARGAIN_PRICE, price)
  },
  SAVE_SECOND_PRICE ({ commit }, price) {
    setTimeout(() => {
      commit(types.SAVE_SECOND_PRICE, price)
    }, 0) // 解决vue devtools 一直请求的问题
  },
  CHANGE_TIPS_ISSHOW ({ commit }, boolean) {
    commit(types.CHANGE_TIPS_ISSHOW, boolean)
  }
}
const getters = {
  CART_BTN_COLOR: state => { return state.CART_BTN_COLOR },
  CARD_SHOW: state => { return state.CARD_SHOW },
  CACHE: state => { return state.CACHE },
  PAID_AMOUNT: state => { return state.PAID_AMOUNT },
  BARGAIN_PRICE: state => { return state.BARGAIN_PRICE },
  SECOND_PRICE: state => { return state.SECOND_PRICE },
  TIPS_ISSHOW: state => { return state.TIPS_ISSHOW }
}

const mutations = {
  [types.CHANGE_CART_BTN_COLOR] (state, boolean) {
    state.CART_BTN_COLOR = boolean
  },
  [types.CHANGE_CARD_SHOW] (state, boolean) {
    state.CARD_SHOW = boolean
  },
  [types.SAVE_CACHE] (state, cache) {
    state.CACHE = cache
  },
  [types.SAVE_PAID_AMOUNT] (state, paidAmount) {
    state.PAID_AMOUNT = paidAmount
  },
  [types.SAVE_SECOND_PRICE] (state, price) {
    state.SECOND_PRICE = price
  },
  [types.SAVE_BARGAIN_PRICE] (state, price) {
    state.BARGAIN_PRICE = price
  },
  [types.CHANGE_TIPS_ISSHOW] (state, boolean) {
    state.TIPS_ISSHOW = boolean
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
