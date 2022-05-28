import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  SlideButton as SlideButtonComponent,
  SlideButtonProps,
} from '../../components/Buttons/SlideButton';

export default {
  title: 'Components/Buttons',
  component: SlideButtonComponent,
  argTypes: {},
} as Meta;

const Template: Story<SlideButtonProps> = (args) => <SlideButtonComponent {...args} />;

export const SlideButton = Template.bind({});
SlideButton.args = {
  children: 'text',
};
