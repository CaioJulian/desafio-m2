import store from '@/store'

describe('Carrinho.js', () => {

  test('Getters "total" return 0', () => {
    expect(store.getters.total).toBe(0);
  })

  test('Getters "total" return 99.99', () => {
    store.state.carrinho.items = [{
      id: 1,
      title: "100MB",
      price: 99.99,
      state: true
    }];
    expect(store.getters.total).toBe(99.99);
  })

  test('Mutations "addItem" list add item', () => {
    store.state.carrinho.items = [];
    const item = {
      id: 1,
      title: "100MB",
      price: 99.99,
      state: true
    };
    store.commit("addItem", item);
    expect(store.state.carrinho.items[0]).toBe(item);
  })

  test('Mutations "rmItem" list remove item', async () => {
    store.state.carrinho.items = [];
    const item = {
      id: 1,
      title: "100MB",
      price: 99.99,
      state: true
    };
    await store.commit("addItem", item);

    await store.commit("rmItem", item);
    expect(store.state.carrinho.items).toEqual([]);
  })

  test('Mutations "resetItems" reset list items', async () => {
    store.state.carrinho.items = [];
    const item = {
      id: 1,
      title: "100MB",
      price: 99.99,
      state: true
    };
    await store.commit("addItem", item);

    await store.commit("resetItems", item);
    expect(store.state.carrinho.items).toEqual([]);
  })

  test('Actions "checkItem" check item add/rm', async () => {
    store.state.carrinho.items = [];
    const list_net = [{
      id: 1,
      title: "100MB",
      price: 99.99,
      state: true
    },
    {
      id: 2,
      title: "200MB",
      price: 119.99,
      state: false
    }];
    await store.dispatch("checkItem", list_net);

    expect(store.state.carrinho.items).toEqual([list_net[0]]);
  })
})
