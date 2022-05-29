import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CardList as CardListComponent, CardListProps } from '../../components/Cards/CardList';

export default {
  title: 'Components/Cards',
  component: CardListComponent,
  argTypes: {},
} as Meta;

const Template: Story<CardListProps> = (args) => <CardListComponent {...args} />;

export const CardList = Template.bind({});
CardList.args = {
  cardDatas: [
    {
      caption: 'test1',
      onClick: () => {},
    },
    {
      caption: 'test3',
      onClick: () => {},
    },
    {
      caption: 'test4',
      onClick: () => {},
    },
    {
      caption: '本日のアウトプット',
      onClick: () => {},
    },
  ],
};
