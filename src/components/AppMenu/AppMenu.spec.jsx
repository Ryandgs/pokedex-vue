import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import AppMenu from './AppMenu.vue';

const wrapper = shallowMount(AppMenu);

describe('AppButton', () => {
  it('Should render correctly', () => {
    expect(wrapper.find('.menu__title').text())
      .toBe("Welcome Pokemon's Trainer");
  });
});
