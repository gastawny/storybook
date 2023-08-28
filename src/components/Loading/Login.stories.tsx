import { Story, Meta } from '@storybook/react'
import { ILoadingProps, Loading } from './index'

export default {
  title: 'Components/Loading',
  component: Loading,
} as Meta

const Template: Story<ILoadingProps> = (args) => <Loading {...args} />

export const Default = Template.bind({})
Default.args = {
  colors: ['#e65c00', '#18b201', '#0456c8'],
  bgColor: '#00000066',
  textColor: '#fbfbfb',
  text: 'Loading...',
}
