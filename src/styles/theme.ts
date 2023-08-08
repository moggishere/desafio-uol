const theme = {
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
      //TODO devem ser adicionados os rem em concat depois
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
    //TODO deve ser convertido em string depois tbm
    tighest: 1,
    tight: 1.3,
    medium: '1.',
    loose: 1.7
  },
  spacing: {
    //TODO devem ser adicionados os px em concat depois
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
    //TODO devem ser adicionados os px em concat depois e notar que o padding dos lados esquerdo e direito sempre sao o dobro do valor, portanto padding: ${x} ${x*2}
    nano: 4,
    micro: 8,
    sm: 12,
    md: 16,
    lg: 24
  },
  stroke: {
    //TODO devem ser adicionados os px em concat depois
    '100': 1,
    '200': 2,
    '300': 4,
    '400': 6,
    '500': 8
  },
  radius: {
    //TODO devem ser adicionados os px em concat depois
    '100': 1,
    '200': 2,
    '300': 4,
    '400': 16,
    pill: 2000
  }
};

// entire structure of our theme-object
export type Theme = typeof theme;

// props that later will be injected by styled-components
export type ThemeProps = { theme?: Theme };

// 'primary' | 'secondary'
export type ColorType = keyof Theme['colors'];

export type ColorSubtype = keyof Theme['colors'];

// 9 possible shades of a ColorType
export type ColorIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

// 12 possible spaces
export type SpaceIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export default theme;
