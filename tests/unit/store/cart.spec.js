import store from '@/store'

describe('Cart.js', () => {

  test('Getters "total" return 0', () => {
    expect(store.getters.total).toBe(0);
  })

  test('Getters "total" return 99.99', () => {
    store.state.cart.items = [{
      id: 1,
      title: "100MB",
      price: 99.99,
      state: true
    }];
    expect(store.getters.total).toBe(99.99);
  })

  test('Mutations "addItem" list add item', () => {
    store.state.cart.items = [];
    const item = {
      id: 1,
      title: "100MB",
      price: 99.99,
      state: true
    };
    store.commit("addItem", item);
    expect(store.state.cart.items[0]).toBe(item);
  })

  test('Mutations "rmItem" list remove item', async () => {
    store.state.cart.items = [];
    const item = {
      id: 1,
      title: "100MB",
      price: 99.99,
      state: true
    };
    await store.commit("addItem", item);

    await store.commit("rmItem", item);
    expect(store.state.cart.items).toEqual([]);
  })

  test('Mutations "resetItems" reset list items', async () => {
    store.state.cart.items = [];
    const item = {
      id: 1,
      title: "100MB",
      price: 99.99,
      state: true
    };
    await store.commit("addItem", item);

    await store.commit("resetItems", item);
    expect(store.state.cart.items).toEqual([]);
  })

  test('Actions "checkItem" check item add/rm', async () => {
    store.state.cart.items = [];
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

    expect(store.state.cart.items).toEqual([list_net[0]]);
  })
})
