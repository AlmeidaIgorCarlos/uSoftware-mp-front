import Vue from 'vue'
import Vuex from 'vuex'

import UserEntity from '../entities/user.entity'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userState: UserEntity
  },
  mutations: {
    setUserStateMutation(state, userActionData: UserEntity) {
      Object.assign(state, userActionData)
    }
  },
  actions: {
    setUserStateAction ({ commit }, userActionData: UserEntity) {
      commit('setUserStateMutation', userActionData)
    }
  },
  modules: {
  }
})