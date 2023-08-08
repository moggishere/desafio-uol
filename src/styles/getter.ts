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

export function getColorAction(
  actionToken: object,
  tokenKey: String,
  props: ThemeProps
) {
  return actionToken['action'][`${tokenKey}`]
    ? actionToken['action'][`${tokenKey}`]
    : //    : 'red';
      getTheme(props).color.action.medium;
}

//TODO adicionar opcao para caso o usuario use um numero (transformar obj em array e pegar por index)
export function getColorNeutral(
  actionToken: object,
  tokenKey: String,
  props: ThemeProps
) {
  return actionToken['neutral'][`${tokenKey}`]
    ? actionToken['neutral'][`${tokenKey}`]
    : //    : 'red';
      getTheme(props).color.action['medium-03'];
}
