import { Meta, StoryObj } from '@storybook/react'
import { ShinyCard, ShinyCardProps } from './index'

export default {
  title: 'Card/ShinyCard',
  component: ShinyCard,
} as Meta<ShinyCardProps>

type Story = StoryObj<typeof ShinyCard>

export const Default: Story = {
  args: {
    children: 'Card content',
    bgColor: '#1a202b',
    shinyColor: '#45f3ff',
    height: '400px',
    width: '320px',
  },
}
