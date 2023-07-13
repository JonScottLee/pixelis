import { FC } from 'react';
import cx from 'classnames';
import { Container } from '../container/container'

type NotFoundProps = {};

const rootClasses = '';

export const NotFound: FC<NotFoundProps> = () => {
  const containerClasses = 'text-center flex flex-col items-center justify-center h-screen font-sans'

  return (
    <Container additionalClasses={containerClasses}>
      <h1 className="text-4xl mb-4">404</h1>
      <p className="text-2xl">Oops! Page not found.</p>
    </Container>
  );
};
