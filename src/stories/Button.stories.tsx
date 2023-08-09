import { Meta, Story } from '@storybook/react';
import Button from '../components/Button/Button';

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: { handleClick: { action: 'handleClick' } }
} as Meta;

const Template = (
  args: JSX.IntrinsicAttributes & {
    children?: 'ReactNode';
    buttonType?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
  }
) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'label do botão',
  buttonType: 'primary',
  size: 'medium',
  disabled: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'botão secundário',
  buttonType: 'secondary',
  size: 'medium',
  disabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'botão disabled',
  buttonType: 'primary',
  size: 'medium',
  disabled: true
};

export const Large = Template.bind({});
Large.args = {
  children: 'botão largo',
  buttonType: 'primary',
  size: 'large',
  disabled: false
};

export const Small = Template.bind({});
Small.args = {
  children: 'botão pequeno',
  buttonType: 'secondary',
  size: 'small',
  disabled: false
};

export const LongText = Template.bind({});
LongText.args = {
  children: 'the quick brown fox jumps over the lazy dog',
  buttonType: 'secondary',
  size: 'large',
  disabled: false
};
