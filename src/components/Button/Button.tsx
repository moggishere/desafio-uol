import React from 'react';
import * as S from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  buttonType?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  handleClick?: (e: any) => void;
};

const Button: React.FC<ButtonProps> = ({
  children = 'label do botão',
  buttonType = 'primary',
  size = 'medium',
  disabled = false,
  handleClick
}) => {
  //type = 'primary' (default) | 'secondary'
  //size = 'small' | 'medium' (default) | 'large'
  //disabled = boolean

  return (
    <S.ButtonBody
      onClick={(e) => handleClick && handleClick(e)}
      disabled={disabled}
      buttonType={buttonType}
      buttonSize={size}
      name="button"
      aria-label="user-button"
    >
      {children ? children : 'No label found'}
    </S.ButtonBody>
  );
};

export default Button;
