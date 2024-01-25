import { Meta, StoryObj } from '@storybook/react'
import { Item, SimpleAccordionItemProps } from './index'

export default {
  title: 'Accordion/SimpleAccordion/Item',
  component: Item,
} as Meta<SimpleAccordionItemProps>

type Story = StoryObj<typeof Item>

/* eslint-disable */
export const Default: Story = {
  args: {
    summary: "What's the best way to study JavaScript?",
    children:
      "Start With An Online Course.An online tutorial is probably the best way to learn JavaScript. If you're serious about learning fast, efficiently and without missing any important information, then you should consider enrolling in an online course.",
  },
}
