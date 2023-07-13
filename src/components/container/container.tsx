import { FC } from 'react';
import cx from 'classnames';

const rootClasses = `mx-auto lg:max-w-lg xl:max-w-xl`;

type ContainerProps = {
  additionalClasses?: string
}

export const Container: FC<React.PropsWithChildren<ContainerProps>> = ({ children, additionalClasses }) => {
  const classes = cx(
    rootClasses,
  );

  return (
    <div  className={`${classes} ${additionalClasses}`}>
      {children}
    </div>
  )
};
