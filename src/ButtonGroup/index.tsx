import React, { Component } from 'react';

import '../styles/ButtonGroup.css';

interface Props {
  vertical?: boolean;
  className?: string;
  children: React.ReactNode;
}

export class ButtonGroupClass extends Component<Props> {
  render() {
    const { vertical, className, children } = this.props;

    const classes = [className, 'btnGroup'];
    if (vertical) classes.push('btnGroup__vertical');

    return <div className={classes.join(' ')}>{children}</div>;
  }
}

const ButtonGroup: React.FC<Props> = ({
  vertical,
  className,
  children,
}: Props) => {
  const classes = [className, 'btnGroup'];
  if (vertical) classes.push('btnGroup__vertical');

  return <div className={classes.join(' ')}>{children}</div>;
};

export default ButtonGroup;
