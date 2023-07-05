import { Button } from './button';
import { FC } from 'react';
import type { Meta } from '@storybook/react';
import { RowWrapper } from '../../../.storybook/storybook-components';

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Buttons/Button',
  component: Button,
};

export default meta;

export const Kinds: FC = () => (
  <RowWrapper>
    <Button>Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="tertiary">Tertiary</Button>
  </RowWrapper>
);

export const ButtonAsLink: FC = () => (
  <RowWrapper>
    <Button asLink>Primary</Button>
    <Button asLink variant="secondary">Secondary</Button>
    <Button asLink variant="tertiary">Tertiary</Button>
  </RowWrapper>
);

export const Color: FC = () => (
  <div className="bg-primary p-5 rounded">
    <RowWrapper>
      <Button onColor>Primary</Button>
      <Button onColor variant="secondary">
        Secondary
      </Button>
      <Button onColor variant="tertiary">
        Tertiary
      </Button>
    </RowWrapper>
  </div>
);

export const Sizes: FC = () => (
  <RowWrapper>
    <Button size="large">Large</Button>
    <Button size="medium">Medium</Button>
    <Button size="small">Small</Button>
  </RowWrapper>
);

export const Disabled: FC = () => (
  <RowWrapper>
    <Button disabled>Primary</Button>
    <Button disabled variant="secondary">
      Secondary
    </Button>
    <Button disabled variant="tertiary">
      Tertiary
    </Button>
  </RowWrapper>
);

export const States: FC = () => (
  <RowWrapper>
    <Button>Regular</Button>
    <Button active>Active</Button>
  </RowWrapper>
);

export const Row: FC = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Button>Button One</Button>
    <Button>Button Two</Button>
    <Button>Button Three</Button>
  </div>
);
