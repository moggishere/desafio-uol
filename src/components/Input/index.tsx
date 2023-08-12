import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';

import * as S from './styles';

export type InputProps = {
  setUserSearchQuery?: Dispatch<SetStateAction<any>>;
  //   userSearchQuery: string;
  queryStatus?: 'default' | 'info' | 'success' | 'attention' | 'error';
  label?: string;
  disabled?: boolean;
};

const Input: React.FC<InputProps> = ({
  //   userSearchQuery,
  setUserSearchQuery,
  queryStatus = 'default',
  label,
  disabled = false
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    setUserSearchQuery?.(inputValue);
  }, [inputValue]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <S.InputContainer
      $isActive={isFocused || inputValue.length > 0}
      $queryStatus={queryStatus}
      disabled={disabled}
    >
      <S.Label
        className="label"
        htmlFor="finput"
        $isActive={isFocused || inputValue.length > 0}
      >
        <S.Text disabled={disabled}>{label ? label : 'Label do input'}</S.Text>
      </S.Label>
      <S.InputElement
        type="text"
        name="finput"
        value={inputValue}
        onChange={(e) => {
          handleInputChange(e);
        }}
        aria-labelledby="label-finput"
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
      />
    </S.InputContainer>
  );
};

export default Input;
