import React, { Component } from 'react';

import './ButtonGroup.css';
export class ButtonGroupClass extends Component {
  render() {
    const { vertical, className, children } = this.props;

    const classes = [className, 'btnGroup'];
    if (vertical) classes.push('btnGroup__vertical');

    return <div className={classes.join(' ')}>{children}</div>;
  }
}

const ButtonGroup = ({ vertical, className, children }) => {
  const classes = [className, 'btnGroup'];
  if (vertical) classes.push('btnGroup__vertical');

  return <div className={classes.join(' ')}>{children}</div>;
};

export default ButtonGroup;
