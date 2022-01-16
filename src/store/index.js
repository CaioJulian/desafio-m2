import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list_net: [],
    list_tv: [],
    list_fixo: [],
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
    },

    getLists({ state }) {
      axios.get(`https://my-json-server.typicode.com/CaioJulian/desafio-m2/products`)
        .then(response => {
          let lists = response.data;
          state.list_net = lists.list_net;
          state.list_tv = lists.list_tv;
          state.list_fixo = lists.list_fixo;
        })
    }
  },
  modules: {
    cart
  }
})
