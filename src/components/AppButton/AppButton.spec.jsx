import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import AppButton from './AppButton.vue'

const defaultTitle = 'This is a button'

function getMountedComponent(Component, propsData) {
  return shallowMount(Component, { propsData })
}

describe('AppButton', () => {
  it('Should render correctly', () => {
    const wrapper = getMountedComponent(AppButton, {
      label: defaultTitle,
    })

    expect(wrapper.html()).toContain(defaultTitle)
  })

  it('Should emit a click event when active', () => {
    const wrapper = getMountedComponent(AppButton, {
      label: defaultTitle,
      disabled: false,
    })

    wrapper.find('button').trigger('click')

    expect(wrapper.emitted('onClick')).toBeTruthy()
  })

  it('Should not emit a click event when disabled', () => {
    const wrapper = getMountedComponent(AppButton, {
      label: defaultTitle,
      disabled: true,
    })

    wrapper.find('button').trigger('click')

    expect(wrapper.emitted('onClick')).toBeFalsy()
  })
})
