import { describe, it, expect, beforeEach, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import AppMenu from './AppMenu.vue'

const wrapper = shallowMount(AppMenu, {
  global: {
    plugins: [createTestingPinia({ createSpy: vi.fn })],
  },
})

describe('AppButton', () => {
  it('Should render correctly', () => {
    expect(wrapper.find('.menu__title').text()).toContain('Welcome guest')
  })
})
