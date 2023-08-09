import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';

import * as S from './styles';

export type InputProps = {
  setUserSearchQuery?: Dispatch<SetStateAction<any>>;
  //   userSearchQuery: string;
  queryStatus?: 'info' | 'success' | 'alert' | 'error';
  label?: string;
  disabled?: boolean;
};

const Input = ({
  //   userSearchQuery,
  setUserSearchQuery,
  queryStatus,
  label,
  disabled = false
}: InputProps) => {
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
      isActive={isFocused || inputValue.length > 0}
      queryStatus={queryStatus}
      disabled={disabled}
    >
      <S.Label
        className="label"
        htmlFor="finput"
        isActive={isFocused || inputValue.length > 0}
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
        queryStatus={queryStatus}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isActive={isFocused || inputValue.length > 0}
        disabled={disabled}
      />
    </S.InputContainer>
  );
};

export default Input;
