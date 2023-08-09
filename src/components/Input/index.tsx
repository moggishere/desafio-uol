import React, { useState, Dispatch, SetStateAction } from 'react';

import * as S from './styles';

export type InputProps = {
  setUserSearchQuery?: Dispatch<SetStateAction<any>>;
  userSearchQuery: string;
  queryStatus?: string;
  label?: string;
};

const Input = ({
  userSearchQuery,
  setUserSearchQuery,
  queryStatus,
  label
}: InputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <S.InputContainer>
      <S.InputElement
        type="text"
        id="fname"
        name="fname"
        value={inputValue}
        onChange={(e) => {
          handleInputChange(e);
        }}
        aria-labelledby="label-fname"
      />
      <S.Label className="label" htmlFor="fname" id="label-fname">
        <S.Text>{label ? label : 'Label do input'}</S.Text>
      </S.Label>
    </S.InputContainer>
  );
};

export default Input;
