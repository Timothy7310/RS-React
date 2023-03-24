import React from 'react';
import { FormElementsProps, FormTextInputProps } from '../../types/types';
import FormErrorMessage from './FormErrorMessage';

class FormDateInput extends React.Component<FormElementsProps & FormTextInputProps> {
  dateInputRef: React.RefObject<HTMLInputElement>;

  constructor(props: FormElementsProps & FormTextInputProps) {
    super(props);
    this.dateInputRef = React.createRef();
  }

  handleChange() {
    this.props.inputValue(this.dateInputRef.current?.value || '');
  }

  render() {
    return (
      <div className="form__element-wrap">
        <label htmlFor={this.props.id} className="form__element-label">
          {this.props.label}
        </label>
        <input
          type="date"
          required
          name={this.props.name}
          onChange={() => this.handleChange()}
          ref={this.dateInputRef}
          id={this.props.id}
          className="form__element-input"
        />
        <FormErrorMessage valid={this.props.valid} message="Ops some mistake! try harder" />
      </div>
    );
  }
}

export default FormDateInput;
