import { Story, Meta } from '@storybook/react'
import { Button, ButtonProps } from './index'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Button',
  onClick: () => {},
  className: 'w-[1.2rem] xl:w-[9.6rem] 2xl:w-[12rem] text-[1.2rem] xl:text-[1.28rem] 2xl:text-[1.6rem]',
}
