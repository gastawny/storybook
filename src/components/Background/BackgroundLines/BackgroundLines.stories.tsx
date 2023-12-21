import { StoryObj, Meta } from '@storybook/react'
import { BackgroundLines, IBackgroundLinesProps } from './index'

export default {
  title: 'BackGround/BackGroundLines',
  component: BackgroundLines,
} as Meta<IBackgroundLinesProps>

type Story = StoryObj<typeof BackgroundLines>

export const Default: Story = {
  args: {
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
    children: (
      <h1 className="text-red-600">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis error dolorem enim
        nesciunt earum reprehenderit laudantium, tempora eum velit est provident, officiis nihil
        quia nam sequi iure accusamus cupiditate necessitatibus.
      </h1>
    ),
  },
}
