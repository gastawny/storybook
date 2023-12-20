import { Meta, StoryObj } from '@storybook/react'
import { AwareButton, AwareButtonProps } from './index'

export default {
  title: 'Components/AwareButton',
  component: AwareButton,
} as Meta<AwareButtonProps>

type Story = StoryObj<typeof AwareButton>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}
