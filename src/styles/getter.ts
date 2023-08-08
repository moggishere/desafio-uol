import defaultTheme, {
  ColorType,
  ColorSubtype,
  ColorIndex,
  ThemeProps,
  SpaceIndex
} from './theme';

import theme from './theme';

// utility function to fallback to `defaultTheme` when necessary
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
export function getSpace(index: SpaceIndex, props: ThemeProps) {
  return getTheme(props).space[index] + 'px';
}

export function getColorAction(tokenKey: string | number, props: ThemeProps) {
  if (typeof tokenKey === 'number') {
    return Object.values(theme.color.action)[tokenKey]
      ? Object.values(theme.color.action)[tokenKey]
      : getTheme(props).color.action.medium;
  }

  return theme.color['action'][`${tokenKey}`]
    ? theme.color['action'][`${tokenKey}`]
    : getTheme(props).color.action.medium;
}

export function getColorNeutral(tokenKey: string | number, props: ThemeProps) {
  if (typeof tokenKey === 'number') {
    return Object.values(theme.color.neutral)[tokenKey]
      ? Object.values(theme.color.neutral)[tokenKey]
      : getTheme(props).color.action.medium;
  }

  return theme.color['neutral'][`${tokenKey}`]
    ? theme.color['neutral'][`${tokenKey}`]
    : //    : 'red';
      getTheme(props).color.neutral['medium-02'];
}

export function getFontFamily(tokenKey: string, props: ThemeProps) {
  return theme.font['family'][`${tokenKey}`]
    ? theme.font['family'][`${tokenKey}`]
    : getTheme(props).font.family['default'];
}

export function getWeight(tokenKey: string | number, props: ThemeProps) {
  if (typeof tokenKey === 'number') {
    return Object.values(theme.font.weight)[tokenKey]
      ? Object.values(theme.font.weight)[tokenKey]
      : getTheme(props).font.weight.medium;
  }

  return theme.font['weight'][`${tokenKey}`]
    ? theme.font['weight'][`${tokenKey}`]
    : getTheme(props).font.weight['default'];
}
