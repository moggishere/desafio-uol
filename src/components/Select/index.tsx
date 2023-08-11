import React, {
  useState,
  useEffect,
  useRef,
  RefObject,
  Dispatch,
  SetStateAction
} from 'react';

import * as S from './styles';

function useOutsideAlerter(
  ref: RefObject<HTMLElement>,
  setState: Dispatch<SetStateAction<boolean>>,
  ignoreClick: boolean
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ignoreClick) {
        return;
      }

      if (ref.current && !ref.current.contains(event.target as Node)) {
        setState(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

export type SelectProps = {
  queryType?: string;
  setQueryType?: Dispatch<SetStateAction<any>>;
  label?: string;
  disabled?: boolean;
  options: Array<string>;
};

const Select: React.FC<SelectProps> = ({
  queryType,
  setQueryType,
  label,
  disabled = false,
  options = ['default option']
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setIsFocused, isSelecting);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleClick = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSelectOption = (value: string) => {
    setIsSelecting(true);
    setQueryType && setQueryType(value);
    setIsSelecting(false);
  };

  useEffect(() => {
    setIsFocused(!isFocused);
  }, [queryType]);

  return (
    <S.SelectContainer
      disabled={disabled}
      onClick={() => handleClick()}
      ref={wrapperRef}
      isActive={isFocused || queryType?.length ? true : false}
    >
      <S.Label
        className="label"
        htmlFor="finput"
        isActive={isFocused || queryType?.length ? true : false}
      >
        <S.Text disabled={disabled}>{label ? label : 'Label do select'}</S.Text>
      </S.Label>
      <S.SelectElement
        tabIndex={4}
        aria-labelledby="label-finput"
        onFocus={handleFocus}
        // onBlur={handleBlur}
      >
        {queryType ?? ''}
        <S.DownArrowContainer isActive={isFocused}>{'▼'}</S.DownArrowContainer>
      </S.SelectElement>
      <S.SelectOptions isActive={isFocused}>
        {options.map((option, index) => (
          <S.Option
            key={`option-${option}-${index}`}
            onClick={(e) => {
              handleSelectOption(option);
            }}
          >
            {option}
          </S.Option>
        ))}
      </S.SelectOptions>
    </S.SelectContainer>
  );
};

export default Select;
