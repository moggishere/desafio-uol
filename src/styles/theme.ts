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
  color: {
    action: {
      lightest: '#B9D7E8',
      light: '#529EC6',
      medium: '#0070AB',
      dark: '#005582',
      darkest: '#004266'
    },
    neutral: {
      lightest: '#B9D7E8',
      light: '#529EC6',
      medium: '#0070AB',
      dark: '#005582',
      darkest: '#004266'
    },
    alert: {
      lightest: '#B9D7E8',
      light: '#ECECEC',
      'medium-04': '#CCCCCC',
      'medium-03': '#999999',
      'medium-02': '#666666',
      'medium-01': '#444444',
      dark: '#202020',
      darkest: '#000000'
    }
  },
  space: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256]
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
