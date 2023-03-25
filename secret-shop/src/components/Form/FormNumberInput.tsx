import React from 'react';
import { FormElementsProps, FormTextInputProps } from '../../types/types';
import FormErrorMessage from './FormErrorMessage';

class FormNumberInput extends React.Component<FormElementsProps & FormTextInputProps> {
  numberInputRef: React.RefObject<HTMLInputElement>;

  constructor(props: FormElementsProps & FormTextInputProps) {
    super(props);
    this.numberInputRef = React.createRef();
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
          ref={this.numberInputRef}
          id={this.props.id}
          className="form__element-input"
          required
        />
        <FormErrorMessage valid={this.props.valid} message="Ops some mistake! try harder" />
      </div>
    );
  }
}

export default FormNumberInput;
