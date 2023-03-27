import React from 'react';
import { FormTextInputProps } from '../../types/types';

class FormRadio extends React.Component<FormTextInputProps> {
  radioRef: React.RefObject<HTMLInputElement>;

  constructor(props: FormTextInputProps) {
    super(props);
    this.radioRef = React.createRef();
  }

  render() {
    return (
      <div className="goods-filter-radio">
        <label className="goods-filter-radio__label">
          {this.props.label}
          <input
            className="goods-filter-radio__input goods-filter-input"
            type="radio"
            name={this.props.name}
            value={this.props.label}
            ref={this.radioRef}
            required
          />
          <span className="goods-filter-radio__checkmark"></span>
        </label>
      </div>
    );
  }
}

export default FormRadio;
