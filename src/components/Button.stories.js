import Button from './Button'

export default {
  title: 'Button'
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: `<Button v-bind="$props" /> `
})

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'プライマリーボタン',
  size: 'medium'
}

export const Secondary = Template.bind({})
Secondary.args = {
  scondary: true,
  label: 'セカンダリーボタン'
}
