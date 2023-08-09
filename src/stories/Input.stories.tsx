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
  //   setUserSearchQuery?: (e: any) => void;
  //   userSearchQuery?: (e: any) => void;
  queryStatus: 'default',
  label: 'Label placeholder'
};
