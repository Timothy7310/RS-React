import React from 'react';
import { FormRadioProps, FormTextInputProps } from '../../types/types';

class FormRadio extends React.Component<FormRadioProps & FormTextInputProps> {
  radioRef: React.RefObject<HTMLInputElement>;

  constructor(props: FormRadioProps & FormTextInputProps) {
    super(props);
    this.radioRef = React.createRef();
  }

  handleChange() {
    this.props.inputValue(this.radioRef.current?.value || '');
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
            onChange={() => this.handleChange()}
            required
          />
          <span className="goods-filter-radio__checkmark"></span>
        </label>
      </div>
    );
  }
}

export default FormRadio;
