import AppFooter from '../components/AppFooter/AppFooter.vue';

export default {
  title: 'BaseComponents/AppFooter',
  component: AppFooter,
};

const Template = (args) => ({
  components: { AppFooter },
  setup() {
    return { args };
  },
  template: '<AppFooter v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
