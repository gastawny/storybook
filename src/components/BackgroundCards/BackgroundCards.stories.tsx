import { Story, Meta } from '@storybook/react'
import { BackgroundCards, IBackgroundCardsProps } from './index'

export default {
  title: 'Components/BackgroundCards',
  component: BackgroundCards,
} as Meta

const Template: Story<IBackgroundCardsProps> = (args) => <BackgroundCards {...args} />

export const Default = Template.bind({})
Default.args = {
  bgColor: '#111828',
  color: '#FFB4BE',
}
