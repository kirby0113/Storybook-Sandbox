import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Card as CardComponent, CardProps } from '../../components/Cards/Card';

export default {
  title: 'Components/Cards',
  component: CardComponent,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<CardProps> = (args) => <CardComponent {...args} />;

export const Card = Template.bind({});
Card.args = {
  caption: 'タイトル',
  children: 'ボディ',
  image_url: '/images/test.jpg',
};
