import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button as ButtonComponent, ButtonProps } from '../../components/Buttons/Button';

export default {
  title: 'Components/Buttons',
  component: ButtonComponent,
  argTypes: {},
} as Meta;

const Template: Story<ButtonProps> = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});
Button.args = {
  children: 'text',
};
