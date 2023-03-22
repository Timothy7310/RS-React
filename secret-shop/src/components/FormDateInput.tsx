import React from 'react';
import { FormElementsProps, FormTextInputProps } from '../types/types';

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
          name={this.props.name}
          onChange={() => this.handleChange()}
          ref={this.dateInputRef}
          id={this.props.id}
          className="form__element-input"
        />
      </div>
    );
  }
}

export default FormDateInput;
