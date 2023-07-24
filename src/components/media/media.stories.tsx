import type { Meta } from '@storybook/react';
import { Media } from './media';
import { H2, P } from '../typography';
import { ColWrapper } from '../../../.storybook/storybook-components';

const meta: Meta<typeof Media> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Layouts/Media',
  component: Media,
};

export default meta;

export const Overview = () => (
  <Media
    image="/wind.jpg"
    content={
      <>
        <H2>Media Pattern</H2>
        <p>Image goes on one side, content goes on the other</p>
      </>
    }
  />
);

export const Positions = () => (
  <ColWrapper>
    <Media
      imagePos='left'
      image="/wind.jpg"
      content={
        <>
          <H2>Image on Left</H2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            semper enim eget congue pharetra. In id pellentesque nulla. Donec
            nec vulputate urna.
          </p>
        </>
      }
    />

    <Media
      imagePos='right'
      image="/wind.jpg"
      content={
        <>
          <H2>Image on Right</H2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            semper enim eget congue pharetra. In id pellentesque nulla. Donec
            nec vulputate urna.
          </p>
        </>
      }
    />
  </ColWrapper>
);

export const Clips = () => (
  <ColWrapper>
    <Media
      clip="clip-right"
      image="/beach.jpg"
      content={
        <>
          <H2>Clip Right</H2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            semper enim eget congue pharetra. In id pellentesque nulla. Donec
            nec vulputate urna.
          </p>
        </>
      }
    />

    <Media
      clip="clip-left"
      imagePos='right'
      image="/beach.jpg"
      content={
        <>
          <H2>Clip Left</H2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            semper enim eget congue pharetra. In id pellentesque nulla. Donec
            nec vulputate urna.
          </p>
        </>
      }
    />
  </ColWrapper>
);

export const Additional = () => (
  <ColWrapper>
    <Media
      image="/beach.jpg"
      extraContentClasses='bg-orange-600 text-white'
      content={
        <>
          <H2>Extra Flexibility</H2>
          <p>
            You can pass arbitrary additional classes to both the image and the
            content container, to allow for one-off customizations.
          </p>
        </>
      }
    />
  </ColWrapper>
);
