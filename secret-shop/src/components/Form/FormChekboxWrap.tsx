import React, { HTMLAttributes, DetailedHTMLProps } from 'react';

class FormChekboxWrap extends React.Component<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> {
  render() {
    return (
      <div className="checkboxs">
        <span className="checkboxs-title">Show Elements</span>
        <div className="checkboxs-wrap">{this.props.children}</div>
      </div>
    );
  }
}

export default FormChekboxWrap;
