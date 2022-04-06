import React, { Component, MouseEventHandler } from 'react';

import './Button.css';

interface IState {
  button: string;
}

interface IProps {
  disabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  children: React.ReactNode;
  active: boolean;
  className?: string;
  type: 'button' | 'link' | 'submit';
  href?: string;
}

export class ButtonClass extends Component<IProps, IState> {
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
          {children}
        </a>
      );
    }
    return (
      <button
        onClick={onClick}
        className={classes.join(' ')}
        type={type}
        disabled={disabled ?? false}
      >
        {children}
      </button>
    );
  }

  static defaultProps = {
    active: false,
    children: 'Default button',
    type: 'button',
    disabled: false,
  };
}

// Function component

const Button: React.FC<IProps> = ({
  disabled,
  onClick,
  children,
  active,
  className,
  type,
  href,
}: IProps) => {
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
        {children}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      className={classes.join(' ')}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  active: false,
  children: 'Default button',
  type: 'button',
  disabled: false,
};

export default Button;
