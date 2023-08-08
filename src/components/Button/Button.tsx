import React from 'react';

import * as S from './styles';

export default function Button(props) {
  const { type, size, disabled } = props;
  //type = 'primary' (default) | 'secondary'
  //size = 'small' | 'medium' (default) | 'big'
  //disabled = boolean

  return <S.ButtonBody>{'Label do botão'}</S.ButtonBody>;
}
