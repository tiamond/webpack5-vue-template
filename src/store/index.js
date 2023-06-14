import {
  createStore
} from 'vuex'

const store = createStore({
  state: {
    count: 1
  },
  actions: {
    add ({
      commit
    }) {
      commit('add')
    }
  },
  mutations: {
    add (state) {
      state.count++
    }
  },
  getters: {
    getCount (state) {
      return state.count
    }
  }
})

export default store
