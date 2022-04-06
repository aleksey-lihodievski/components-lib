import React, { Component, MouseEventHandler } from 'react';

import './Button.css';

export class ButtonClass extends Component {
  render() {
    const { disabled, onClick, children, active, className, type, href } =
      this.props;

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
        disabled={disabled ?? false}
      >
        {children}
      </button>
    );
  }

  static defaultProps = {
    type: 'button',
    disabled: false,
    active: false,
    children: 'DefaultBu',
  };
}

// Function component

const Button = ({
  disabled,
  onClick,
  children,
  active,
  className,
  type,
  href,
}) => {
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
      disabled={disabled ?? false}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  active: false,
  children: 'DefaultBu',
};

export default Button;
