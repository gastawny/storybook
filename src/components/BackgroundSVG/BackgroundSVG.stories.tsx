import { StoryObj, Meta } from '@storybook/react'
import { BackGroundSVG, IBackGroundSVGProps } from './index'

export default {
  title: 'BackGround/BackGroundSVG',
  component: BackGroundSVG,
} as Meta<IBackGroundSVGProps>

type Story = StoryObj<typeof BackGroundSVG>

export const Dark: Story = {
  args: {
    bgColor: '#1a202b',
    colors: [
      '#45F3FF',
      '#4596BA',
      '#808080',
      '#4596BA',
      '#B2229C',
      '#7C3992',
      '#455087',
      '#443875',
      '#573AFF',
      '#B0C4DE',
    ],
  },
}

export const Light: Story = {
  args: {
    bgColor: '#fbfbfb',
    colors: [
      '#45F3FF',
      '#4596BA',
      '#808080',
      '#4596BA',
      '#B2229C',
      '#7C3992',
      '#455087',
      '#443875',
      '#573AFF',
      '#B0C4DE',
    ],
  },
}
