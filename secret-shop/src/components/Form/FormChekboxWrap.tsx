import React, { HTMLAttributes, DetailedHTMLProps } from 'react';
import FormErrorMessage from './FormErrorMessage';

class FormChekboxWrap extends React.Component<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement> & { valid: boolean }, HTMLDivElement>
> {
  render() {
    return (
      <div className="checkboxs">
        <span className="checkboxs-title">Show Elements</span>
        <div className="checkboxs-wrap">{this.props.children}</div>
        <FormErrorMessage valid={this.props.valid} message="Ops some mistake! try harder" />
      </div>
    );
  }
}

export default FormChekboxWrap;
