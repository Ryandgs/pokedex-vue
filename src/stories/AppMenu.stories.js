import AppMenu from '../components/AppMenu/AppMenu.vue';

export default {
  title: 'BaseComponents/AppMenu',
  component: AppMenu,
};

const Template = (args) => ({
  components: { AppMenu },
  setup() {
    return { args };
  },
  template: '<AppMenu v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
