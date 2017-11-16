import * as types from '@/vuex/mutation-types.js'
let flag = false
function loop (state, params) {
  flag = false
  state.GOODS_INFO.forEach((item, index) => {
    params.forEach((item2, index2) => {
      let info = item.info
      if (info.fsitemid === item2.fsItemId && info.fsorderunit === item2.fsorderunit) {
        state.GOODS_INFO.splice(index, 1)
        state.GOODS_INFO_MONEY.splice(index, 1)
        state.COUNT_FLAG.push(item)
        flag = true
      }

      if (!flag) {

      } else {
        loop(state, params)
      }
    })
  })
}
const state = {
  IS_SHOW_FA: false,
  FOOD_ATTR: {},
  GOODS_INFO: [],
  GOODS_INFO_MONEY: [],
  COUNT_FLAG: []
}

const getters = {
  IS_SHOW_FA: state => { return state.IS_SHOW_FA },
  FOOD_ATTR: state => { return state.FOOD_ATTR },
  GOODS_INFO: state => { return state.GOODS_INFO },
  GOODS_INFO_MONEY: state => { return state.GOODS_INFO_MONEY },
  COUNT_FLAG: state => { return state.COUNT_FLAG }
}

const actions = {
  ADD_GOODS_INFO_ZHE ({ commit }, index) {
    commit(types.ADD_GOODS_INFO_ZHE, index)
  },
  DELEA_GOODS_INFO_ZHE ({ commit }, index) {
    commit(types.DELEA_GOODS_INFO_ZHE, index)
  },
  SALED_CLEAR_GOODS_INFO ({ commit }, params) {
    commit(types.SALED_CLEAR_GOODS_INFO, params)
  },
  CHANGE_FA_MODEL ({ commit }, boolean) {
    commit(types.CHANGE_FA_MODEL, boolean)
  },
  SAVE_FOOD_ATTR ({ commit }, params) {
    commit(types.SAVE_FOOD_ATTR, params)
  },
  CHANGE_UNIT ({ commit }, index) {
    commit(types.CHANGE_UNIT, index)
  },
  CHANGE_ASK ({ commit }, params) {
    commit(types.CHANGE_ASK, params)
  },
  INIT_GOODS_INFO ({ commit }, params) {
    commit(types.INIT_GOODS_INFO, params)
  },
  SAVE_GOODS_INFO_MONEY ({ commit }, obj) {
    commit(types.SAVE_GOODS_INFO_MONEY, obj)
  },
  CLEAR_GOODS_INFO_MONEY ({ commit }) {
    commit(types.CLEAR_GOODS_INFO_MONEY)
  },
  SAVE_GOODS_INFO ({ commit }, params) {
    commit(types.SAVE_GOODS_INFO, params)
  },
  CLEAR_SEND_GOODS_INFO ({ commit }, itemId) {
    commit(types.CLEAR_SEND_GOODS_INFO, itemId)
  },
  ADD_SEND_GOODS_INFO ({ commit }, params) {
    commit(types.ADD_SEND_GOODS_INFO, params)
  },
  CHANGE_GOODS_INFO ({ commit }, index) {
    commit(types.CHANGE_GOODS_INFO, index)
  },
  CLEAR_GOODS_INFO ({ commit }) {
    commit(types.CLEAR_GOODS_INFO)
  },
  ADD_GOODS_INFO_COUNT ({ commit }, index) {
    commit(types.ADD_GOODS_INFO_COUNT, index)
  },
  REDUCE_GOODS_INFO_COUNT ({ commit }, index) {
    commit(types.REDUCE_GOODS_INFO_COUNT, index)
  },
  REDUCE_ID_GOODS_INFO_COUNT ({ commit }, fsitemid) {
    commit(types.REDUCE_ID_GOODS_INFO_COUNT, fsitemid)
  }
}

const mutations = {
  [types.ADD_GOODS_INFO_ZHE] (state, index) {
    state.GOODS_INFO[index].info.zhe = true
  },
  [types.DELEA_GOODS_INFO_ZHE] (state, index) {
    state.GOODS_INFO[index].info.zhe = false
  },
  [types.SALED_CLEAR_GOODS_INFO] (state, params) {
    state.COUNT_FLAG = []
    loop(state, params)
  },
  [types.CHANGE_FA_MODEL] (state, boolean) {
    state.IS_SHOW_FA = boolean
  },
  [types.SAVE_FOOD_ATTR] (state, params) {
    state.FOOD_ATTR = params
    if (state.FOOD_ATTR.menuItemAskGroupOutVoList) {
      state.FOOD_ATTR.menuItemAskGroupOutVoList.forEach(outItem => {
              // 组设置成单选时默认选中第一个
        if (outItem.fiSingleAsk === 1 && outItem.menuItemAskOutVoList) {
          outItem.menuItemAskOutVoList[0].fidefault = 1
        }
      })
    }
  },
  [types.CHANGE_UNIT] (state, index) {
    state.FOOD_ATTR.menuItemUnitList.forEach((unitItem, unitIndex) => {
      if (unitIndex === index) {
        unitItem.fidefault = 1
      } else {
        unitItem.fidefault = 0
      }
    })
  },
  [types.CHANGE_ASK] (state, params) {
    let { outIndex, innerIndex } = params
    let menuItemAskGroupOutVoList = state.FOOD_ATTR.menuItemAskGroupOutVoList
    menuItemAskGroupOutVoList.forEach((item, index) => {
      if (index === outIndex) {
        let menuItemAskOutVoList = menuItemAskGroupOutVoList[index].menuItemAskOutVoList
        let fiSingleAsk = menuItemAskGroupOutVoList[index].fiSingleAsk

        menuItemAskOutVoList.forEach((item2, index2) => {
          if (fiSingleAsk === 1) {
            item2.fidefault = 0
          }
          if (index2 === innerIndex) {
            if (item2.fidefault === 1) {
              item2.fidefault = 0
            } else {
              item2.fidefault = 1
            }
          }
        })
      }
    })
  },
  [types.INIT_GOODS_INFO] (state, params) {
    state.GOODS_INFO = params
  },
  [types.SAVE_GOODS_INFO_MONEY] (state, obj) {
    // let { finallbargainPrice, index, finallPrice } = obj;
    let { index } = obj
    state.GOODS_INFO_MONEY[index] = obj
  },
  [types.CLEAR_GOODS_INFO_MONEY] (state) {
    state.GOODS_INFO_MONEY = []
  },
  [types.SAVE_GOODS_INFO] (state, params) {
    let goodInfo = state.GOODS_INFO
    for (let i = 0; i < goodInfo.length; i++) {
      if (goodInfo[i].info.fsitemid === params.info.fsitemid) {
        goodInfo.splice(i, 0, params)
        return
      }
    }
    state.GOODS_INFO.push(params)
  },
  [types.CLEAR_SEND_GOODS_INFO] (state, itemId) {
    state.GOODS_INFO.forEach(item => {
      if (item.info.fsitemid === itemId) {
        item.sendGoods = null
      }
    })
  },
  [types.ADD_SEND_GOODS_INFO] (state, params) {
    let { index, sendGoods } = params
    state.GOODS_INFO[index].sendGoods = sendGoods
  },
  [types.CHANGE_GOODS_INFO] (state, index) {
    state.GOODS_INFO[index].count += 1
  },
  [types.CLEAR_GOODS_INFO] (state) {
    state.GOODS_INFO = []
  },
  [types.ADD_GOODS_INFO_COUNT] (state, index) {
    state.GOODS_INFO[index].count += 1
  },
  [types.REDUCE_GOODS_INFO_COUNT] (state, index) {
    if (state.GOODS_INFO[index]) {
      let count = state.GOODS_INFO[index].count
      if (count === 1) {
        state.GOODS_INFO.splice(index, 1)
        state.GOODS_INFO_MONEY.splice(index, 1)
      } else {
        state.GOODS_INFO[index].count -= 1
      }
    }
  },
  [types.REDUCE_ID_GOODS_INFO_COUNT] (state, fsitemid) {
    state.GOODS_INFO.forEach((item, index) => {
      if (item.info.fsitemid === fsitemid) {
        if (item.count === 1) {
          state.GOODS_INFO.splice(index, 1)
          state.GOODS_INFO_MONEY.splice(index, 1)
        } else {
          item.count -= 1
        }
      }
    })
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
