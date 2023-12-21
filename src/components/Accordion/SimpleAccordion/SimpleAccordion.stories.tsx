import type { Meta, StoryObj } from '@storybook/react'

import { SimpleAccordion } from './index'

export default {
  title: 'Accordion/SimpleAccordion/Root',
  component: SimpleAccordion.Root,
} satisfies Meta<typeof SimpleAccordion.Root>

type Story = StoryObj<typeof SimpleAccordion.Root>

export const OneItem: Story = {
  args: {
    textColor: '#fff',
    title: 'Title',
    bgColor: '#1c1c1c',
    borderColor: '#fff',
    children: (
      <>
        <SimpleAccordion.Item summary="What's the best way to study JavaScript?">
          Start With An Online Course.An online tutorial is probably the best way to learn
          JavaScript.If you're serious about learning fast, efficiently and without missing any
          important information, then you should consider enrolling in an online course.
        </SimpleAccordion.Item>
        <SimpleAccordion.Item summary="How do I play?">
          I suggest taking a look at Typescript and learning some popular frontend framework
          (Angular, React, Vue). If you are interested in backend, take a look at Node. js.
        </SimpleAccordion.Item>
      </>
    ),
  },
}
