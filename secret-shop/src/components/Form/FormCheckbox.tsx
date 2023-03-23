import React from 'react';
import { FormCheckboxProps, FormTextInputProps } from '../../types/types';

class FormCheckbox extends React.Component<FormCheckboxProps & FormTextInputProps> {
  checkboxRef: React.RefObject<HTMLInputElement>;

  constructor(props: FormCheckboxProps & FormTextInputProps) {
    super(props);
    this.checkboxRef = React.createRef();
  }

  handleChange() {
    this.props.inputValue(this.checkboxRef.current?.checked ?? false);
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
            onChange={() => this.handleChange()}
            ref={this.checkboxRef}
          />
          <span className="goods-filter-checkbox__checkmark"></span>
        </label>
      </div>
    );
  }
}

export default FormCheckbox;
