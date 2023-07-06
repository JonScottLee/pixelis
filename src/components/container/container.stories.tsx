import { Container } from './container';
import { FC } from 'react';
import type { Meta } from '@storybook/react';
import { RowWrapper } from '../../../.storybook/storybook-components';

const meta: Meta<typeof Container> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Layouts/Container',
  component: Container,
};

export default meta;

export const Default: FC = () => (
  <RowWrapper>
    <Container>Children</Container>
  </RowWrapper>
);
