import React, { HTMLAttributes, DetailedHTMLProps } from 'react';
import FormErrorMessage from './FormErrorMessage';

class FormRadioWrap extends React.Component<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement> & { valid: boolean }, HTMLDivElement>
> {
  render() {
    return (
      <div className="radio-btns">
        <span className="radio-btns-title">Choose side</span>
        <div className="radio-btns-wrap">{this.props.children}</div>
        <FormErrorMessage valid={this.props.valid} message="Ops some mistake! try harder" />
      </div>
    );
  }
}

export default FormRadioWrap;
