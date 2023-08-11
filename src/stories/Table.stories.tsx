import { Meta, StoryFn } from '@storybook/react';

import Table, { TableProps } from '../components/Table/Table';

import mockData from '../components/Table/mockData.json';

export default {
  title: 'Component/Table',
  component: Table
} as Meta;

const Template: StoryFn<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  query: '',
  columns: ['id', 'name', 'email', 'phone', 'status'],
  customers: mockData.customers
};
