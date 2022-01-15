import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'

import Store from '@/components/Store.vue'
import carrinho from '@/store/modules/carrinho'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)
localVue.filter('formatPrice', (value) => {
  return parseFloat(value).toFixed(2).replace('.', ',')
})

describe('Store.vue', () => {
  let actions
  let store

  beforeAll(() => {
    actions = {
      getLists: jest.fn(),
    }
    store = new Vuex.Store({
      actions,
      modules: {
        carrinho
      }
    })
  })

  it('Component Store is a instance', () => {
    const wrapper = shallowMount(Store, { store, localVue })
    expect(wrapper.exists()).toBe(true)
  })
})
