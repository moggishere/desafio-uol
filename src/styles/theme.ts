const theme = {
  //TODO remover colors e space
  colors: {
    primary: [
      'hsl(205, 79%, 97%)',
      'hsl(205, 97%, 85%)',
      'hsl(205 ,84%, 74%)',
      'hsl(205 ,74%, 65%)',
      'hsl(205, 65%, 55%)',
      'hsl(205, 67%, 45%)',
      'hsl(205, 76%, 39%)',
      'hsl(205, 82%, 33%)',
      'hsl(205, 87%, 29%)',
      'hsl(205, 100%, 21%)'
    ],
    secondary: [
      'hsl(171, 82%, 96%)',
      'hsl(172, 97%, 88%)',
      'hsl(174, 96%, 78%)',
      'hsl(176, 87%, 67%)',
      'hsl(178, 78%, 57%)',
      'hsl(180, 77%, 47%)',
      'hsl(182, 85%, 39%)',
      'hsl(184, 90%, 34%)',
      'hsl(186, 91%, 29%)',
      'hsl(188, 91%, 23%)'
    ]
  },
  space: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256],
  color: {
    action: {
      lightest: '#B9D7E8',
      light: '#529EC6',
      medium: '#0070AB',
      dark: '#005582',
      darkest: '#004266'
    },
    neutral: {
      transparent: 'transparent',
      lightest: '#FFFFFF',
      light: '#ECECEC',
      'medium-04': '#CCCCCC',
      'medium-03': '#999999',
      'medium-02': '#666666',
      'medium-01': '#444444',
      dark: '#202020',
      darkest: '#000000'
    },
    alert: {
      info: '#3255E2',
      success: '#0A7C2F',
      attention: '#EBBC03',
      error: '#CC001B',
      'info-dark-theme': '#B7CCE3',
      'success-dark-theme': '#B5EAC6',
      'attention-dark-theme': '#FFDD96',
      'error-dark-theme': '#EFB4BA'
    }
  },
  font: {
    family: {
      default: 'Roboto'
    },
    weight: {
      default: 400,
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700
    },
    size: {
      nano: 0.75,
      micro: 0.875,
      base: 1,
      xxs: 1.125,
      xs: 1.25,
      sm: 1.5,
      md: 2,
      lg: 2.5,
      xl: 3,
      xxl: 3.5,
      xxxl: 4.5,
      giant: 5.5,
      huge: 6.5
    }
  },
  'line-height': {
    tightest: 1,
    tight: 1.3,
    medium: 1.5,
    loose: 1.7
  },
  spacing: {
    nano: 4,
    micro: 8,
    xxxs: 12,
    xxs: 16,
    xs: 24,
    sm: 32,
    md: 40,
    lg: 56,
    xl: 80,
    xxl: 120,
    giant: 160,
    huge: 200
  },
  'spacing-squish': {
    nano: 4,
    micro: 8,
    sm: 12,
    md: 16,
    lg: 24
  },
  stroke: {
    '100': 1,
    '200': 2,
    '300': 4,
    '400': 6,
    '500': 8
  },
  radius: {
    '100': 1,
    '200': 2,
    '300': 4,
    '400': 16,
    pill: 2000
  }
};

// estrutura do objeto theme
export type Theme = typeof theme;

// props that later will be injected by styled-components
export type ThemeProps = { theme?: Theme };

// 9 possible shades of a ColorType
export type ColorIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

// 12 possible spaces
export type SpaceIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export type ColorAction = {
  lightest: string;
  light: string;
  medium: string;
  dark: string;
  darkest: string;
};

export type ColorNeutral = {
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

export type ColorAlert = {
  info: string;
  success: string;
  attention: string;
  error: string;
  'info-dark-theme': string;
  'success-dark-theme': string;
  'attention-dark-theme': string;
  'error-dark-theme': string;
};

export type FontWeight = {
  default: number;
  light: number;
  regular: number;
  medium: number;
  bold: number;
};

export type FontSize = {
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

export type LineHeight = {
  tightest: number;
  tight: number;
  medium: number;
  loose: number;
};

export type Spacing = {
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

export type SpacingSquish = {
  nano: number;
  micro: number;
  sm: number;
  md: number;
  lg: number;
};

export type Stroke = {
  '100': number;
  '200': number;
  '300': number;
  '400': number;
  '500': number;
};

export type Radius = {
  '100': number;
  '200': number;
  '300': number;
  '400': number;
  pill: number;
};

export default theme;
