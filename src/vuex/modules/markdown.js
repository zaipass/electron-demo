export const markdownModule = {
  state: () => {
    mkCount: 0,
    mkArray: [1, 3, 5, 7]
  },
  getters: {
    mkCountGetter: (state, getters, rootState, rootGetters) => (key) => {
      console.log('==========', getters, rootGetters, rootState, state)
      return state.mkArray.includes(key)
    },
  },
}