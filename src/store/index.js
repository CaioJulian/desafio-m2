import Vue from 'vue'
import Vuex from 'vuex'
import carrinho from './modules/carrinho'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list_net: [
      {
        id: 1,
        title: "100MB",
        price: 99.99,
        state: false
      },
      {
        id: 2,
        title: "200MB",
        price: 119.99,
        state: false
      },
      {
        id: 3,
        title: "300MB",
        price: 129.99,
        state: false
      },
    ],
    list_tv: [
      {
        id: 1,
        title: "Ultimate HD",
        price: 139.99,
        state: false
      },
      {
        id: 2,
        title: "Full HD",
        price: 214.99,
        state: false
      },
    ],
    list_fixo: [
      {
        id: 1,
        title: "Ilimitado Fixo Brasil",
        price: 49.99,
        state: false
      },
    ],
  },
  getters: {
    disabledList(state) {
      var list = state.list_net.map(s => s.state);
      return !list.includes(true);
    }
  },
  mutations: {
    resetState(state, list) {
      list.forEach(item => {
        if (item.state) item.state = !item.state;
      })
    },

    toggleItemState(state, { list, index }) {
      list[index].state = !list[index].state;
    }
  },
  actions: {
    resetStateAll({ commit, state }) {
      const lists = [state.list_net, state.list_tv, state.list_fixo];
      lists.forEach(list => {
        commit('resetState', list);
      });
    }
  },
  modules: {
    carrinho
  }
})
