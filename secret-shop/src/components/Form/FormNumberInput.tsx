import React from 'react';
import { FormNumberInputProps, FormTextInputProps } from '../../types/types';

class FormNumberInput extends React.Component<FormNumberInputProps & FormTextInputProps> {
  numberInputRef: React.RefObject<HTMLInputElement>;

  constructor(props: FormNumberInputProps & FormTextInputProps) {
    super(props);
    this.numberInputRef = React.createRef();
  }

  handleChange() {
    this.props.inputValue(Number(this.numberInputRef.current?.value) || 0);
  }

  render() {
    return (
      <div className="form__element-wrap">
        <label htmlFor={this.props.id} className="form__element-label">
          {this.props.label}
        </label>
        <input
          type="number"
          min="0"
          name={this.props.name}
          onChange={() => this.handleChange()}
          ref={this.numberInputRef}
          id={this.props.id}
          className="form__element-input"
          required
        />
      </div>
    );
  }
}

export default FormNumberInput;
