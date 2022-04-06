import React, { Component } from 'react';

import './ButtonGroup.css';

interface IProps {
  vertical?: boolean;
  className?: string;
  children: React.ReactNode;
}

export class ButtonGroupClass extends Component<IProps> {
  render() {
    const { vertical, className, children } = this.props;

    const classes = [className, 'btnGroup'];
    if (vertical) classes.push('btnGroup__vertical');

    return <div className={classes.join(' ')}>{children}</div>;
  }
}

const ButtonGroup: React.FC<IProps> = ({
  vertical,
  className,
  children,
}: IProps) => {
  const classes = [className, 'btnGroup'];
  if (vertical) classes.push('btnGroup__vertical');

  return <div className={classes.join(' ')}>{children}</div>;
};

export default ButtonGroup;
