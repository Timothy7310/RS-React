import React from 'react';
import { FormTextInputProps } from '../../types/types';

class FormCheckbox extends React.Component<FormTextInputProps> {
  checkboxRef: React.RefObject<HTMLInputElement>;

  constructor(props: FormTextInputProps) {
    super(props);
    this.checkboxRef = React.createRef();
  }

  render() {
    return (
      <div className="goods-filter-checkbox">
        <label className="goods-filter-checkbox__label">
          {this.props.label}
          <input
            type="checkbox"
            name={this.props.name}
            value={this.props.label}
            className="goods-filter-checkbox__input goods-filter-input"
            ref={this.checkboxRef}
          />
          <span className="goods-filter-checkbox__checkmark"></span>
        </label>
      </div>
    );
  }
}

export default FormCheckbox;
