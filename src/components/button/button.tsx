import { FC } from 'react';
import cx from 'classnames';

type ButtonVariants = 'primary' | 'secondary' | 'tertiary';
type ButtonSizes = 'small' | 'medium' | 'large';

type ButtonProps = {
  active?: boolean;
  additionalClasses?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: ButtonSizes;
  variant?: ButtonVariants;
  onColor?: boolean;
};

const rootClasses =
  'button py-3 px-4 tracking-wider transition ease-in-out active:scale-90 hover:scale-105 rounded';

export const Button: FC<React.PropsWithChildren<ButtonProps>> = ({
  active = false,
  additionalClasses = '',
  children,
  disabled = false,
  onClick,
  onColor = false,
  size = 'large',
  variant = 'primary',
}) => {
  const classes = cx(
    rootClasses,
    {
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
    <button onClick={onButtonClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
};
