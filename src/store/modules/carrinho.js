export default {
  state: {
    items: [],
  },
  getters: {
    total(state) {
      var list = state.items.map(p => p.price);
      return list.reduce((total, atual) => total + atual, 0);
    }
  },
  mutations: {
    addItem(state, payload) {
      state.items.push(payload);
    },

    rmItem(state, payload) {
      var idx = state.items.indexOf(payload);
      if (idx > -1) {
        state.items.splice(idx, 1);
      }
    },

    resetItems(state){
      state.items = [];
    }

  },
  actions: {
    checkItem({ commit, state }, payload) {
      payload.forEach(function (item) {
        if (!item.state && state.items.includes(item)) {
          commit('rmItem', item);
        }
        else if (item.state) {
          commit('addItem', item);
        }
      })
    }
  }
}