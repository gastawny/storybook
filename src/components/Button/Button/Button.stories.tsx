import { Meta, StoryObj } from '@storybook/react'
import { Button, IButtonProps } from './index'

export default {
  title: 'Button/Button',
  component: Button,
} as Meta<IButtonProps>

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button',
    onClick: () => {},
    className:
      'text-white font-sans w-[8rem] xl:w-[9.6rem] 2xl:w-[12rem] text-[1.2rem] xl:text-[1.28rem] 2xl:text-[1.6rem]',
    bgColor: '#0a0d11',
    primaryColor: '#45f3ff',
    secondaryColor: '#573aff',
    border: '#000',
  },
}
