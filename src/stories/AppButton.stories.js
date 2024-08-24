import AppButton from '../components/AppButton/AppButton.vue'

export default {
  title: 'BaseComponents/AppButton',
  component: AppButton,
  argTypes: {
    label: 'This is a button!',
  },
}

const Template = (args) => ({
  components: { AppButton },
  setup() {
    return { args }
  },
  template: '<AppButton v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  label: 'Button',
}

export const AnotherTemplate = Template.bind({})
AnotherTemplate.args = {
  label: 'I am another button :)',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'I am disabled :(',
  disabled: true,
}
