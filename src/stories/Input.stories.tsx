import { Meta, StoryFn } from '@storybook/react';
import Input, { InputProps } from '../components/Input';

export default {
  title: 'Component/Input',
  component: Input,
  argTypes: { handleClick: { action: 'handleClick' } },
  parameters: {
    layout: 'centered'
  }
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  setUserSearchQuery: (value) => console.log('User search query:', value),
  //   userSearchQuery: '',
  queryStatus: 'info',
  label: 'Label do campo',
  disabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  setUserSearchQuery: (value) => console.log('User search query:', value),
  queryStatus: 'info',
  label: 'campo desabilitado',
  disabled: true
};

export const Success = Template.bind({});
Success.args = {
  setUserSearchQuery: (value) => console.log('User search query:', value),
  queryStatus: 'success',
  label: 'input success',
  disabled: false
};

export const Attention = Template.bind({});
Attention.args = {
  setUserSearchQuery: (value) => console.log('User search query:', value),
  queryStatus: 'attention',
  label: 'input attention',
  disabled: false
};

export const Error = Template.bind({});
Error.args = {
  setUserSearchQuery: (value) => console.log('User search query:', value),
  queryStatus: 'error',
  label: 'input error',
  disabled: false
};
