import { FC } from 'react';
import cx from 'classnames';

const rootClasses = `mx-auto lg:max-w-lg xl:max-w-xl`;

export const Container: FC<React.PropsWithChildren<Record<string, unknown>>> = ({ children }) => {
  const classes = cx(
    rootClasses,
  );

  return (
    <div  className={classes}>
      {children}
    </div>
  )
};
