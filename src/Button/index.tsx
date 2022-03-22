import React, { Component, MouseEventHandler } from 'react';

import '../styles/Button.css';

type State = { button: string };

type Props = {
  disabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  children: React.ReactNode;
  active: boolean;
  className?: string;
  type: 'button' | 'link' | 'submit';
  href?: string;
};

export class ButtonClass extends Component<Props, State> {
  render() {
    const { disabled, onClick, children, active, className, type, href } =
      this.props;

    const classes = [className];

    if (active) classes.push('btn-active');
    if (disabled) classes.push('btn-disabled ');
    if (type === 'link') classes.push('btn-link');
    if (href && !disabled && type === 'link') classes.push('btn-has_link');

    if (type === 'link') {
      return (
        <a
          href={!disabled ? href : undefined}
          onClick={onClick}
          className={classes.join(' ')}
        >
          {children || 'Default button'}
        </a>
      );
    }
    return (
      <button
        onClick={onClick}
        className={classes.join(' ')}
        type={type || 'button'}
        disabled={disabled ?? false}
      >
        {children || 'Default button'}
      </button>
    );
  }
}

// Function component

const Button: React.FC<Props> = ({
  disabled,
  onClick,
  children,
  active,
  className,
  type,
  href,
}: Props) => {
  const classes = [className];

  if (active) classes.push('btn-active');
  if (disabled) classes.push('btn-disabled');
  if (type === 'link') classes.push('btn-link');
  if (href && !disabled && type === 'link') classes.push('btn-has_link');

  if (type === 'link') {
    return (
      <a
        href={!disabled ? href : undefined}
        onClick={onClick}
        className={classes.join(' ')}
      >
        {children || 'Default button'}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      className={classes.join(' ')}
      type={type || 'button'}
      disabled={disabled ?? false}
    >
      {children || 'Default button'}
    </button>
  );
};

export default Button;
