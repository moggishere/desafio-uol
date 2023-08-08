import Main from '.';

type argsType = {
  title: string;
  description: string;
};

export default {
  component: Main,
  args: {
    title: 'desafio UOL',
    description: 'Home do desafio'
  }
};

export const Basic = (args: argsType) => <Main {...args} />;
