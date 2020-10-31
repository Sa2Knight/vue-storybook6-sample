import Page from './Page'
export default { title: 'Page' }

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Page },
  template: `<Page />`
})

export const ForTwitter = Template.bind({})
ForTwitter.parameters = {
  backgrounds: {
    default: 'twitter'
  }
}

export const ForFacebook = Template.bind({})
ForFacebook.parameters = {
  backgrounds: {
    default: 'facebook'
  }
}
