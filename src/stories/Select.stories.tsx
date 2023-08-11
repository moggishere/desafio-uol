import { Meta, StoryFn } from '@storybook/react';

import Select, { SelectProps } from '../components/Select';

export default {
  title: 'Component/Select',
  component: Select
  //   argTypes: { handleClick: { action: 'handleClick' } }
} as Meta;

const Template: StoryFn<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'label de select',
  disabled: false,
  options: ['id', 'name', 'email', 'phone', 'status'],
  setQueryType: (value) => console.log('User search query:', value),
  queryType: 'email'
};
