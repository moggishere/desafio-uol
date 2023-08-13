import React, {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  InputHTMLAttributes
} from 'react';

import * as S from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  setUserSearchQuery?: Dispatch<SetStateAction<any>>;
  queryStatus?: 'default' | 'info' | 'success' | 'attention' | 'error';
  label?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
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
      $inputValue={inputValue}
    >
      <S.Label
        className="label"
        htmlFor="finput"
        $isActive={isFocused || inputValue.length > 0}
      >
        <S.Text disabled={disabled}>{label ? label : 'Label do input'}</S.Text>
      </S.Label>
      <S.InputElement
        data-testid="input-element"
        type="text"
        id="finput"
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
