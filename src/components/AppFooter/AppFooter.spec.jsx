import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils';
import AppFooter from './AppFooter.vue';

describe('AppFooter', async () => {
  it('Should render correctly', () => {
    const wrapper = shallowMount(AppFooter);

    expect(wrapper.find('p.footer').text())
      .toBe('ryan_dgs ©  github/Ryandgs');
  });
});
