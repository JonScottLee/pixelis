import type { Meta, StoryObj } from '@storybook/react';
import { NotFound } from './not-found';

const meta: Meta<typeof NotFound> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Misc/Not Found',
  component: NotFound,
};

export default meta;

export const Overview = () => <NotFound />;
