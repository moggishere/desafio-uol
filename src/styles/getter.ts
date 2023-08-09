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

type ColorAction = {
  lightest: string;
  light: string;
  medium: string;
  dark: string;
  darkest: string;
};

export function getColorAction(
  tokenKey: keyof ColorAction | number,
  props: any
) {
  const colorAction = theme.color.action;
  if (typeof tokenKey === 'number') {
    return (
      Object.values(colorAction)[tokenKey] ||
      getTheme(props).color.action.medium
    );
  }
  return colorAction[tokenKey] || getTheme(props).color.action.medium;
}

type ColorNeutral = {
  transparent: string;
  lightest: string;
  light: string;
  'medium-04': string;
  'medium-03': string;
  'medium-02': string;
  'medium-01': string;
  dark: string;
  darkest: string;
};

export function getColorNeutral(
  tokenKey: keyof ColorNeutral | number,
  props: any
) {
  const colorNeutral = theme.color.neutral;

  if (typeof tokenKey === 'number') {
    return (
      Object.values(colorNeutral)[tokenKey] ||
      getTheme(props).color.neutral['medium-02']
    );
  }

  return colorNeutral[tokenKey] || getTheme(props).color.neutral['medium-02'];
}

type ColorAlert = {
  info: string;
  success: string;
  attention: string;
  error: string;
  'info-dark-theme': string;
  'success-dark-theme': string;
  'attention-dark-theme': string;
  'error-dark-theme': string;
};

export function getColorAlert(tokenKey: keyof ColorAlert | number, props: any) {
  const colorAlert = theme.color.alert;

  if (typeof tokenKey === 'number') {
    return (
      Object.values(colorAlert)[tokenKey] || getTheme(props).color.alert.info
    );
  }

  return colorAlert[tokenKey] || getTheme(props).color.alert.info;
}

export function getFontFamily(
  tokenKey: keyof typeof theme.font.family,
  props: any
) {
  const fontFamily = theme.font.family;

  return fontFamily[tokenKey] || getTheme(props).font.family.default;
}

type FontWeight = {
  default: number;
  light: number;
  regular: number;
  medium: number;
  bold: number;
};

export function getWeight(tokenKey: keyof FontWeight | number, props: any) {
  const fontWeight = theme.font.weight;

  if (typeof tokenKey === 'number') {
    return Object.values(fontWeight)[tokenKey] || fontWeight.default;
  }

  return fontWeight[tokenKey] || getTheme(props).font.weight.default;
}

type FontSize = {
  nano: number;
  micro: number;
  base: number;
  xxs: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
  giant: number;
  huge: number;
};

export function getSize(tokenKey: keyof FontSize | number, props: any) {
  const fontSize = theme.font.size;

  if (typeof tokenKey === 'number') {
    return (
      Object.values(fontSize)[tokenKey] + 'rem' ||
      getTheme(props).font.size.base + 'rem'
    );
  }

  return fontSize[tokenKey] + 'rem' || getTheme(props).font.size.base + 'rem';
}

type LineHeight = {
  tightest: number;
  tight: number;
  medium: number;
  loose: number;
};

export function getLineHeight(tokenKey: keyof LineHeight | number, props: any) {
  const lineHeight = theme['line-height'];

  if (typeof tokenKey === 'number') {
    return (
      Object.values(lineHeight)[tokenKey] ||
      getTheme(props)['line-height'].medium
    );
  }

  return lineHeight[tokenKey] || getTheme(props)['line-height'].medium;
}

type Spacing = {
  nano: number;
  micro: number;
  xxxs: number;
  xxs: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  giant: number;
  huge: number;
};

export function getSpacing(tokenKey: keyof Spacing | number, props: any) {
  const spacing = theme.spacing;

  if (typeof tokenKey === 'number') {
    return (
      Object.values(spacing)[tokenKey] || getTheme(props).spacing['md'] + 'px'
    );
  }

  return spacing[tokenKey] || getTheme(props).spacing['md'] + 'px';
}

type SpacingSquish = {
  nano: number;
  micro: number;
  sm: number;
  md: number;
  lg: number;
};

export function getSquish(tokenKey: keyof SpacingSquish | number, props: any) {
  const spacingSquish = theme['spacing-squish'];

  if (typeof tokenKey === 'number') {
    const value = Object.values(spacingSquish)[tokenKey] || spacingSquish['md'];
    return `${value}px ${value * 2}px`;
  }

  const value = spacingSquish[tokenKey] || spacingSquish['md'];
  return `${value}px ${value * 2}px`;
}

type Stroke = {
  '100': number;
  '200': number;
  '300': number;
  '400': number;
  '500': number;
};

export function getStroke(tokenKey: keyof Stroke | number, props: any) {
  const stroke = theme.stroke;

  if (typeof tokenKey === 'number') {
    const value = Object.values(stroke)[tokenKey] || stroke['200'];
    return `${value}px solid`;
  }

  const value = stroke[tokenKey] || stroke['200'];
  return `${value}px solid`;
}

type Radius = {
  '100': number;
  '200': number;
  '300': number;
  '400': number;
  pill: number;
};

export function getRadius(tokenKey: keyof Radius | number, props: any) {
  const radius = theme.radius;

  if (typeof tokenKey === 'number') {
    const value = Object.values(radius)[tokenKey] || radius['200'];
    return `${value}px`;
  }

  const value = radius[tokenKey] || radius['200'];
  return `${value}px`;
}
