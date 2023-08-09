import { JSX, ReactNode } from 'react';
import Button from '../components/Button/Button';

export default {
  title: 'Component/Button',
  component: Button
};

const Template = (
  args: JSX.IntrinsicAttributes & {
    children?: 'ReactNode';
    buttonType?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
  }
) => <Button {...args} />;

export const Default = Template.bind({});
Default.arg = {
  children: 'label do botão',
  buttonType: 'primary',
  size: 'medium',
  disabled: false
};

// export const Default = () => (
//   <Button buttonType={'primary'} disabled={false} size={'small'}>
//     label do botão
//   </Button>
// );
