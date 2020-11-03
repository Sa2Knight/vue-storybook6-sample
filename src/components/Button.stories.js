import Button from './Button'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered'
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: `<Button v-bind="$props" /> `
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'プライマリーボタン',
  primary: true,
  secondary: false
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  label: 'セカンダリーボタン',
  primary: false,
  secondary: true
}
