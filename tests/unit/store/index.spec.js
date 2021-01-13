import store from '@/store'
import axios from 'axios';

jest.mock('axios');

describe('Index.js', () => {

  test('Getters disabledList return true', () => {
    store.state.list_net = [{
      id: 1,
      title: "100MB",
      price: 99.99,
      state: false
    }];
    expect(store.getters.disabledList).toBe(true);
  })

  test('Getters disabledList return false', () => {
    store.state.list_net = [{
      id: 1,
      title: "100MB",
      price: 99.99,
      state: true
    }];
    expect(store.getters.disabledList).toBe(false);
  })

  test('Mutations resetState list state false', () => {
    const list = [{
      id: 1,
      title: "100MB",
      price: 99.99,
      state: true
    }];
    store.commit("resetState", list);
    expect(list[0].state).toBe(false);
  })

  test('Mutations toggleItemState item state true/false', () => {
    const index = 0;
    const list = [{
      id: 1,
      title: "100MB",
      price: 99.99,
      state: false
    }];
    store.commit("toggleItemState", { list, index });
    expect(list[0].state).toBe(true);
    store.commit("toggleItemState", { list, index });
    expect(list[0].state).toBe(false);
  })

  test('Actions resetStateAll list all state false', () => {
    store.state.list_net = [{
      id: 1,
      title: "100MB",
      price: 99.99,
      state: true
    }];
    store.state.list_tv = [{
      id: 1,
      title: "Ultimate HD",
      price: 139.99,
      state: true
    }];
    store.state.list_fixo = [{
      id: 1,
      title: "Ilimitado Fixo Brasil",
      price: 49.99,
      state: true
    }];
    store.dispatch("resetStateAll");
    expect(store.state.list_net[0].state).toBe(false);
    expect(store.state.list_tv[0].state).toBe(false);
    expect(store.state.list_fixo[0].state).toBe(false);
  })

  /* test.only('Actions getLists list all', async () => {
    const data = {
      list_net: [{
        id: 1,
        title: "100MB",
        price: 99.99,
        state: false
      }]
    }

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await store.dispatch("getLists")
    
    expect(store.state.list_net).toEqual(data);
  }) */
})
