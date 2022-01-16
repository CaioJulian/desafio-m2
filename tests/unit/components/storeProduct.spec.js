import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'

import StoreProduct from '@/components/StoreProduct.vue'
import cart from '@/store/modules/cart'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)
localVue.filter('formatPrice', (value) => {
  return parseFloat(value).toFixed(2).replace('.', ',')
})

describe('StoreProduct.vue', () => {
  let actions
  let store

  beforeAll(() => {
    actions = {
      getLists: jest.fn(),
    }
    store = new Vuex.Store({
      actions,
      modules: {
        cart
      }
    })
  })

  it('Component StoreProduct is a instance', () => {
    const wrapper = shallowMount(StoreProduct, { store, localVue })
    expect(wrapper.exists()).toBe(true)
  })
})
