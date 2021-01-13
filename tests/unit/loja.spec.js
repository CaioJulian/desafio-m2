import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'

import Loja from '@/components/Loja.vue'
import carrinho from '@/store/modules/carrinho'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)
localVue.filter('formatPrice', (value) => {
  return parseFloat(value).toFixed(2).replace('.', ',')
})

describe('Loja.vue', () => {
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

  it('Componente Loja é uma instancia', () => {
    const wrapper = shallowMount(Loja, { store, localVue })
    expect(wrapper.exists()).toBe(true)
  })
})
