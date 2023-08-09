import { Meta, StoryFn } from '@storybook/react';
import Input, { InputProps } from '../components/Input';

export default {
  title: 'Component/Input',
  component: Input,
  argTypes: { handleClick: { action: 'handleClick' } }
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  setUserSearchQuery: (value) => console.log('User search query:', value),
  //   userSearchQuery: '',
  queryStatus: 'default',
  label: 'Label do campo',
  disabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  setUserSearchQuery: (value) => console.log('User search query:', value),
  //   userSearchQuery: '',
  queryStatus: 'default',
  label: 'campo desabilitado',
  disabled: true
};
