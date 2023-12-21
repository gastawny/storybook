import { Meta, StoryObj } from '@storybook/react'
import { BackgroundCards, IBackgroundCardsProps } from './index'

export default {
  title: 'Background/BackgroundCards',
  component: BackgroundCards,
} as Meta<IBackgroundCardsProps>

type Story = StoryObj<typeof BackgroundCards>

export const Dark: Story = {
  args: {
    bgColor: '#09090b',
    color: '#FFB4BE',
    cardColor: '#111828',
  },
}

export const Light: Story = {
  args: {
    bgColor: '#fff',
    color: '#FFB4BE',
    cardColor: '#eee',
  },
}
