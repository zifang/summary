import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from '@/vuex/actions'
import * as getters from '@/vuex/getters'
import foodAttrModel from '@/vuex/modules/menus/foodAttrModel'
import menusModel from '@/vuex/modules/menus/menusModel'
import cartModel from '@/vuex/modules/menus/cartModel'
import activityModel from '@/vuex/modules/activity/activityModel'
import homeModel from '@/vuex/modules/home/homeModel'

Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  getters,
  modules: {
    menusModel,
    foodAttrModel,
    cartModel,
    activityModel,
    homeModel
  }
})
