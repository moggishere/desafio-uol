import defaultTheme, {
  ColorType,
  ColorSubtype,
  ColorIndex,
  ThemeProps,
  SpaceIndex
} from './theme';

import theme from './theme';

// função utilitária para servir backup de backup por meio de parâmetro backup
function getTheme(props: ThemeProps) {
  return props.theme && props.theme.colors ? props.theme : defaultTheme;
}

// getColor("primary", 9, { theme }) === "hsl(205, 100%, 21%)"
export function getColor(
  type: ColorType,
  index: ColorIndex,
  props: ThemeProps
) {
  return getTheme(props).colors[type][index];
}

// getSpace(2, { theme }) === "12px"
export function getSpace(index: SpaceIndex, props: any) {
  return getTheme(props).space[index] + 'px';
}

export function getColorAction(tokenKey: string | number, props: any) {
  if (typeof tokenKey === 'number') {
    return Object.values(theme.color.action)[tokenKey]
      ? Object.values(theme.color.action)[tokenKey]
      : getTheme(props).color.action.medium;
  }

  return theme.color['action'][`${tokenKey}`]
    ? theme.color['action'][`${tokenKey}`]
    : getTheme(props).color.action.medium;
}

export function getColorNeutral(tokenKey: string | number, props: any) {
  if (typeof tokenKey === 'number') {
    return Object.values(theme.color.neutral)[tokenKey]
      ? Object.values(theme.color.neutral)[tokenKey]
      : getTheme(props).color.neutral['medium-02'];
  }

  return theme.color['neutral'][`${tokenKey}`]
    ? theme.color['neutral'][`${tokenKey}`]
    : getTheme(props).color.neutral['medium-02'];
}

export function getColorAlert(tokenKey: string | number, props: any) {
  if (typeof tokenKey === 'number') {
    return Object.values(theme.color.alert)[tokenKey]
      ? Object.values(theme.color.alert)[tokenKey]
      : getTheme(props).color.alert.info;
  }

  return theme.color['alert'][`${tokenKey}`]
    ? theme.color['alert'][`${tokenKey}`]
    : getTheme(props).color.alert.info;
}

export function getFontFamily(tokenKey: string, props: any) {
  return theme.font['family'][`${tokenKey}`]
    ? theme.font['family'][`${tokenKey}`]
    : getTheme(props).font.family['default'];
}

export function getWeight(tokenKey: string | number, props: any) {
  if (typeof tokenKey === 'number') {
    return Object.values(theme.font.weight)[tokenKey]
      ? Object.values(theme.font.weight)[tokenKey]
      : getTheme(props).font.weight['default'];
  }

  return theme.font['weight'][`${tokenKey}`]
    ? theme.font['weight'][`${tokenKey}`]
    : getTheme(props).font.weight['default'];
}

export function getSize(tokenKey: string | number, props: any) {
  if (typeof tokenKey === 'number') {
    return Object.values(theme.font.size)[tokenKey] + 'rem'
      ? Object.values(theme.font.size)[tokenKey] + 'rem'
      : getTheme(props).font.size['base'] + 'rem';
  }

  return theme.font['size'][`${tokenKey}`]
    ? theme.font['size'][`${tokenKey}`] + 'rem'
    : getTheme(props).font.size['base'] + 'rem';
}

export function getLineHeight(tokenKey: string | number, props: any) {
  if (typeof tokenKey === 'number') {
    return Object.values(theme['line-height'])[tokenKey]
      ? Object.values(theme['line-height'])[tokenKey]
      : getTheme(props)['line-height'][1];
  }

  return theme['line-height'][`${tokenKey}`]
    ? theme['line-height'][`${tokenKey}`]
    : getTheme(props)['line-height']['medium'];
}

export function getSpacing(tokenKey: string | number, props: any) {
  if (typeof tokenKey === 'number') {
    return Object.values(theme.spacing)[tokenKey] + 'px'
      ? Object.values(theme.spacing)[tokenKey] + 'px'
      : getTheme(props).spacing['md'] + 'px';
  }

  return theme.spacing[`${tokenKey}`]
    ? theme.spacing[`${tokenKey}`] + 'px'
    : getTheme(props).spacing['md'] + 'px';
}

export function getSquish(tokenKey: string | number, props: any) {
  if (typeof tokenKey === 'number') {
    return Object.values(theme['spacing-squish'])[tokenKey]
      ? Object.values(theme['spacing-squish'])[tokenKey] +
          'px' +
          ' ' +
          Object.values(theme['spacing-squish'])[tokenKey] * 2 +
          'px'
      : getTheme(props)['spacing-squish']['md'] +
          'px' +
          ' ' +
          getTheme(props)['spacing-squish']['md'] * 2 +
          'px';
  }

  return theme['spacing-squish'][`${tokenKey}`]
    ? theme['spacing-squish'][`${tokenKey}`] +
        'px' +
        ' ' +
        theme['spacing-squish'][`${tokenKey}`] * 2 +
        'px'
    : getTheme(props)['spacing-squish']['md'] +
        'px' +
        ' ' +
        getTheme(props)['spacing-squish']['md'] * 2 +
        'px';
}

export function getStroke(tokenKey: string | number, props: any) {
  if (typeof tokenKey === 'number') {
    return Object.values(theme.stroke)[tokenKey]
      ? Object.values(theme.stroke)[tokenKey] + 'px solid'
      : getTheme(props).stroke['200'] + 'px solid';
  }

  return theme.stroke[`${tokenKey}`]
    ? theme.stroke[`${tokenKey}`] + 'px solid'
    : getTheme(props).stroke['200'] + 'px solid';
}

export function getRadius(tokenKey: string | number, props: any) {
  if (typeof tokenKey === 'number') {
    return Object.values(theme.radius)[tokenKey]
      ? Object.values(theme.radius)[tokenKey] + 'px'
      : getTheme(props).radius['200'] + 'px';
  }

  return theme.radius[`${tokenKey}`]
    ? theme.radius[`${tokenKey}`] + 'px'
    : getTheme(props).radius['200'] + 'px';
}
