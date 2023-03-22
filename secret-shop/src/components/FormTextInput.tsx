import React from 'react';
import { FormElementsProps, FormTextInputProps } from '../types/types';

class FormTextInput extends React.Component<FormElementsProps & FormTextInputProps> {
  textInput: React.RefObject<HTMLInputElement>;

  constructor(props: FormElementsProps & FormTextInputProps) {
    super(props);
    this.textInput = React.createRef();
  }

  handleChange() {
    this.props.inputValue(this.textInput.current?.value || '');
  }

  render() {
    return (
      <div className="form__element-wrap">
        <label htmlFor={this.props.id} className="form__element-label">
          {this.props.label}
        </label>
        <input
          type="text"
          name={this.props.name}
          onChange={() => this.handleChange()}
          ref={this.textInput}
          id={this.props.id}
          className="form__element-input"
        />
      </div>
    );
  }
}

export default FormTextInput;
