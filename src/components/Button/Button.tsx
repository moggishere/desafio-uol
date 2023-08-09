import React from 'react';
import * as S from './styles';

type ButtonProps = {
  children?: React.ReactNode;
  buttonType?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children = 'label do botão',
    buttonType = 'primary',
    size = 'medium',
    disabled = false
  } = props;
  //type = 'primary' (default) | 'secondary'
  //size = 'small' | 'medium' (default) | 'large'
  //disabled = boolean

  return (
    <S.ButtonBody disabled={disabled} buttonType={buttonType} buttonSize={size}>
      {children ? children : 'No label found'}
    </S.ButtonBody>
  );
};

export default Button;
