import { Meta, StoryObj } from '@storybook/react'
import { ILoadingProps, Loading } from './index'

export default {
  title: 'Components/Loading',
  component: Loading,
} as Meta<ILoadingProps>

type Story = StoryObj<typeof Loading>

export const Default: Story = {
  args: {
    text: 'Loading...',
    colors: ['#e65c00', '#18b201', '#0456c8'],
    bgColor: '#00000066',
    textColor: '#fbfbfb',
    fontFamily: 'Verdana',
  },
}
