import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    clickArray: [1, 3],
  },
  getters: {
    countGetter: function (state) {
      return state.count
    },
    clickGetter: (state) => (id) => {
      return state.clickArray.includes(id)
    },
  },
  mutations: {
    add(state, payload) {
      state.count += payload
    }
  },
  actions: {
    addAction (context) {
      console.lsog(context, '=======context=======')
      context.commit('add', 1)
    },
  }
})

export default store