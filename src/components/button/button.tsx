import { FC } from 'react';
import cx from 'classnames';

type ButtonVariants = 'primary' | 'secondary' | 'tertiary';
type ButtonSizes = 'small' | 'medium' | 'large';

type ButtonProps = {
  active?: boolean;
  additionalClasses?: string;
  disabled?: boolean;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: ButtonSizes;
  variant?: ButtonVariants;
  onColor?: boolean;
  asLink?: boolean;
};

const rootClasses =
  'button py-3 px-4 tracking-wider transition ease-in-out hover:scale-105 rounded';

export const Button: FC<React.PropsWithChildren<ButtonProps>> = ({
  active = false,
  additionalClasses = '',
  asLink,
  children,
  disabled = false,
  href,
  onClick,
  onColor = false,
  size = 'large',
  variant = 'primary',
}) => {
  const classes = cx(
    rootClasses,
    {
      'active:scale-90': !asLink,
      'on-color': onColor,
      'button--primary': variant === 'primary',
      'button--secondary': variant === 'secondary',
      'button--tertiary': variant === 'tertiary',
      'text-sm': size === 'small',
      'text-md': size === 'medium',
      'text-base': size === 'large',
      'opacity-50 pointer-events-none': disabled,
      'scale-90': active,
    },
    additionalClasses,
  );

  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    asLink ? (
      <a href={href} className={classes}>{children}</a>
    ) : (
    <button onClick={onButtonClick} disabled={disabled} className={classes}>
      {children}
    </button>
  ))
};
