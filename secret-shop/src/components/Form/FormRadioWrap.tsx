import React, { HTMLAttributes, DetailedHTMLProps } from 'react';

class FormRadioWrap extends React.Component<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> {
  render() {
    return (
      <div className="radio-btns">
        <span className="radio-btns-title">Choose side</span>
        <div className="radio-btns-wrap">{this.props.children}</div>
      </div>
    );
  }
}

export default FormRadioWrap;
