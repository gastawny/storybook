import { Story, Meta } from '@storybook/react'
import { BackGroundSVG } from './index'

export default {
  title: 'Components/BackGroundSVG',
  component: BackGroundSVG,
} as Meta

const Template: Story<{ colors: string[] }> = (args) => <BackGroundSVG {...args} />

export const Default = Template.bind({})
Default.args = {
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
}
